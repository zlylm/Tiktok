<template>
    <div class="header">
        <span class="iconfont scan">&#xe600;</span>
        <router-link to="/index/recomd" class="item" tag="div">推荐</router-link>
        <router-link to="/index/follow" class="item" tag="div">关注</router-link>
        <span class="iconfont search">&#xe605;</span>
    </div>
</template>
<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'

@Component({

})
export default class Header extends Vue{

}
</script>
<style lang="less" scoped>
.header{
    padding: 0.1rem;
    font-size: 0.15rem;
    text-align: center;
    box-sizing: border-box;
    .scan{
        font-size: 0.26rem;
        float: left;
    }
    .search{
        font-size: 0.26rem;
        float: right;
    }
    .item{
        display: inline-block;
        padding: 0.05rem 0.1rem;
        font-size: 0.18rem;
    }
}
</style>