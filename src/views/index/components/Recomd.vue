<template>
    <div id="Recomd">
        <swiper class="swiper" :options="swiperOption" @slideChange="slideChange">
            <swiper-slide ref="videos" class="item" v-for="(item,index) of videoList" :key="index">
                <my-video :param="item" :swiperIndex="swiperIndex" :selfIndex="index"></my-video>
                <Left />
                <Right />
            </swiper-slide>
        </swiper>
    </div>
</template>
<script lang="ts">
import {Vue,Component} from 'vue-property-decorator'
import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
import MyVideo from './MyVideo.vue'
import Left from './Left.vue'
import Right from './Right.vue'

@Component({
    name: 'Recomd',
    components: {
        Swiper,
        SwiperSlide,
        Left,
        Right,
        MyVideo
    }
})
export default class Recomd extends Vue{
    constructor(){
        super()
    }
    private userEq = true //是否是pc端
    // swiper配置
    private swiperOption = {
        direction:'vertical', //滑动方向
        autoHeight: true, //高度随内容变化
         on:{
            tap: (event: any)=> {
                this.videos(event.activeIndex)
            },
            slidePrevTransitionEnd: (event: any)=> { //上一个
                const v = (this.$refs.videos as any)
                if (event.activeIndex+1 <= v.length) {
                    ((v[event.activeIndex+1] as any) as any).$children[0].reset()
                }
            },
            slideNextTransitionEnd: (event: any)=> { // 下一个
                (((this.$refs.videos as any)[event.activeIndex-1] as any) as any).$children[0].reset()
            }
        },
    }
    // 视频数据
    private videoList = [
        {id: 1, src: 'http://sivideo1.shuabaoba.cn/dGVzdA_E_E/MTU3MzA5ODExMjk5Mg_E_E/NDQwMjA4Nw_E_E/ODc2NDU1Lm1wNA_E_E_0_default.mp4'},
        {id: 2, src: 'http://sivideo1.shuabaoba.cn/dGVzdA_E_E/MTU3MjMyMjE4NTI2MQ_E_E/NzQ3NzQ0Mw_E_E/OTI3MzI1Lm1wNA_E_E_0_default.mp4'},
        {id: 3, src: 'http://ccvideo1.shuabaoba.cn/dGVzdA_E_E/MTU3MTE5OTM5NTM1OA_E_E/Mjc3MTc2OQ_E_E/NDczNTIxLm1wNA_E_E_0_default.mp4'}
    ]
    // swiper的index
    private swiperIndex = 0
    // 视频切换
    public slideChange (e: any) {
        this.swiperIndex = e.activeIndex || 0
    }
    // 点击屏幕 播放视频
    public videos (index: any) {
        (((this.$refs.videos as any)[index] as any) as any).$children[0].clickVideo()
    }

    // 判断客户端是否是pc端
    public eqType(): boolean{
        return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
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
            position: relative;
        }
        .videoPlayer{
            width: 100%;
            height: 100%;
            // pointer-events: none;
        }
    }
}
</style>