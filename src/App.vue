<template>
  <modal />
  <router-view/>
</template>

<script>
import { watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Modal from './components/Modal';

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
        console.log({ data });
      }
      return true;
    });
  },
};
</script>

<style>

</style>
