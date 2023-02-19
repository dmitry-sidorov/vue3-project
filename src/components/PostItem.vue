<template>
  <div class="post">
    <div>
      <div><strong>Title: </strong>{{ title }}</div>
      <div><strong>Description: </strong>{{ body }}</div>
    </div>
    <div class="post__btns">
      <MyButton>Delete</MyButton>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
}
</script>


<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__btns {

}
</style>