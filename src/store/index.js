import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: []
  },
  actions: {
    addTodo(context, todo) {
      return context.commit('addTodo', todo);
    },
    removeTodo(context, todo) {
      return context.commit('removeTodo', todo);
    }
  },
  mutations: {
    addTodo(state, todo) {
      return state.todos.push(todo);
    },
    removeTodo(state, todo) {
      return state.todos = state.todos.filter(t => t !== todo);
    }
  }
});

export default store;