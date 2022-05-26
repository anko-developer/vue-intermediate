<template>
  <div>
    <input type="text" v-model="newTodoItem">
    <button v-on:click="addTodo">add</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newTodoItem: ""
    }
  },
  methods: {
    addTodo() {
      localStorage.setItem(this.newTodoItem, this.newTodoItem);
      this.newTodoItem = '';
    },
    
  }
}
</script>

<style lang="scss" scoped>

</style>