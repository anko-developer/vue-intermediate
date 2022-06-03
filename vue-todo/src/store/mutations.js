const addOneItem = (state, todoItem) => {
  const obj = {
    completed: false,
    item: todoItem
  }
  localStorage.setItem(todoItem, JSON.stringify(obj));
  state.todoItems.push(obj);
}

const removeOneItem = (state, payload) => {
  localStorage.removeItem(payload.todoItem.item); // localStorage key 값으로 remove
  state.todoItems.splice(payload.index, 1); // Array 에서도 index 값으로 부터 1개 splice
}

const toggleOneItem = (state, payload) => {
  state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
  // 로컬 스토리지 데이터 갱신.
  localStorage.removeItem(payload.todoItem.item);
  localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}

const clearAllItems = (state) => {
  localStorage.clear();
  state.todoItems = [];
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }