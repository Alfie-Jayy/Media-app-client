import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "LogIn",
  data() {
    return {
      date: '',
      userData: {
        'email' : '',
        'password': ''
      },
      tokenStatus: false,
      errorStatus: false
    }
  },

  computed: {
    ...mapGetters(['storageToken', 'storageUser'])
  },

  methods: {

    loginBtn(){
      axios.post('http://127.0.0.1:8000/api/user/login', this.userData).then((Response)=>{
          if(Response.data.token){
            this.errorStatus = false
            this.$store.dispatch('setToken', Response.data.token)
            this.$store.dispatch('setUser', Response.data.user)
            this.home();
          }
          else{
            this.userData.email = ""
            this.userData.password = ""
            this.errorStatus = true
          }
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

    home() {
      this.$router.push("home");
    },

    contact(){
      this.$router.push('contact')
    },
    
    login() {
      this.$router.push("login");
    },

    logout(){
      this.$store.dispatch('setToken', null)
      this.login()
    }
  },

  mounted () {
    this.getDate()
    this.checkToken();
  },
};
