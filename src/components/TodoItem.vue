<template>
  <li class="todo">
    <div class="view">
      <input class="toggle"
        type="checkbox">
      <button class="destroy"></button>
    </div>
    <v-flex xs12 sm6 md3>
      <v-text-field
        label="Solo"
        solo
        ></v-text-field>
      </v-flex>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
  props: [
    'todo here'
  ]
}
</script>
