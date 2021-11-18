<template>
  <header>
    <div class="flex flex-col w-4/5 max-w-6xl header-group">

      <div class="flex items-center justify-between py-10">

        <div class="flex-w-28 lg:w-36">
          <img class="w-full" src="../../assets/images/logo_white.png" alt="logo">
        </div>

        <div class="flex">

          <button
            @click="() => emit('singup')"
            class="px-6 py-2 font-bold rounded-full text-white focus:outline-none"
          >
            SignUp
          </button>

          <button
            @click="() => emit('login')"
            class="px-6 py-2 font-bold bg-white rounded-full text-brand-main focus:outline-none"
          >
            SignIn
          </button>

        </div>

      </div>

      <div class="flex flex-col mt-28">

        <h1 class="flex-4xl font-black text-white">
          Have a feedback. <br />
          And make your clients <br class="hidden lg:inline-block" /> happy!
        </h1>

        <p class="text-lg font-medium text-white">
          Receiving feedback is a great way to get your clients to come back <br class="hidden lg:inline-block" /> with a simple widget page.
        </p>

        <div>
          <button class="px-6 py-2 mt-10 font-bold bg-white rounded-full text-brand-main focus:outline-none">
            Create account
          </button>
        </div>

      </div>

    </div>
  </header>
</template>

<script>
export default {
  setup(_, { emit }) {
    return {
      emit,
    };
  },
};
</script>

<style lang="postcss" scoped>
  header {
    @apply bg-brand-main w-full flex justify-center;
    height: 700px;

  }
  .header-group {
    @apply flex flex-col w-4/5 max-w-6xl;
  }

  @media (min-width: 640px) {
    .header-group  {
      background: url('../../assets/images/blue_balloons.png') 90% 100% / 628px no-repeat;
    }
  }
</style>
