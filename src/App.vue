<template>
  <div class="app">
    <form @submit.prevent>
      <h4>Create new post:</h4>
      <input class="input" :value="title" @input="title = $event.target.value" type="text" placeholder="Title"/>
      <input class="input" :value="body"  @input="body = $event.target.value" type="text" placeholder="Description"/>
      <button class="btn" @click="createPost">Create</button>
    </form>
    <div class="post" v-for="{ title, body } in posts">
      <div><strong>Title: </strong>{{ title }}</div>
      <div><strong>Description: </strong>{{ body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      body: '',
      posts: [
        { id: 1, title: 'Стрелочные функции', body: 'Стрелочные функции бывают разные'},
        { id: 2, title: 'Конекст', body: 'Все любят this'},
        { id: 3, title: 'Метод map', body: 'Метод map удобен'},
      ]
    }
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body
      }
      this.posts.push(newPost)
      this.title = ''
      this.body = ''
    },
  }
}
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

form {
  display: flex;
  flex-direction: column;
}

.app {
  padding: 20px;
}

.btn {
  align-self: flex-end;
  margin-top: 15px;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
}

.post {
  padding: 15px;
  border: 1px solid teal;
  margin-top: 15px;
}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}

</style>