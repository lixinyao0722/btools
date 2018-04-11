<template>
    <h1>测试js语法</h1>
</template>

<script>
  export default {
    name: 'js',
    created () {
      function People () {
        this.fName = 'people'
      }

      People.prototype.pTag = 'p'

      function Child () {
        this.cName = 'child'
      }

      Child.prototype.cTag = 'c'

      console.log(Child.__proto__)
      // console.log(Child.prototype)
      // Child.prototype = new People()
      // console.log(Child.prototype)
      // console.log(new Child())

      // const p = new People()
      // console.log(People.prototype)
      // console.log(People.prototype.__proto__)
      // console.log(p.__proto__)
      // console.log(People.prototype === p.__proto__)
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
