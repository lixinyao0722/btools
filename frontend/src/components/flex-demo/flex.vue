<template>
  <div>
    <div class="box1">
      <div class="item1">
        <h1>我是标题</h1>
        <p>我是内容文本</p>
        <h3>我是脚本</h3>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'flex'
  }
</script>

<style scoped>
  .box1 {
    background-color: #ffe665;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item1 {
    width: 100px;
    background-color: #00c800;
  }
</style>
