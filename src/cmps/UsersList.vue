<template>
  <section>
    <ul class="flex clean-list">
      <li v-for="currUser in users" :key="currUser._id">
        <UserPreview :user="currUser" />
      </li>
    </ul>
  </section>
</template>

<script>
import UserPreview from '@/cmps/UserPreview.vue';

export default {
  props: ["users"],
  components: {
    UserPreview,
  },
};
</script>