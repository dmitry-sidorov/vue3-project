<template>
  <div class="post" v-for="{ title, body } in posts">
    <div><strong>Title: </strong>{{ title }}</div>
    <div><strong>Description: </strong>{{ body }}</div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>


<style scoped>
  .post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
</style>