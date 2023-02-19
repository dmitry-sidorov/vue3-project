<template>
  <div class="app">
    <PostForm @create ="(value) => posts.push(value)" />
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from '@/components/PostList.vue'
import PostForm from '@/components/PostForm.vue'

export default {
  components: {
    PostList, PostForm
  },
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