<template>
  <div id="card">
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
    <TodoItem todo=todo1  editing=true />
     </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'

// @ is an alias to /src

export default {
  name: 'todos',
  todo1: {
    'id': 11,
    'completed': false,
    'title': 'Alphabet zoo'
  },
  components: {
    TodoItem
  },
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
      console.log('reading...')
      this.$store.dispatch('loadTodos')
    },
    addTodo () {
      this.$store.dispatch('addTodo')
    }
  }

}
</script>
