<template>
<div>
  <NavBar/>
  <div class="grid place-items-center h-screen">
    <div class="grid place-items-center ">
      <h1 class="m-16 text-4xl">Domains</h1>
      <div class="flex space-x-8">
        <div class="card w-80 bg-lime-400 shadow-xl">
  <figure><img class="h-56" src="https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Shoes"></figure>
  <div class="card-body bg-violet-500">
    <h2 class="card-title">Science</h2>
    <p>What ist the advantage of genetically modified fries? - They are CRISPR.</p>
    <div class="justify-end card-actions">
      <div class="bg-stone-50 text-lime-400 text-xl font-extrabold py-3 w-32 rounded-2xl grid place-items-center hover:text-gray-700 hover:bg-indigo-100">
                <NuxtLink to="/science"> Visit now</NuxtLink></div>
    </div>
  </div>
</div>
<div class="card w-80 bg-lime-400 shadow-xl">
  <figure><img class="h-56" src="https://images.pexels.com/photos/3217663/pexels-photo-3217663.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Shoes"></figure>
  <div class="card-body bg-violet-500">
    <h2 class="card-title">Travel</h2>
    <p>Where do sharks like to go on vacation? - Finland!</p>
    <div class="justify-end card-actions">
      <div class="bg-stone-50 text-lime-400 text-xl font-extrabold py-3 w-32 rounded-2xl grid place-items-center hover:text-gray-700 hover:bg-indigo-100">
                <NuxtLink to="/travel"> Visit now</NuxtLink></div>
    </div>
  </div>
</div>
<div class="card w-80 bg-lime-400 shadow-xl">
  <figure><img class="h-56" src="https://images.pexels.com/photos/3669638/pexels-photo-3669638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Shoes"></figure>
  <div class="card-body bg-violet-500">
    <h2 class="card-title">Food</h2>
    <p>Can I tell you a vegan joke? I promise it won’t be cheesy.</p>
    <div class="justify-end card-actions">
      <div class="bg-stone-50 text-lime-400 text-xl font-extrabold py-3 w-32 rounded-2xl grid place-items-center hover:text-gray-700 hover:bg-indigo-100">
                <NuxtLink to="/food"> Visit now</NuxtLink></div>
    </div>
  </div>
</div>
<div class="card w-80 bg-lime-400 shadow-xl">
  <figure><img class="h-56" src="https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Shoes"></figure>
  <div class="card-body bg-violet-500">
    <h2 class="card-title">Fitness</h2>
    <p>Why don’t cows skip leg day? Because they care about their calves.</p>
    <div class="justify-end card-actions">
      <div class="bg-stone-50 text-lime-400 text-xl font-extrabold py-3 w-32 rounded-2xl grid place-items-center hover:text-gray-700 hover:bg-indigo-100">
                <NuxtLink to="/fitness"> Visit now</NuxtLink></div>
    </div>
  </div>
</div>
<div class="card w-80 bg-lime-400 shadow-xl">
  <figure><img class="h-56" src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Shoes"></figure>
  <div class="card-body bg-violet-500">
    <h2 class="card-title">Programming</h2>
    <p>A programmer went to the grocery store. His wife said "while you are out, go get some milk." - He never came back.
    </p>
    <div class="justify-end card-actions">
      <div class="bg-stone-50 text-lime-400 text-xl font-extrabold py-3 w-32 rounded-2xl grid place-items-center hover:text-gray-700 hover:bg-indigo-100">
                <NuxtLink to="/programming"> Visit now</NuxtLink></div>
    </div>
  </div>
</div>
      </div>
    </div>
    <div class="grid place-items-center h-screen">
      <h1 class="m-16 text-4xl">Latest Blog Posts</h1>
      <ul class="divide-y divide-gray-300">
        <li v-for="post in posts" :key="post.title" class="py-14">
          <div class="rounded-xl">
            <BlogPreview :post="post" />
        </div>

    </li>
  </ul>
  <Footer/>
    </div>
  </div>
</div>

</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('posts')
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()

    return { posts }
  },
}
</script>