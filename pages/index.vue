<template>
    <div class="w-full max-w-3xl mx-auto py-8">
        <div class="text-xl font-semibold">Sen's Blog</div>
        <div class="relative flex justify-end mb-7">
        </div>
        <section class="flex flex-col items-center justify-center">
            <div class="flex max-w-xl flex-col items-center pb-16 pt-8 text-center lg:pb-48 lg:pt-32">


              <h1 class="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">CRUD system for creating a blog on nuxt + ts + mysql</h1>

                <div class="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                    <NuxtLink to="/blog" type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ">
                        Go To Blog Page
                    </NuxtLink>

                    <NuxtLink to="/blog/create" type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ">
                        Create Blog
                    </NuxtLink>
                </div>
            </div>




        </section>
    </div>
</template>

<script setup lang="ts">
useHead({
    title: 'Home Page'
});

</script>