<template>
  <div class="clearAllContainer">
    <span class="clearBtn" v-on:click="clearTodo">Clear All</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      clearTodo: 'clearAllItems'
    })
    // clearTodo() {
    //   this.$store.commit('clearAllItems');
    // }
  }
}
</script>

<style lang="scss" scope>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  margin: 0 auto;
  background-color: #fff;
}

.clearBtn {
  display: block;
  color: #e20303;
}
</style>