<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Our Blog</template>
      <template v-slot:desc>We write about building startups and thoughts going on our mind.</template>
    </LandingSectionhead>

    <main class="mt-16">
      <ul class="grid gap-16 max-w-4xl mx-auto">
        <li v-for="post in limitedPosts" :key="post._path">
          <NuxtLink :href="post._path">
            <div class="grid md:grid-cols-2 gap-5 md:gap-10 items-center transition-transform transform hover:scale-110">
              <img :src="post.image" :alt="post.title" class="w-full rounded-md object-cover object-center bg-white" width="800" height="600" />
              <div>
                <span class="text-blue-400 uppercase tracking-wider text-sm font-medium">{{ post.category }}</span>
                <h2 class="text-3xl font-semibold leading-snug tracking-tight mt-1">{{ post.title }}</h2>
                <div class="flex gap-2 mt-3">
                  <span class="text-gray-400">{{ post.author }}</span>
                  <span class="text-gray-400">•</span>
                  <time class="text-gray-400">{{ date(post.publishDate) }}</time>
                </div>
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>

      <div class="text-center mt-10">
        <button class="bg-black text-white hover:bg-gray-800 border-2 border-transparent rounded-md px-4 py-2" @click="loadMore" v-if="limit < posts.length">Load More</button>
        <button class="bg-white border-2 border-gray-500 text-gray-500 rounded-md px-4 py-2" v-else disabled>No More...</button>
      </div>
    </main>
  </LandingContainer>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "landing",
});

import { computed } from "vue";

const { data: posts } = await useAsyncData("posts", () => queryContent("/blog").where({ _extension: "md" }).sort({ date: -1 }).find());
if (!posts.value) {
  throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
}

// Define the initial limit
const limit = ref(12);
const loadmore = ref(4);

// Computed property to get the limited items
const limitedPosts = computed(() => {
  return posts.value.slice(0, limit.value);
});

const loadMore = () => {
  if (limit.value < posts.value.length) {
    limit.value += loadmore.value; // Increase the limit by 3 or any number you prefer
  }
};

function date(params: Date) {
  return new Date(params).toLocaleDateString("en", { year: "numeric", month: "short", day: "numeric" });
}
</script>

<style>
/** */
</style>
