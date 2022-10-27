<template>
  <div class="inputBox">
    <input  type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <span class="addContainer" @click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고
        <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
      </h3>
      <section slot="body">
        무언가를 입력하세요.
      </section>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue';

export default {
  data() {
    return {
      newTodoItem: '',
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        // this.$emit('addTodoItem', this.newTodoItem);
        const text = this.newTodoItem.trim();
        this.$store.commit('addOneItem', text);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() { 
      this.newTodoItem = '';
    }
  },
  components: {
    Modal
  }
}
</script>

<style scoped>
.inputBox {
  position: relative;
  height: 50px;
  border-radius: 5px;
  line-height: 50px;
  background-color: #fff;
}

.inputBox input {
    display: block;
    width: 100%;
    height: 50px;
    padding: 0;
    border-style: none;
    font-size: 0.9rem;
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

.closeModalBtn {
  color: #42b983;
}
</style>