<template>
  <div class="setup">
    <h1>This is the value {{ count }}</h1>
    <v-btn color="success" @click="increment">Plus</v-btn>
    <v-btn color="error" @click="decrement">Minus</v-btn>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'setup',
  computed: {
    count () {
      return this.$store.state.count
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  }

}
</script>
