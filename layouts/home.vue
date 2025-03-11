<template>
  <div class="w-full flex justify-center">
    <h1 class="text-white text-xl font-semibold">Главная</h1>
  </div>
  <div class="flex flex-col">
    <div class="flex flex-wrap gap-2 justify-around py-4 pb-2">
      <div class="w-full bg-[#404040] rounded-xl h-30 flex items-center justify-center">
        <p class="text-center text-white text-3xl">6 марта 2025 год.</p>
      </div>
    </div>
  </div>
  <div class="flex flex-col">
    <div class="flex flex-wrap gap-2 justify-around py-4 pt-0">
      <div class="box flex-1">
        <h2 class="text-white text-center text-xl p-2">Дежурные</h2>
        <div class="flex flex-col mt-2 p-2 pb-4">
          <p class="p-1 text-md text-teal-500"><span class="text-md text-neutral-300 pr-3 pl-1 underline underline-offset-6">1:</span>Петров</p>
          <p class="p-1 text-md text-teal-500"><span class="text-md text-neutral-300 pr-3 pl-1 underline underline-offset-6">2:</span>Дынин</p>
        </div>
      </div>
      <div class="box flex-1">
        <h2 class="text-white text-center text-xl p-2">Люди</h2>
        <div class="flex flex-col mt-2 p-2 pb-4">
          <p class="p-1 text-md text-teal-500"><span class="text-md text-neutral-300 pr-3 pl-1 underline underline-offset-6">В группе:</span>8</p>
          <p class="p-1 text-md text-teal-500"><span class="text-md text-neutral-300 pr-3 pl-1 underline underline-offset-6">Отсутствует:</span>17</p>
        </div>
      </div>
    </div>

   
  </div>
</template>

<style>
.box {
  border-radius: 1rem;
  background-color: #404040;
  border: 1px solid #404040;
}

@media (max-width: 400px) {
  .box {
    width: 100%; 
    height: auto;
  }
}

@media (min-width: 401px) {
  .box {
    width: 48%;
    height: auto;
  }
}
</style>
