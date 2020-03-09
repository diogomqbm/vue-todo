<template>
  <div id="app">
    <h1>Todo List</h1>
    <ul>
      <transition-group name="slide-fade">
        <li :key="todo" v-for="todo in todos">
          <label>{{ todo }}</label>
          <button @click="removeTodo(todo)">X</button>
        </li>
      </transition-group>
    </ul>
    <form @submit.prevent="addTodo">
      <input v-model="nextTodo"/>
      <button type="submit">
        Submit
      </button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      nextTodo: ''
    }
  },
  computed: {
    todos () {
      return this.$store.state.todos;
    }
  },
  methods: {
    addTodo() {
      this.$store.dispatch('addTodo', this.nextTodo);
      return this.clearInput();
    },
    clearInput() {
      return this.nextTodo = "";
    },
    removeTodo(todo) {
      return this.$store.dispatch('removeTodo', todo);
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
