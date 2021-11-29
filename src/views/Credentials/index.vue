<template>
  <div>
    <div class="flex justify-center w-full h-28 bg-brand-main">
      <HeaderLogged />
    </div>

    <div class="flex flex-col items-center justify-center h-64 bg-brand-gray">
      <h1 class="text-4xl font-black text-center textgray-800">Credentials</h1>
      <p class="text-lg text-center text-gray-800 font-regular">
        Step by Step to install and generate credentials
      </p>
    </div>

    <div class="flex justify-center w-full h-full">
      <div class="flex flex-col w-4/5 max-w-6xl py-10">
        <h1 class="text-3xl font-black text-brand-darkgray">
          Install and configuration
        </h1>
        <p class="mt-10 text-lg text-gray-800 font-regular">
          This is your api key
        </p>

        <div class="flex py-3 pl-5 pr-20 mt-2 rounded items-center bg-brand-gray">
          <span>{{ store.User.currentUser.apiKey }}</span>
          <div class="flex ml-20 mr-5">
            <icon
              name="copy"
              color=""
              size="24"
              class="cursor-pointer"
            />
          </div>
        </div>

        <p class="mt-10 text-lg text-gray-800 font-regular">
          Set script bellow to use Feedbacks
        </p>
        <div
          class="py-3 pl-4 pr-20 rounded bg-brand-gray"
        >
          <pre>
            &lt;script
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLogged from '../../components/HeaderLogged';
import useStore from '../../hooks/useStore';
import palette from '../../../palette';

export default {
  components: {
    HeaderLogged,
  },

  setup() {
    const store = useStore();

    return {
      store,
      brandColors: palette.brand,
    };
  },

};
</script>

<style>

</style>
