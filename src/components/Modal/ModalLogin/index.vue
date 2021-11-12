<template>
  <div class="flex justify-content">
    <h1 class="text-4xl font-black text-gray-800">Login in your account</h1>

    <button
      @click="close"
      class="text-4xl text-gray-600 focus:outline-none"
    >
      &times;
    </button>
  </div>

  <div class="mt-16">
    <form @submit.prevent="submit">
    <label for="email" class="block">
      <span class="text-lg font-medium text-gray-800">E-mail</span>
      <input
      v-model="state.email.value"
        type=email
        name="email"
        :class="{
          'border-brand-danger': !!state.email.error
        }"
        class="block w-full px-4 py-3 mt-1 bg-gray-100 border-2 border-transparent rounded"
        placeholder="Enter your email"
      />
      <span
        v-if="!!state.email.error"
        class="block font-medium  text-brand-danger"
      >
        {{ state.email.error }}
      </span>
    </label>

    <label for="password" class="block">
      <span class="text-lg font-medium text-gray-800">Password</span>
      <input
      v-model="state.password.value"
        type=password
        name="password"
        :class="{
          'border-brand-danger': !!state.password.error
        }"
        class="block w-full px-4 py-3 mt-1 bg-gray-100 border-2 border-transparent rounded"
        placeholder="Enter your password"
      />
      <span
        v-if="!!state.password.error"
        class="block font-medium  text-brand-danger"
      >
        {{ state.password.error }}
      </span>
    </label>

    <button
      :disabled="state.isLoading"
      type="submit"
      :class="{
        'opacity-50': state.isloading,
      }"
      class="px-8 py-3 mt-10 text-2xl font-bold text-white rounded-full bg-brand-main focus:outline transition-all duration-150"
    >
      Enter
    </button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue';
import useModal from '../../../hooks/useModal';

export default {
  setup() {
    const modal = useModal();

    const state = reactive({
      hasError: false,
      isLoading: false,
      email: {
        value: '',
        error: '',
      },
      password: {
        value: '',
        error: '',
      },
    });

    function submit() {

    }

    return {
      state,
      close: modal.close,
    };
  },
};
</script>

<style>

</style>
