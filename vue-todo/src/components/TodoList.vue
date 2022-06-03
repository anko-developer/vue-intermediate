<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete({todoItem, index})"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem', // mapMutation은 인자를 안넣어줘도 암묵적으로 인자 값을 넘겨준다. 결과 적으로는 v-on:click="removeTodo({todoItem, index})" 에서의 인자 {todoItem, index}가 넘어간다.
      toggleComplete: 'toggleOneItem'
    }),
    // removeTodo(todoItem, index) {
    //   this.$store.commit('removeOneItem', {todoItem, index});
    // },
    // toggleComplete(todoItem, index) {
    //   this.$store.commit('toggleOneItem', {todoItem, index});
    // }
  },
  computed: {
    // todoItems() {
    //   return this.$store.getters.storedTodoItems;
    // }
    ...mapGetters(['storedTodoItems'])

    // getters 이름이 달라도 이렇게 연동이 가능함
    // ...mapGetters({
    //   todoItems: 'storedTodoItems'
    // })
  }
}
</script>

<style lang="scss" scope>
ul {
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;

  li {
    display: flex;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    border-radius: 5px;
    background-color: #fff;
  }
}

.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}

.checkBtnCompleted {
  color: #b3adad;
}

.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}

.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/* 리스트아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}

.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
/* 리스트아이템 트랜지션 효과 */
</style>