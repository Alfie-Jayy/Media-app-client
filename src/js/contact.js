import { mapGetters } from "vuex";
export default {
  name: "LogIn",
  data() {
    return {
      date: '',
      tokenStatus: false
    }
  },

  computed: {
    ...mapGetters(['storageToken', 'storageUser'])
  },

  methods: {

    checkToken(){
      if(this.storageToken){
        this.tokenStatus = true
      }else{
        this.tokenStatus = false
      }
    },

    home() {
      this.$router.push("home");
    },

    contact(){
      this.$router.push('contact')
    },

    getDate(){
      this.date = new Date().toDateString();
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
