<template>
  <v-list-tile class="todo-item" :class="{ 'editing': editing }">

  </v-list-tile>
</template>
<script>
export default {
  name: 'TodoItem',
  editing: false,
  props: [
    'todo',
    'editing'
  ]
}
</script>
