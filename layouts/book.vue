

<template>
    <div class="w-full flex justify-center">
      <h1 class="text-white text-xl font-semibold">Отчёты посещаемости</h1>
    </div>
    <div class="flex flex-col h-full ">
      <SelectMonth/>
      <!-- <div class="flex justify-center items-end mb-5">
        <div class="grid justify-center sm:flex sm:justify-between sm:items-center gap-8">
          <nav class="flex items-center gap-x-3" aria-label="Pagination">
            <button
              type="button"
              class="min-h-[40px] min-w-[40px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-md rounded-xl text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
              aria-label="Previous">
              <svg class="shrink-0 size-3.5"xmlns="http://www.w3.org/2000/svg"   width="24"  height="24"  viewBox="0 0 24 24" fill="none"stroke="currentColor"stroke-width="2"stroke-linecap="round"stroke-linejoin="round"><path d="m15 18-6-6 6-6"></path>
              </svg>
              <span class="sr-only">Previous</span>
            </button>
            <div class="flex items-center gap-x-1">
              <button
                type="button"
                class="min-h-[40px] min-w-[40px] flex justify-center items-center bg-gray-200 text-gray-800 py-2 px-3 text-md rounded-xl focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500"
                aria-current="page">
                1
              </button>
              <button
                type="button"
                class="min-h-[40px] min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-md rounded-xl focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                2
              </button>
              <button
                type="button"
                class="min-h-[40px] min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-md rounded-xl focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" >
                3
              </button>
            </div>
            <button
              type="button"class="min-h-[40px] min-w-[40px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-md rounded-xl text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"aria-label="Next">
              <span class="sr-only">Next</span>
              <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24"height="24"viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="m9 18 6-6-6-6"></path> </svg>
            </button>
          </nav>
        </div>
      </div> -->
    </div>
  </template>