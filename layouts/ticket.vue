<template>
  <div class="w-full flex justify-center">
    <h1 class="text-white text-xl font-semibold">Допуски</h1>
  </div>
  <div class="flex flex-col">
    <div class="flex flex-wrap gap-2 justify-around py-4 pb-2">
      <div
        class="w-full bg-[#404040] rounded-xl h-20 flex p-4 items-center justify-center"
      >
        <p class="text-center text-white text-lg">
          Здесь вы можете быстро найти нужный допуск
        </p>
      </div>
    </div>
    <DataPicker />
    <div class="w-full flex justify-center">
      <h2 class="text-white text-xl font-semibold mt-4">Результаты:</h2>
    </div>
    <div class="flex flex-col gap-2 py-4 pb-2">
      <div
        class="w-full flex rounded-xl px-4 mb-5 items-center justify-between"
      >
        <div class="w-10">
          <p class="text-md text-neutral-300 underline underline-offset-6">
            №.
          </p>
        </div>
        <div class="flex-1">
          <p class="text-md text-neutral-300 text-center">ФИО</p>
        </div>
        <div class="flex-1">
          <p class="text-md text-neutral-300 text-center">Препод</p>
        </div>
        <div class="flex-1">
          <p class="text-md text-neutral-300 text-center">Причина</p>
        </div>
      </div>

      <div class="w-full overflow-y-auto max-h-120 custom-scrollbar">
        <div
          class="w-full flex bg-[#404040] rounded-xl h-auto p-4 items-center justify-between flex-col mb-4"
        >
          <div class="w-full flex">
            <div class="w-10">
              <p class="text-md text-neutral-300 underline underline-offset-4">
                1.
              </p>
            </div>
            <div class="flex-1">
              <p class="text-md text-neutral-300 text-center">Исраелян</p>
            </div>
            <div class="flex-1">
              <p class="text-md text-neutral-300 text-center">Халезина О.A</p>
            </div>
            <div class="flex-1">
              <p class="text-md text-neutral-300 text-center">Прогул</p>
            </div>
          </div>
          <div class="w-full flex justify-center mt-4">
            <button
              class="w-full bg-teal-500 text-white py-1.5 rounded-lg hover:bg-teal-600"
            >
              Подробнее
            </button>
          </div>
        </div>
        <div
          class="w-full flex bg-[#404040] rounded-xl h-auto p-4 items-center justify-between flex-col mb-4"
        >
          <div class="w-full flex">
            <div class="w-10">
              <p class="text-md text-neutral-300 underline underline-offset-4">
                2.
              </p>
            </div>
            <div class="flex-1">
              <p class="text-md text-neutral-300 text-center">Петров</p>
            </div>
            <div class="flex-1">
              <p class="text-md text-neutral-300 text-center">Скрыль Г.Г</p>
            </div>
            <div class="flex-1">
              <p class="text-md text-neutral-300 text-center">Прогул</p>
            </div>
          </div>
          <div class="w-full flex justify-center mt-4">
            <button
              class="w-full bg-teal-500 text-white py-1.5 rounded-lg hover:bg-teal-600"
            >
              Подробнее
            </button>
          </div>
        </div>
        <div
          class="w-full flex bg-[#404040] rounded-xl h-auto p-4 items-center justify-between flex-col mb-4"
        >
          <div class="w-full flex">
            <div class="w-10">
              <p class="text-md text-neutral-300 underline underline-offset-4">
                3.
              </p>
            </div>
            <div class="flex-1">
              <p class="text-md text-neutral-300 text-center">Борисенко</p>
            </div>
            <div class="flex-1">
              <p class="text-md text-neutral-300 text-center">Шульга О.A</p>
            </div>
            <div class="flex-1">
              <p class="text-md text-neutral-300 text-center">Уваж</p>
            </div>
          </div>
          <div class="w-full flex justify-center mt-4">
            <button
              class="w-full bg-teal-500 text-white py-1.5 rounded-lg hover:bg-teal-600"
            >
              Подробнее
            </button>
          </div>
        </div>
        <div
          class="w-full flex bg-[#404040] rounded-xl h-auto p-4 items-center justify-between flex-col mb-4"
        >
          <div class="w-full flex">
            <div class="w-10">
              <p class="text-md text-neutral-300 underline underline-offset-4">
                4.
              </p>
            </div>
            <div class="flex-1">
              <p class="text-md text-neutral-300 text-center">Дынин</p>
            </div>
            <div class="flex-1">
              <p class="text-md text-neutral-300 text-center">Рагульская О.A</p>
            </div>
            <div class="flex-1">
              <p class="text-md text-neutral-300 text-center">Опоздал</p>
            </div>
          </div>
          <div class="w-full flex justify-center mt-4">
            <button
              class="w-full bg-teal-500 text-white py-1.5 rounded-lg hover:bg-teal-600"
            >
              Подробнее
            </button>
          </div>
        </div>
        <div
          class="w-full flex bg-[#404040] rounded-xl h-auto p-4 items-center justify-between flex-col mb-4"
        >
          <div class="w-full flex">
            <div class="w-10">
              <p class="text-md text-neutral-300 underline underline-offset-4">
                5.
              </p>
            </div>
            <div class="flex-1">
              <p class="text-md text-neutral-300 text-center">Лопатина</p>
            </div>
            <div class="flex-1">
              <p class="text-md text-neutral-300 text-center">Скрыль О.A</p>
            </div>
            <div class="flex-1">
              <p class="text-md text-neutral-300 text-center">Прогул</p>
            </div>
          </div>
          <div class="w-full flex justify-center mt-4">
            <button
              class="w-full bg-teal-500 text-white py-1.5 rounded-lg hover:bg-teal-600"
            >
              Подробнее
            </button>
          </div>
        </div>
        <div
          class="w-full flex bg-[#404040] rounded-xl h-auto p-4 items-center justify-between flex-col mb-4"
        >
          <div class="w-full flex">
            <div class="w-10">
              <p class="text-md text-neutral-300 underline underline-offset-4">
                6.
              </p>
            </div>
            <div class="flex-1">
              <p class="text-md text-neutral-300 text-center">Поляков</p>
            </div>
            <div class="flex-1">
              <p class="text-md text-neutral-300 text-center">Халезина О.A</p>
            </div>
            <div class="flex-1">
              <p class="text-md text-neutral-300 text-center">Опоздал</p>
            </div>
          </div>
          <div class="w-full flex justify-center mt-4">
            <button
              class="w-full bg-teal-500 text-white py-1.5 rounded-lg hover:bg-teal-600"
            >
              Подробнее
            </button>
          </div>
        </div>
        <div
          class="w-full flex bg-[#404040] rounded-xl h-auto p-4 items-center justify-between flex-col mb-4"
        >
          <div class="w-full flex">
            <div class="w-10">
              <p class="text-md text-neutral-300 underline underline-offset-4">
                7.
              </p>
            </div>
            <div class="flex-1">
              <p class="text-md text-neutral-300 text-center">Исраелян</p>
            </div>
            <div class="flex-1">
              <p class="text-md text-neutral-300 text-center">Шульга О.A</p>
            </div>
            <div class="flex-1">
              <p class="text-md text-neutral-300 text-center">Прогул</p>
            </div>
          </div>
          <div class="w-full flex justify-center mt-4">
            <button
              class="w-full bg-teal-500 text-white py-1.5 rounded-lg hover:bg-teal-600"
            >
              Подробнее
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.custom-scrollbar::-webkit-scrollbar {
  width: 5px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 40px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

.custom-scrollbar::-webkit-scrollbar-button {
  display: none;
}
</style>
