import axios from "axios";

import { mapGetters } from "vuex";
export default {
  name: "homePage",
  data() {
    return {
      date: '',
      key: '',
      categories: {},
      posts: {},
      tokenStatus : false
    };
  },

  computed: {
    ...mapGetters(['storageToken', 'storageUser'])
  },

  methods: {
    
    getCategories(){
        axios.get('http://127.0.0.1:8000/api/get/category').then((Response)=>{
         this.categories = Response.data.category;
        })
    },
    
    getPosts() {
        axios.get('http://127.0.0.1:8000/api/get/post').then((Response)=>{

          for(let i = 0; i< Response.data.posts.length; i++){
            if(Response.data.posts[i].image){
              Response.data.posts[i].image = "http://127.0.0.1:8000/storage/"+Response.data.posts[i].image    
            }else{
              Response.data.posts[i].image = "http://127.0.0.1:8000/storage/Image_not_available.png"
            }     
          }
          this.posts = Response.data.posts
      })
    },

    search(){
      let search = {
        key: this.key
      }
      axios.post('http://127.0.0.1:8000/api/search/post', search ).then((Response) => {
        
        for(let i = 0; i < Response.data.searchData.length; i++){
          if(Response.data.searchData[i].image){
            Response.data.searchData[i].image = "http://127.0.0.1:8000/storage/"+Response.data.searchData[i].image
          }else{
            Response.data.searchData[i].image = "http://127.0.0.1:8000/storage/Image_not_available.png"
          }
        }
        this.posts = Response.data.searchData
      })
    },

    CategoryNav(id){
      let search = {
        id: id
      }
      axios.post('http://127.0.0.1:8000/api/get/category', search).then((Response) => {
        for(let i =0; i< Response.data.posts.length; i++){
          if(Response.data.posts[i].image){
            Response.data.posts[i].image = "http://127.0.0.1:8000/storage/"+Response.data.posts[i].image
          }else{
            Response.data.posts[i].image = "http://127.0.0.1:8000/storage/Image_not_available.png"
          }
        }
        this.posts = Response.data.posts
      })
    },

    viewDetail(id){
      this.$router.push({
        name: "postDetails",
        query: {id: id}
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

    login(){
      this.$router.push('login')
    },

    logout(){
      this.$store.dispatch('setToken', null)
      this.login()
    }

  },
  mounted() {
    this.getDate()
    this.checkToken()
    this.getPosts()
    this.getCategories()
  },
};
