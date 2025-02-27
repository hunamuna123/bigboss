<template>
  <div class="w-full flex justify-center">
    <h1 class="text-white text-xl font-semibold">Главная</h1>
  </div>
  <div class="flex flex-col">
    <div class="flex flex-wrap gap-2 justify-around py-4">
      <div class="box">
        <h2 class="text-white text-center text-xl p-2">Дежурные</h2>
        <div class="flex flex-col mt-2">
            <p class="p-1 text-teal-500"><span class="text-neutral-300 pr-3 pl-1 underline underline-offset-6">1:</span>Петров</p>
            <p class="p-1 text-teal-500"><span class="text-neutral-300 pr-3 pl-1 underline underline-offset-6">2:</span>Шабановаааа</p>
        </div>
      </div>
      <div class="box">
        <h2 class="text-white text-center text-xl p-2">Присутствие</h2>
        <div class="flex flex-col mt-2">
            <p class="p-1 text-teal-500"><span class="text-neutral-300 pr-3 pl-1 underline underline-offset-6">В группе:</span>8</p>
            <p class="p-1 text-teal-500"><span class="text-neutral-300 pr-3 pl-1 underline underline-offset-6">Отсутствует:</span>17</p>    </div>
      </div>
    </div>
  </div>
</template>

<style>
.box {
  width: 10rem; 
  height: 10rem;
  border-radius: 1rem;
  background-color: #404040; 
  border: 1px solid #404040;
}
@media (max-width: 390px) {
  .box {
    width: 8.25rem;
    height: 8.25rem;
  }
}
</style>
