<template>
    <div id="nav">
        <router-link to="/index" tag="div" class="nav-item">首页</router-link>
        <router-link to="/city" tag="div" class="nav-item">同城</router-link>
        <div class="nav-item">
            <span class="iconfont add">&#xe69e;</span>
        </div>
        <router-link to="/message" tag="div" class="nav-item">消息</router-link>
        <router-link to="/me" tag="div" class="nav-item">我的</router-link>
    </div>
</template>
<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'

@Component({
    
})
export default class Navigation extends Vue{

}

</script>
<style lang="less" scoped>
#nav{
    width: 100%;
    height: 0.5rem;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: solid 0.01rem rgba(255, 255, 255, 0.3);
    background-color: transparent;
    z-index: 99;
    .nav-item{
        width: 20%;
        text-align: center;
        height: 100%;
        line-height: 0.5rem;
        float: left;
        font-size: 0.15rem;
        color: @fontColor;
        position: relative;
        .add{
            font-size: 0.32rem;
        }
    }
    .eq-nav-active{
        &::after{
            content: '';
            width: 0.3rem;
            height: 0.02rem;
            background-color: @fontColor;
            position: absolute;
            left: 50%;
            margin-left: -0.15rem;
            bottom: 0.05rem;
        }
    }
}

</style>