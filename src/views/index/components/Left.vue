<template>
    <div class="rec-left">
        <div class="title">@兔子先生</div>
        <div class="dec">希望有天像你一样无所畏惧 #林深</div>
        <div class="music"><span class="iconfont">&#xe621;</span>夏天的风</div>
    </div>
</template>
<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'
@Component({
    name: 'Left',
})
export default class Left extends Vue{

}
</script>
<style lang="less" scoped>
.rec-left{
    position: absolute;
    left: 0.1rem;
    bottom: 0.6rem;
    z-index: 1;
    color: #fff;
    font-size: 0.15rem;
    .title{
        font-size: 0.17rem;
        margin-bottom: 0.15rem;
    }
    .dec{
        font-size: 0.14rem;
        margin-bottom: 0.15rem;
        max-width: 2.8rem;
    }
    .iconfont{
        margin-right: 0.05rem;
    }
}
</style>