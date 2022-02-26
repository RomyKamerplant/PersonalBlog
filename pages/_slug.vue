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
    
    
    <div class="form-control bg-violet-500 p-12 grid place-items-center rounded-xl">
      <h2>Comments</h2>
  <label class="label">
    <span class="label-text">Your user name</span>
  </label>
  <div class="flex space-x-8">
      <input type="text" placeholder="Type here" class="input input-bordered w-96 max-w-xs " v-model="newTask" @keypress.enter="addTask">
  <button @click="addTask" class="bg-stone-50 text-lime-400 text-xl font-extrabold py-3 w-32 rounded-2xl grid place-items-center hover:text-gray-700 hover:bg-indigo-100">Add</button>
  </div>
      <div class="tasks">
      <Task
        v-for="(task, i) in $store.state.tasks"
        :key="i"
        :task="task" />
    </div>
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
  data (){
    return {
      newTask: ''
    }
  },
  methods: {
    addTask () {
      if (this.newTask) {
        this.$store.commit('ADD_TASK', this.newTask);
        this.newTask = '';
        this.storeTask()
      }
    },
    storeTask(){
      localStorage.setItem("tasks", JSON.stringify(this.todos));
    },
  }
}
</script>
