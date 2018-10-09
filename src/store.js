import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

function randomId () {
  return Math.random()
    .toString()
    .substr(2, 10)
}

export default new Vuex.Store({
  state: {
    flag: false,
    loading: false,
    count: 7,
    posts: [
      {
        'userId': 1,
        'id': 1,
        'title': 'sunt aut facere optio reprehenderit',
        'body': 'quia et totam\nnostrum eveniet architecto'
      },
      {
        'userId': 1,
        'id': 2,
        'title': 'qui est esse',
        'body': 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
      }],
    todos: [{
      'id': 1,
      'completed': false,
      'title': 'Next one'
    },
    {
      'id': 2,
      'completed': false,
      'title': 'Built in'
    }],
    newTodo: ''
  },
  getters: {
    newTodo: state => state.newTodo,
    todos: state => state.todos
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,

    SET_LOADING (state, value) {
      state.loading = value
    },
    SET_POSTS (state, posts) {
      state.posts = posts
    },
    SET_TODOS (state, todos) {
      state.todos = todos
    },
    ADD_TODO (state, todoObject) {
      state.todos.push(todoObject)
    },
    CLEAR_NEW_TODO (state) {
      state.newTodo = ''
    },
    INVERT_FLAG (state) {
      state.flag = !state.flag
    }
  },
  actions: {
    getPosts ({ commit }) {
      commit('SET_LOADING', true)
      axios.get(`http://jsonplaceholder.typicode.com/posts`)
      // JSON responses are automatically parsed.
        .then(response => {
          commit('SET_POSTS', response.data)
          commit('SET_LOADING', false)
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    loadTodos ({ commit }) {
      commit('SET_LOADING', true)
      axios
        .get('http://localhost:3000/todos')
        .then(r => r.data)
        .then(todos => {
          commit('SET_TODOS', todos)
          commit('SET_LOADING', false)
        })
    },
    addTodo ({ commit, state }) {
      if (!state.newTodo) {
        // do not add empty todos
        return
      }
      const todo = {
        title: state.newTodo,
        completed: false,
        id: randomId()
      }
      axios.post('/todos', todo).then(_ => {
        commit('ADD_TODO', todo)
      })
    },
    clearNewTodo ({ commit }) {
      commit('CLEAR_NEW_TODO')
    },
    invertFlag ({ commit }) {
      commit('INVERT_FLAG')
    }
  }
})
