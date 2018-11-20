<template>
  <div>
    <HomeHeader @handleNav="getNavData"></HomeHeader>
    <HomeContainer :articleList="data"></HomeContainer>
  </div>
</template> 

<script>
import HomeHeader from "../common/components/HomeHeader"
import HomeContainer from "./components/HomeContainer"
import axios from "axios"
export default {
  name : 'home',
  data () {
    return {
      data : "",
      navState:this.$store.state.nav
    }
  },
  components : {
    HomeHeader,
    HomeContainer
  },
  methods : {
    getNavData(){
      this.navData()
    },
    navData(){
      if(this.$store.state.nav==1){
        axios.get("/static/data/reco.json").then(this.getdata)
      }
      if(this.$store.state.nav==2){
        axios.get("/static/data/hot.json").then(this.getdata)
      }
      if(this.$store.state.nav==3){
        axios.get("/static/data/eng.json").then(this.getdata)
      }
      if(this.$store.state.nav==4){
        axios.get("/static/data/math.json").then(this.getdata)
      }
      if(this.$store.state.nav==5){
        axios.get("/static/data/biancheng.json").then(this.getdata)
      }
    },
    getdata(res){
      if(res){
        this.data=res.data.data
      }
    }
  },
  mounted(){
    this.getNavData()
  }
}
</script>
<style>
</style>