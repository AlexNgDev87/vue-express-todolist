<template>
  <div id="app">
    <div class="container">
      <create-todo></create-todo>
      <list-todo></list-todo>
    </div>
  </div>
</template>

<script>
import CreateTodo from './todo/CreateTodo.vue'
import ListTodo from './todo/ListTodo.vue'

export default {
  name: 'app',
  data() {
    return {}
  },
  components: { CreateTodo, ListTodo },
}
</script>


<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
</style>
