<template>
  <div class="max-w-screen-xl mx-auto px-5">
    <ContentDoc v-slot="{ doc }">
      <article>
        <div class="mx-auto max-w-3xl mt-14">
          <span class="text-blue-400 uppercase tracking-wider text-sm font-medium">{{ doc.category }}</span>
          <h1 class="text-4xl lg:text-5xl font-bold lg:tracking-tight mt-1 lg:leading-tight">{{ doc.title }}</h1>
          <img :src="doc.image" :alt="doc.title" class="w-full rounded-md object-cover object-center bg-white my-4" width="800" height="600" />
          <div class="flex gap-2 mt-3 items-center flex-wrap md:flex-nowrap">
            <span class="text-gray-400">{{ doc.author }}</span>
            <span class="text-gray-400">•</span>
            <time class="text-gray-400">{{ new Date(doc.publishDate).toLocaleDateString("en", { year: "numeric", month: "short", day: "numeric" }) }}</time>
          </div>
          <div class="flex flex-nowrap mt-2">
            <div v-for="tag in doc.tags">
              <span class="items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10 me-2">{{ tag }}</span>
            </div>
          </div>
        </div>
        <div class="mx-auto prose prose-lg mt-6 max-w-3xl">
          <ContentRenderer :value="doc" />
        </div>
      </article>
    </ContentDoc>
    <div class="text-center mt-8"><a href="/blog" class="bg-gray-100 px-5 py-3 rounded-md hover:bg-gray-200 transition">← Back to Blog</a></div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "landing",
});

function date(params: Date) {
  return new Date(params).toLocaleDateString("en", { year: "numeric", month: "short", day: "numeric" });
}
</script>

<style>
/** */
</style>
