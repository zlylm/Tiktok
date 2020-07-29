<template>
    <div class="same-city">
        <router-link class="title" tag="div" to="/citysel">厦门<span class="iconfont">&#xe604;</span></router-link>
    </div>
</template>
<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'


@Component({
    name: 'City',
})
export default class City extends Vue{
    
}
</script>
<style lang="less" scoped>
.same-city{
    color: @fontColor;
    .title{
        text-align: center;
        line-height: 0.45rem;
        font-size: 0.15rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        .iconfont{
            font-size: 0.2rem;
        }
    }
}
</style>