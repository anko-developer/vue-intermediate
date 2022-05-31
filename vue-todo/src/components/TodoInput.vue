<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
    </span>

    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
        <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
      </h3>
      
      <section slot="body">
        섹션
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
        this.$emit('addtodoItem', this.newTodoItem);
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
    Modal: Modal
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

.closeModalBtn {
  color: #42b983;
}
</style>