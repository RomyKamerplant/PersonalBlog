<template>
<div>
  <NavBar/>
  <article class="divide-y divide-gray-300 m-24 prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto max-w-none mt-5">
    <header class="mx-auto text-center pb-10">
      <div class="w-full flex">
        <div>
          <p>Written by {{ post.owner }}</p>
        <p>Posted on {{ $moment(post.createdAt).format('MMMM DD, YYYY') }}</p>
        <p>Lastly updated on {{post.lastUpdatedAt}}</p>
        </div>
        <img class="max-h-96 mx-auto" :src="post.img"/>
      </div>

      <h2 class="text-5xl font-bold tracking-tight text-gray-900">
        {{ post.title }}
      </h2>
    </header>

    <NuxtContent
      :document="post"
    />
  </article>
  <div class="grid place-items-center">
    <h2>Comments</h2>
    
    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Your email address</span>
    <span class="label-text-alt">Alt label</span>
  </label>
  <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs">
  <label class="label">
    <span class="label-text-alt">Alt label</span>
    <span class="label-text-alt">Alt label</span>
  </label>
</div>
  </div>
  <Footer/>
</div>
  
</template>

<script>
export default {
  async asyncData({ $content, params}) {
    const post = await $content('posts')
    .where({ slug: params.slug })
    .fetch()
    return { post: post[0]}
  },
}
</script>
