<template>
    <video-player ref="videoPlayer" class="videoPlayer" :playsinline="true" :options="playerOptions"></video-player>
</template>
<script lang="ts">
import {Vue,Component,Prop,Watch} from 'vue-property-decorator'
import { videoPlayer } from 'vue-video-player'
@Component({
    name: 'MyVideo',
    components: {
        videoPlayer
    }
})
export default class MyVideo extends Vue{
    @Prop() param: any //视频数据
    @Prop() swiperIndex: number|any //swiper的index
    @Prop() selfIndex: any //swiper的index

    // 播放器配置
    private playerOptions = {
        controls:true,//隐藏控制台
        autoplay: true, // 播放器准备好之后，是否自动播放
        muted: false, // 是否静音
        loop: false, // 循环播放
        fluid: true, // 是否适应父容器大小
        sources:[{
            type:'video/mp4',
            src: this.param.src
        }]
    }

    @Watch('swiperIndex')
    watchSwiperIndex(newVal: any, oldVal: any) {
        console.log(newVal)
    }
}
</script>