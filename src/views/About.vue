<template>
  <div class="about">
    <h1>This is an api list {{count}}</h1>
    <v-btn v-if=flag color="success" @click="swapFlag">TRUE</v-btn>
    <v-btn v-else color="info" @click="swapFlag">FALSE</v-btn>
    <v-btn color="success" @click="readPosts">GET</v-btn>
    <ul>
      <li v-for="item in posts" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'about',
  computed: {
    flag () {
      return this.$store.state.flag
    },
    count () {
      return this.$store.state.count
    },
    posts () {
      return this.$store.state.posts
    }
  },
  methods: {
    swapFlag () {
      this.$store.dispatch('invertFlag')
    },
    readPosts () {
      this.$store.dispatch('getPosts')
    }
  }

}
</script>
