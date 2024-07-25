<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img class="rounded-full transition-transform transform hover:scale-125" src="~/assets/img/hero.jpg" alt="Starship starts the engine" loading="eager" format="avif" width="512" height="512" />
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">Create any Applications with CodeDevper</h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">You can quickly make web applications, desktop applications, mobile applications, marketing websites & landing pages.</p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink href="/contact">Get Started</LandingLink>
        <LandingLink size="lg" styleName="outline" rel="noopener" href="https://github.com/codedevper" target="_blank"><i class="fa-brands fa-github"></i> View Repo</LandingLink>
      </div>
    </div>
  </main>
</template>
