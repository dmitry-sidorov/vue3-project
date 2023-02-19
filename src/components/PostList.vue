<template>
  <h4>Posts list:</h4>
  <PostItem
    v-for="{ title, body } in posts"
    :title="title"
    :body="body"
  />
</template>

<script>
import PostItem from './PostItem.vue'

export default {
  components: {
    PostItem
  },
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>
