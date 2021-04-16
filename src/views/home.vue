<template>
  <div>
    <h1>home页面</h1>
    <div class="test">

    </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss">

  h1 {
    @extend .text-center;
    color: $color-primary;
  }
  .test {
    width: pxtorem(400);
    height: pxtorem(400);
    background-color: $color-primary;
    @include center;
  }
</style>