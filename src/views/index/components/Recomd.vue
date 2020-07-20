<template>
    <div id="Recomd">
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide class="item">页面1</swiper-slide>
            <swiper-slide class="item">页面2</swiper-slide>
            <swiper-slide class="item">页面3</swiper-slide>
        </swiper>
    </div>
</template>
<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'
import { Swiper, SwiperSlide} from 'vue-awesome-swiper'

@Component({
    name: 'Recomd',
    components: {
        Swiper,
        SwiperSlide
    }
})
export default class Recomd extends Vue{
    // swiper配置
    private swiperOption = {
        direction:'vertical', //滑动方向
        autoHeight: true, //高度随内容变化
    }
}
</script>
<style lang="less" scoped>
#Recomd{
    width: 100%;
    height: 100%;
    color: #fff;
    .swiper{
        width: 100%;
        height: 100%;
        .item{
            width: 100%;
            height: 100%;
        }
    }
}
</style>