<template>
  <div ref="waterfall" class="waterfall">
    <div ref="container" class="waterfall-container">
      <div class="waterfall-col" v-for="(col,index) in imgList" :key="index">
        <div class="waterfall-imgbox" v-for="img in col" :key="img">
          <img :src="img" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  /**
   * 等宽瀑布流，js计算列数，图片依次排列
   * 优点：简单，缺点：不美观，每列参差不齐。
   */
  name: "WaterFallHeight",
  data() {
    return {
      resizeRender: null,
      colWidth: 200,
      imgList: [],
      colNumbers: 0
    };
  },
  created() {},
  mounted() {
    this.resizeRender = this.throttle(this.resize, 200);
    this.loadImage();
    window.addEventListener("resize", this.resizeRender);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resizeRender);
  },
  methods: {
    loadImage() {
      this.getCoNumbers();
      for (let i = 0; i < 17; i++) {
        let url = require(`@/assets/images/${i}.jpg`);
        let colIndex = i % this.colNumbers;
        if (this.imgList[colIndex]) {
          this.imgList[colIndex].push(url);
        } else {
          this.$set(this.imgList, colIndex, [url]);
        }
      }
    },
    getCoNumbers() {
      let clientWidth = this.$refs.waterfall.clientWidth;
      this.colNumbers = Math.floor(clientWidth / this.colWidth);
      this.$refs.container.style.marginLeft =
        (clientWidth - this.colNumbers * this.colWidth) / 2 + "px";
    },
    resize() {
      this.imgList = [];
      this.loadImage();
    },
    throttle(fn, threshhold = 100) {
      let timeout = null;
      let start = new Date();
      return function() {
        let curr = new Date() - 0;
        clearTimeout(timeout);
        if (curr - start >= threshhold) {
          fn.apply(this, arguments);
          start = curr;
        } else {
          timeout = setTimeout(() => {
            fn.apply(this, arguments);
          }, threshhold);
        }
      };
    }
  }
};
</script>
<style lang="less" scoped>
.waterfall {
  margin: 0 auto;
  overflow: hidden;
  &-col {
    float: left;
    width: 200px;
  }
  &-imgbox {
    margin: 10px 5px;
    img {
      display: block;
      width: 100%;
    }
  }
}
</style>


