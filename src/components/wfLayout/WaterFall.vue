<template>
  <div class="waterfall">
    <div class="waterfall-image" v-for="img in imgList" :key="img.url">
      <img :src="img.url" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HeightCss", //等高瀑布流 CSS实现
  data() {
    return {
      imgList: []
    };
  },
  methods: {
    loadImage() {
      for (let i = 0; i < 17; i++) {
        let image = new Image();
        let url = require(`@/assets/images2/P_${i}.jpg`);
        image.src = url;
        image.onload = () => {
          this.imgList.push({
            url: url,
            width: image.width,
            height: image.height
          });
        };
      }
    }
  },
  created() {
    this.loadImage();
  }
};
</script>

<style lang="less" scoped>
.waterfall {
  display: flex;
  flex-wrap: wrap;
  &-image {
    margin: 5px;
    flex-grow: 1; //可放大
    img {
      display: block;
      min-width: 100%;
      height: 200px;
      object-fit: cover; //裁剪比例适应容器尺寸
    }
  }
  &:after {
    content: "";
    display: block;
    flex-grow: 9999;
  }
}
</style>

