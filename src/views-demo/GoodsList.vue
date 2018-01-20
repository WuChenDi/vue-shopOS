<template>
  <div>
    这是商品列表页面
    <span>{{ $route.params.goodsId }}</span><br/>
    <span>{{ $route.params.name }}</span>
    <router-link to="/goods/title">显示商品标题</router-link>
    <router-link to="/goods/img">显示商品图片</router-link>
    <div>
      <router-view></router-view>
    </div>
    <router-link to="/cart">跳转到购物车页面（to）</router-link><br/>
    <button @click="jump"> button - 跳转到购物车页面（编程式路由来实现跳转） </button><br/>
    <router-link v-bind:to="{name:'cart'}">跳转到购物车页面（命名路由）</router-link><br/>
    <router-link v-bind:to="{name:'cart',params:{cartId:123}}">跳转到购物车页面（命名路由-路由参数）</router-link><br/>
    <!--
      路由实现跳转：
                  1.router-link to=:"/XXX"
                  2.编程式路由来实现跳转：this.$router.push({path:'/cart'});
                  3.命名路由
    -->
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        mag: 'hello vue'
      }
    },
    methods: {
      jump () {
        // this.$router.push("./cart")
        // this.$router.push({path:'/cart'});
        this.$router.push({path:'/cart?goodsId=123'});
        // this.$router.go(-2); // 倒退两步
      }
    }
  }
</script>

<style>

</style>
