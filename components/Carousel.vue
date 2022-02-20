<template>
<div class="w-full carousel mt-32 mb-32">
  <div id="slide1" class="relative w-full carousel-item flex justify-center">
    <img src="japgarten.jpg" class="max-w-3xl h-96"> 
    <p class="bg-violet-500 p-16 text-stone-50 font-black text-3xl max-w-4xl leading-loose carouselFont" >
      Nice that you came by to visit my site! Here, I want to share all my experiences and knowledge with you in my  
      <nuxt-link to="blog" class="hover:text-lime-400" > 
        <span class="underline">Blog.</span>  
        </nuxt-link>
      </p>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 carouselFont">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="relative w-full carousel-item flex justify-center">
    <img src="Science.jpg" class="max-w-3xl h-96 ml-24"> 
    <p class="bg-violet-500 p-16 text-stone-50 font-black text-3xl max-w-4xl leading-loose carouselFont">
      My passion? Science! I strive to progress science and humankind. Find out about my science adventures in the 
            <nuxt-link to="blog" class="hover:text-lime-400" > 
        <span class="underline">Science Blog.</span>  
        </nuxt-link>
      </p>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="relative w-full carousel-item flex justify-center">
    <img src="Cat.jpg" class="max-w-3xl h-96 ml-24"> 
    <p class="bg-violet-500 p-16 text-stone-50 font-black text-3xl max-w-4xl leading-loose carouselFont">
      Do you also think out of the box? Post your creative and intriguing blogpost in my 
            <nuxt-link to="compose" class="hover:text-lime-400" > 
        <span class="underline">Compose</span>  
        </nuxt-link>
      section.
      </p>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="relative w-full carousel-item flex justify-center">
    <img src="Como.jpg" class="max-w-3xl h-96 ml-24"> 
    <p class="bg-violet-500 p-16 text-stone-50 font-black text-3xl max-w-4xl leading-loose carouselFont">
      Get to know more about this place and other breathtaking places I have been in my 
            <nuxt-link to="blog" class="hover:text-lime-400" > 
        <span class="underline">Travel Blog.</span>  
        </nuxt-link>
      </p>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>
</template>

<style>
.carouselFont{
  font-family: 'Galada', sans-serif;
}
</style>