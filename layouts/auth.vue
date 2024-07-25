<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 mt-10 lg:mt-40">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <NuxtLink href="/">
        <img class="mx-auto h-20 w-20 rounded-full animate-bounce" src="@/assets/img/logo.jpg" alt="Your Company" />
      </NuxtLink>
    </div>

    <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "Welcome, Hello World!",
  meta: [{ name: "description", content: "My amazing site." }],
  bodyAttrs: {
    class: "bg-slate-100",
  },
  script: [{ innerHTML: "console.log('Welcome, Hello World!')" }],
});
</script>

<style>
/** */
</style>
