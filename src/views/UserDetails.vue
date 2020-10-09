<template>
  <section class="user-details flex column">
    <section v-if="user">
      <UserPreview :user="user" />
    </section>
    <section class="user-details-btns flex justify-center">
      <router-link class="clean-link" :to="`/whoswatch`">
        <button @click="onRemove">Remove</button>
      </router-link>
      <router-link class="clean-link" :to="`/edit/${user._id}`">
        <button class="edit-user-btn">Edit User</button>
      </router-link>
      <router-link class="clean-link" :to="`/whoswatch`">
        <button class="switch-user-btn">Switch User</button>
      </router-link>
    </section>
  </section>
</template>

<script>
import { userService } from "@/services/userService";
import UserPreview from "@/cmps/UserPreview.vue";

export default {
  data() {
    return {
      user: undefined,
    };
  },
  async created() {
    const userId = this.$route.params.userId;
    const user = await userService.getById(userId);
    this.user = user;
  },
  methods: {
    async onRemove() {
      await userService.remove(this.user._id);
    },
  },
  components: {
    UserPreview,
  },
};
</script>