<template>
    <div>
        <HomeHeader></HomeHeader>
        <div class="wrapper">
            <div>
                <div class="container">
                    <h3>{{ article.title }}</h3>
                    <p>{{ article.content }}</p>
                </div>
            </div>
        </div>  
    </div>
</template>
<script>
import HomeHeader from "../common/components/HomeHeader"
import axios from "axios"
export default {
    name:"detail",
    data(){
        return{
            article:"haha"
        }
    },
    components:{
        HomeHeader
    },
    methods:{
        getArticleInfo(){
            const url= '/static/data/detail/detail' + this.$store.state.aid +'.json'
            axios.get(url).then(this.getdata)
        },
        getdata(res){
            if(res){
                this.article=res.data.data
            }
        }
    },
    mounted(){
        this.getArticleInfo()
    }
}
</script>
<style lang="stylus" scoped>
    .wrapper
        position:relative
        top:1.8rem
        height:13rem
        width:100%
        .container
            height:auto
            h3
                ellipsis() 
                padding:0.1rem
            p
                ellipsis()
                padding:0.2rem
</style>