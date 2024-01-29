import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "postDetails",
  data() {
    return {
      date: '',
      id: 0,
      viewCounts: 0,
      posts: {},
      tokenStatus: false
    };
  },

  computed: {
    ...mapGetters(['storageToken', 'storageUser'])
  },

  methods: {

    getPost(postId) {

      let post = {
        id: postId
      }

      axios
        .post("http://127.0.0.1:8000/api/post/detail",post)
        .then((Response) => {
          if(Response.data.post.image){
            Response.data.post.image = "http://127.0.0.1:8000/storage/"+Response.data.post.image
          }
          else{
            Response.data.post.image = "http://127.0.0.1:8000/storage/Image_not_available.png"
          }
          this.posts = Response.data.post
        });
    },

    viewCount(){
      let data = {
        user_id: this.storageUser.id,
        post_id: this.$route.query.id
      }
      axios.post('http://127.0.0.1:8000/api/post/view', data).then((Response)=> {
        this.viewCounts = Response.data.viewPosts.length
      })
    },

    checkToken(){
      if(this.storageToken){
        this.tokenStatus = true
      }else{
        this.tokenStatus = false
      }
    },

    getDate(){
      this.date = new Date().toDateString();
    },

    home(){
      this.$router.push('home')
    },

    contact(){
      this.$router.push('contact')
    },

    logout(){
      this.$store.dispatch('setToken', null)
      this.login()
    },

    back(){
      history.back()
    }
  
  },

  mounted() {
    this.getDate()
    this.checkToken()
    this.id = this.$route.query.id;
    this.getPost(this.id)
    this.viewCount()
  }
};
