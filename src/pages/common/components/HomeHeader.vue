<template>
    <div class="header">
        <div class="btn-top">
            <div class="header-left">
                <span class="iconfont">&#xe696;</span>
            </div>
            <div class="header-right">
                <div class="iconfont">
                    <input class="header-input" type="text">
                    <!-- <span class="icon">&#xe693;</span> -->
                </div>
            </div>
        </div>
        <div class="catalog-list">
            <li v-for = "nav of navlist"
                :key="nav.id"
                :id="nav.id"
                @click="handleNavClick"
            >
                {{ nav.name }} 
            </li>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name : "HomeHeader",
    data () {
        return {
            navlist:"",
            recodata:""
        }
    },
    methods:{
        getHomeInfo(){
            axios.get("/static/data/navlist.json").then(this.getdata)
        },
        getdata(res){
            if(res){
                this.navlist=res.data.data
            }
        },
        handleNavClick(e){
            this.$store.dispatch("navChange",e.target.id)
            this.$emit("handleNav")
            const url='/?id='+e.target.id
            this.$router.push(url)
        }
    },
    mounted(){
        this.getHomeInfo()
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/variables.styl'
    .header
        height:1.6rem 
        position:fixed
        top:0
        left:0
        right:0
        background:#30A080
        //background-image:url(https://img1.doubanio.com/view/puppy_image/raw/public/1653ca7fe02u04zlerm.jpg)
        z-index:99
        .btn-top 
            display:flex
            .header-left
                height: .64rem
                line-height: .64rem
                margin-top: .12rem
                margin-left: .2rem
                padding-left: .2rem 
                margin-bottom:.2rem
                width: 10%   
            .header-right
                width:90%
                .header-input
                    height: .64rem
                    line-height: .64rem
                    margin-top: .12rem
                    margin-left: .2rem
                    padding-left: .2rem    
                    flex: 1
                    background: #ffff
                    border-radius: .1rem
                    color: black
                    width:70%
        .catalog-list
            width:100%
            li
                display:inline
                padding-left:.6rem
                float:left
</style>