
<template>
  <section >
      <h2>Who's Watching</h2>
      <UsersList :users="users"/>
  </section>
</template>

<script>
import {userService} from '@/services/userService'
import UsersList from '@/cmps/UsersList.vue';

export default {
  data() {
    return {
      users: undefined,
    };
  },
  async created(){
      this.users = await userService.query()
  },
  components: {
      UsersList,  
  }
};
</script>