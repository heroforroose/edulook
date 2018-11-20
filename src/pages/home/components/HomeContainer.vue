<template>
    <div class="wrapper">
        <div>
            <div class="container">
                <ul>
                    <li
                        v-for="article of articles"
                        :key="article.aid"
                        
                        @click="handleclick(article.aid)"   
                    >
                        <h1>{{ article.title }}</h1>
                        <p>{{ article.abstract }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>    
</template>
<script>
import axios from "axios"
export default {
    name: "HomeContainer",
    props: {
        articleList:Array|Object|String
    },
    data(){
        return {
            data:"",
            article:""
        }
    },
    computed:{
        articles(){
            return this.articleList
        }
    },
    methods:{
        handleclick(aid){
            this.$store.dispatch("toArticle",aid)
            const url = '/detail/?id=' + this.$store.state.aid
            this.$router.push(url)
        },
        getArticle(res){
            this.data=res.data.data.title
        }    
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
            ul
                li
                    margin:0.1rem
                    padding:0.2rem
                    border-bottom:0.02rem solid gray
                    h3
                        ellipsis()
                    p
                        ellipsis()
                        padding:0.2rem
    
</style>