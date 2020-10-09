
<template>
  <section>
    <h2>Who's Watching</h2>
    <UsersList :users="users" @chooseUser="setUser" />
    <router-link class="clean-link" :to="`/edit`"><button class="add-user-btn">Add User </button></router-link>
  </section>
</template>

<script>
import { userService } from "@/services/userService";
import UsersList from "@/cmps/UsersList.vue";

export default {
  data() {
    return {
      users: undefined,
    };
  },
  async created() {
    this.users = await userService.query();
  },
  methods: {
    setUser(user) {
      console.log("user", user);
    },
  },
  components: {
    UsersList,
  },
};
</script>