<template>
  <div>
    这是商品列表页面<br>
    商品ID为:<span>{{$route.params.goodsId}}</span><br>
    商品名称为:<span>{{$route.params.name}}</span><br>
  </div>
</template>

<style>
</style>

<script>
export default {
  data() {
    return {
      msg: "hello vue"
    };
  }
};
</script>
