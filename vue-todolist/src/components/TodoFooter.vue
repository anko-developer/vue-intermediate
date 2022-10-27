<template>
  <footer class="clearAllContainer">
    <span class="clearBtn" @click="clearTodo">clear all</span>
  </footer>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      clearTodo: 'clearAllItems'
    })
  }
}
</script>

<style scope>
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