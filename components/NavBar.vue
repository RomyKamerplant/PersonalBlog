<template>
    <div class="bg-gray-700  border-lime-400 border-b-4 max-w-full h-24 flex justify-between" >
        <div class="mt-3 ml-6">
            <nuxt-link to="/" class="hover:bg-lime-400 hover:opacity-70" ><img  class="h-16 rounded-2xl" src="Logo.png" alt="Logo"></nuxt-link> 
        </div>
        <div class="flex justify-around space-x-8 p-2 items-center">
                <div class="bg-stone-50 text-lime-400 text-xl font-extrabold py-3 w-32 rounded-2xl grid place-items-center hover:text-gray-700 hover:bg-indigo-100" to="/blog">
                <a class="dropdown">
  <label tabindex="0">Blog</label>
  <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-stone-50 rounded-box w-52">
    <li><NuxtLink to='/blog' >Overview</NuxtLink></li>
    <li><NuxtLink to='/science' >Science</NuxtLink></li>
    <li><NuxtLink to='/travel' >Travel</NuxtLink></li>
    <li><NuxtLink to='/food' >Food</NuxtLink></li>
    <li><NuxtLink to='/fitness' >Fitness</NuxtLink></li>
    <li><NuxtLink to='/programming' >Programming</NuxtLink></li>
  </ul>
</a>
                </div>
                <div class="bg-stone-50 text-lime-400 text-xl font-extrabold py-3 w-32 rounded-2xl grid place-items-center hover:text-gray-700 hover:bg-indigo-100">
                <NuxtLink to="/compose"> Compose</NuxtLink></div>
                <div class="bg-stone-50 text-lime-400 text-xl font-extrabold py-3 w-32 rounded-2xl grid place-items-center hover:text-gray-700 hover:bg-indigo-100">
                <NuxtLink to="/projects"> Projects</NuxtLink></div>
                <div class="bg-stone-50 text-lime-400 text-xl font-extrabold py-3 w-32 rounded-2xl grid place-items-center hover:text-gray-700 hover:bg-indigo-100">
                <NuxtLink to="/about"> About</NuxtLink></div>
                <div class="bg-stone-50 text-lime-400 text-xl font-extrabold py-3 w-32 rounded-2xl grid place-items-center hover:text-gray-700 hover:bg-indigo-100">
                <NuxtLink to="/contact"> Contact</NuxtLink></div>
        </div>
        
    </div>
</template>