<template>
  <div class="about">
    <h1>This is an api listing</h1>
    <v-btn color="success" @click="readPosts">GET</v-btn>
    <li v-for="item in posts" :key="item.id">
      {{ item.title }}
    </li>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'about',
  computed: {
    count () {
      return this.$store.state.count
    },
    posts () {
      return this.$store.posts2
    }
  },
  methods: {
    readPosts () {
      this.$store.commit('getPosts')
    }
  }

}
</script>
