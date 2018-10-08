<template>
  <div class="about">
    <h1>This is an api list {{count}}</h1>
    <v-btn v-if=flag color="success" @click="swapFlag">TRUE</v-btn>
    <v-btn v-else color="info" @click="swapFlag">FALSE</v-btn>
    <v-btn color="success" @click="readPosts">GET</v-btn>
     <v-progress-circular v-if=loading
      indeterminate
      color="primary"
    ></v-progress-circular>
    <ul>
      <li v-for="item in posts.slice(0, 5)" :key="item.id">
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
    loading () {
      return this.$store.state.loading
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
