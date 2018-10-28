<template>
  <div class="todo-list">
    <v-toolbar
      color="pink"
      dark
    >
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <input id="itemForm" v-on:keypress.enter="addItem"/>
    <v-btn icon v-on:click="addItem">
        <v-icon>add</v-icon>
      </v-btn>
    <v-list two-line>
      <template v-for="(item, index) in items">
        <v-list
          v-if="item.header"
          :key="item.header"
        >
          <h4>{{item.header}}</h4>
          <v-btn icon v-on:click="deleteItem(index)">
            <v-icon>add</v-icon>
          </v-btn>
          <span>{{item.content}}</span>
        </v-list>

        <v-divider
          v-else-if="item.divider"
          :inset="item.inset"
          :key="index"
        ></v-divider>
      </template>
    </v-list>
    <v-progress-circular v-if=loading
      indeterminate
      color="primary"
    ></v-progress-circular>
    <div>{{content}}</div>
  </div>
</template>

<script>

// @ is an alias to /src

export default {
  name: 'listdata',
  data: function () {
    return {
      title: 'Dino',
      content: 'new content',
      items: [
        { header: 'head', content: "way above this" },
        {
          divider: true,
          inset: true
        },
        { header: 'head2', content: "red white blue" },
        { header: 'head3', content: "american eagle" }
      ]
    }
  },
  components: {
  },
  computed: {
    loading () {
      return this.$store.state.loading
    }
  },
  methods: {
    addItem () {
      let input = document.getElementById('itemForm')
      if (input.value !== ''){
        this.items.push({
          header: input.value
        })
        input.value = ""
      }
    },
    deleteItem (idx) {
      this.items.splice(idx, 1)
    },
    readList () {
      this.$store.dispatch('loadList')
    }
  }

}
</script>
<style>
.todo-list {
  width: 400px;
  margin: auto;
  padding: 1px;
  outline: solid;
  border: 1px;
  border-color: black;
}

</style>
