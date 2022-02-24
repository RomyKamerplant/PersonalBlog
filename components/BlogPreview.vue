<template>
<NuxtLink :to="post.slug" :aria-label="`Read - ${post.title}`">
  <article class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl bg-violet-500 p-8 rounded-3xl text-stone-50 hover:text-lime-400">
    <div class="flex space-x-4">
      <div class="w-4/5 mt-10">
        <p class="text-base">Written by {{ post.owner }}</p>
        <p class="text-base">Posted on {{ $moment(post.createdAt).format('MMMM DD, YYYY') }}</p>
        <p class="text-base">Lastly updated on {{$moment(post.lastUpdateAt).format('MMMM DD, YYYY')}}</p>
        <p class="text-base">Domain {{post.domain}}</p>
      </div>
      <div class="container mx-auto">
        <img class="max-h-80 mx-auto" :src="post.img"/>
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
