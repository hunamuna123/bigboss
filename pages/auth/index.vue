<template>
  <div class="flex justify-center items-center min-h-screen px-4">
    <div class="w-full max-w-md bg-neutral-800 shadow-lg rounded-xl p-6 border-neutral-700">
      <h2 class="text-xl font-semibold text-center text-white mb-4">Логин</h2>
      <form>
        <div class="space-y-4">
          <div>
            <label for="text" class="block text-sm font-medium text-white">Имя</label>
            <div class="relative mt-1">
              <input 
                type="text" 
                id="name" 
                name="text" 
                class="py-3 px-4 ps-12 w-full shadow-sm rounded-lg text-sm focus:border-teal-500  bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500 focus:ring-neutral-600"
                placeholder="Введите имя"
                required>
              <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8f8f8f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
            </div>
          </div>
          <div>
            
            <label for="text" class="block text-sm font-medium text-white">Фамилия</label>
            <div class="relative mt-1">
              <input 
                type="text" 
                id="surname" 
                name="text" 
                class="py-3 px-4 ps-12 w-full  shadow-sm rounded-lg text-sm focus:border-teal-500  bg-neutral-900 border-neutral-700 text-white placeholder-neutral-500 focus:ring-neutral-600"
                placeholder="Введите фамилию"
                required>
              <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8f8f8f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-pen"><path d="M11.5 15H7a4 4 0 0 0-4 4v2"/><path d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/><circle cx="10" cy="7" r="4"/></svg>
              </div>
            </div>
          </div>
          <button 
            type="submit" 
            class="w-full py-3 px-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 focus:ring-4 focus:ring-teal-500 focus:outline-none transition"
          >
            Войти
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
