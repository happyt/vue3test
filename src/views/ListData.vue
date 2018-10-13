<template>
  <div class="listdata">
    <h1>This is an api list {{url}}</h1>
    <v-btn color="success" @click="readList">GET</v-btn>
     <v-progress-circular v-if=loading
      indeterminate
      color="primary"
    ></v-progress-circular>
    <ul>
      <li v-for="item in todos.slice(0, 5)" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
     </div>
</template>

<script>

// @ is an alias to /src
import TodoItem from '@/components/TodoItem.vue'

export default {
  name: 'listdata',
  components: {
    TodoItem
  },
  computed: {
    url () {
      return this.$store.state.listURL
    },
    loading () {
      return this.$store.state.loading
    },
    todos () {
      return this.$store.state.todosh
    }
  },
  methods: {
    readList () {
      this.$store.dispatch('loadList')
    }
  }

}
</script>
