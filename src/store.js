import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 7,
    posts: [
      {
        'userId': 1,
        'id': 1,
        'title': 'sunt aut facere optio reprehenderit',
        'body': 'quia et suscipit\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
      },
      {
        'userId': 1,
        'id': 2,
        'title': 'qui est esse',
        'body': 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
      }],
    todos: [],
    newTodo: ''
  },
  getters: {
    newTodo: state => state.newTodo,
    todos: state => state.todos
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,

    SET_TODOS (state, todos) {
      state.todos = todos
    },
    ADD_TODO (state, todoObject) {
      state.todos.push(todoObject)
    },
    CLEAR_NEW_TODO (state) {
      state.newTodo = ''
    }
  },
  actions: {
    getPosts () {
      axios.get(`http://jsonplaceholder.typicode.com/posts`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.posts = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    },
    loadTodos ({ commit }) {
      axios
        .get('/todos')
        .then(r => r.data)
        .then(todos => {
          commit('SET_TODOS', todos)
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
    }
  }
})
