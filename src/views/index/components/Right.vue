<template>
    <div class="rec-right">
        <div class="portrait">
            <img class="img" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=231923533,1272780950&fm=11&gp=0.jpg" />
        </div>
        <div class="xin item">
            <span class="iconfont icon">&#xe602;</span>
            <span class="dec">12.3w</span>
        </div>
        <div class="comment item">
            <span class="iconfont icon">&#xe601;</span>
            <span class="dec">1024</span>
        </div>
        <div class="forward item">
            <span class="iconfont icon">&#xe603;</span>
            <span class="dec">99</span>
        </div>
        <div class="music">
            <img class="img" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=231923533,1272780950&fm=11&gp=0.jpg" />
        </div>
    </div>
</template>
<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'
@Component({
    name: 'Right',
})
export default class Left extends Vue{

}
</script>
<style lang="less" scoped>
@keyframes musicIcon {
    0% { transform: rotate(0deg);}
    100% { transform: rotate(360deg);}
}
.rec-right{
    position: absolute;
    right: 0.1rem;
    bottom: 0.6rem;
    z-index: 1;
    color: #fff;
    font-size: 0.15rem;
    width: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .portrait{
        margin-bottom: 0.2rem;
        text-align: center;
        .img{
            max-width: 0.4rem;
            max-height: 0.4rem;
            border-radius: 100%;
            
        }
    }
    .item{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin-bottom: 0.2rem;
        .dec{
            width: 100%;
            margin-top: 0.06rem;
            font-size: 0.12rem;
            text-align: center;
        }
    }
    .xin{
        .icon{
            font-size: 0.24rem;
            position: relative;
            left: 0.03rem;
        }
    }
    .comment{
        .icon{
            font-size: 0.28rem;
        }
    }
    .forward{
        .icon{
            font-size: 0.28rem;
        }
    }
    .music{
        width: 0.36rem;
        height: 0.36rem;
        background: #333;
        border-radius: 100%;
        padding: 0.06rem;
        animation: musicIcon 3s infinite linear;
        .img{
            max-width: 100%;
            max-height: 100%;
            border-radius: 100%;
        }
    }
}
</style>