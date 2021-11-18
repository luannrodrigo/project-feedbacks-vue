<template>
  <Header
    @singup="SingUp"
    @login="Login"
  />
  <Contact />
  <footer class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">Feedbacker & 2021</p>
  </footer>
</template>

<script>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

import Header from '../../components/Header';
import Contact from '../../components/Contact';
import useModal from '../../hooks/useModal';

export default {
  components: {
    Header,
    Contact,
  },

  setup() {
    const router = useRouter();
    const modal = useModal();

    onMounted(() => {
      const token = window.localStorage.getItem('@feedbacker:token');

      if (token) {
        // this.$router.push('/dashboard');
        router.push({ name: 'Feedbacks' });
      }
    });
    function Login() {
      modal.open({
        component: 'ModalLogin',
      });
    }

    function SingUp() {
      modal.open({
        component: 'ModalAccount',
      });
    }

    return {
      Login,
      SingUp,
    };
  },

};
</script>

<style>

</style>
