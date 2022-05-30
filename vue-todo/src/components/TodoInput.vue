<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button class="" v-on:click="addTodo">add</button> -->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>
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
      if (this.newTodoItem !== '') {
        this.$emit('addtodoItem', this.newTodoItem);
        this.clearInput();
      }
    },
    clearInput() {
      this.newTodoItem = '';
    }
  }
}
</script>

<style lang="scss" scoped>
.inputBox {
  position: relative;
  height: 50px;
  border-radius: 5px;
  line-height: 50px;
  background-color: #fff;

  input {
    display: block;
    width: 100%;
    height: 50px;
    padding: 0;
    border-style: none;
    font-size: 0.9rem;
  }
}

.addContainer {
  
  position: absolute;
  top: 0;
  right: 0;
  width: 3rem;
  border-radius: 0 5px 5px 0;
  background: linear-gradient(to right, #647BFB, #8763FB);
}

.addBtn {
  vertical-align: middle;
  color: #fff;
}
</style>