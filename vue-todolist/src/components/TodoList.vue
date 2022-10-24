<template>
  <div>
    List
  </div>
</template>

<script>
export default {

}
</script>

<style scope>
ul {
  list-style: none;
  padding-left: 0;
  margin-top: 0;
  text-align: left;
}

ul > li {
  display: flex;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  border-radius: 5px;
  background-color: #fff;
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