<template>
  <modal />
  <router-view/>
</template>

<script>
import { watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Modal from './components/Modal';
import { setCurrentUser } from './store/user';

import services from './services';

export default {
  components: {
    Modal,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    watch(() => route.path, async () => {
      if (route.meta.hasAuth) {
        const token = window.localStorage.getItem('token');

        if (!token) {
          return router.push({ name: 'Home' });
        }

        const { data } = await services.users.getMe();
        setCurrentUser(data);
      }
      return true;
    });
  },
};
</script>

<style>

</style>
