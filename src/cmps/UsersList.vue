<template>
  <section>
    <ul class="flex clean-list space-between">
      <li v-for="currUser in users" :key="currUser._id">
        <router-link class="clean-link" :to="`/whoswatch/${currUser._id}`">
          <UserPreview :user="currUser" />
        </router-link>
      </li>
      <!-- <li v-for="currUser in users" :key="currUser._id" @click="onUser(currUser)">
        <UserPreview :user="currUser" />
      </li> -->
    </ul>
  </section>
</template>

<script>
import UserPreview from "@/cmps/UserPreview.vue";

export default {
  props: ["users"],
  methods: {
    onUser(user) {
      this.$emit("chooseUser", user);
    },
  },
  components: {
    UserPreview,
  },
};
</script>