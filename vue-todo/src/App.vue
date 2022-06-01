<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addtodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';

export default {
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem(todoItem) {
      const obj = {
        completed: false,
        item: todoItem
      };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item); // localStorage key 값으로 remove
      this.todoItems.splice(index, 1); // Array 에서도 index 값으로 부터 1개 splice
    },
    toggleOneItem(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed
      // 로컬 스토리지 데이터 갱신.
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  },
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  }
}
</script>

<style lang="scss">
body {
  font-family: 'Ubuntu', sans-serif;
  text-align: center;
  background-color: #f6f6f6;
}

input {
  width: 200px;
  border-style: groove;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rgba(0,0,0,.03);
}
</style>