<template>
  <div class="todos">
    <h1>This is an api list {{count}}</h1>
    <v-btn color="success" @click="readTodos">GET</v-btn>
     <v-progress-circular v-if=loading
      indeterminate
      color="primary"
    ></v-progress-circular>
    <ul>
      <li v-for="item in todos.slice(0, 5)" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
    <v-btn color="success" @click="addTodo">ADD</v-btn>
     </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'todos',
  computed: {
    loading () {
      return this.$store.state.loading
    },
    count () {
      return this.$store.state.count
    },
    todos () {
      return this.$store.state.todos
    }
  },
  methods: {
    readTodos () {
      this.$store.dispatch('loadTodos')
    },
    addTodo () {
        
      this.$store.dispatch('addTodo')
    }
  }

}
</script>
