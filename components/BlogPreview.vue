<template>
<NuxtLink :to="post.slug" :aria-label="`Read - ${post.title}`">
  <article class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl bg-violet-500 p-8 rounded-3xl text-stone-50 hover:text-lime-400">
    <div class="flex space-x-4">
      <div class="w-full">
        <p>Written by {{ post.owner }}</p>
        <p>Posted on {{ $moment(post.createdAt).format('MMMM DD, YYYY') }}</p>
        <p>Domain {{post.domain}}</p>
      </div>
      <div class="hero container max-w-screen-lg mx-auto">
        <img class="max-h-80 mx-auto" :src="require(`~/static/${post.img}`)"/>
      </div>   
    </div>
      <h2 class="font-semibold">
        {{ post.title }}
      </h2>
      <p class="font-light leading-7 text-lg">
        {{ post.description }}
      </p>
      <div class="mt-5">
          Details →
      </div>
  </article>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      requried: true,
      default: () => {},
    },
  },
}
</script>
