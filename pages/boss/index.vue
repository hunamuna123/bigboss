<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="w-full md:h-[80%] md:max-w-md h-auto bg-neutral-800 shadow-lg  border-neutral-700 flex flex-col min-h-screen overflow-hidden">
      <div class="flex-grow p-5 overflow-auto mb-12">
        <NuxtLayout :name="currentLayout" />
      </div>
      <div class="w-full bg-neutral-800 text-white py-3 px-4 border-t border-neutral-700 flex justify-around items-center fixed bottom-0 left-0 right-0 md:max-w-md mx-auto">
        <button @click="changeLayout('home')" class="p-4 border border-neutral-700 rounded-2xl hover:bg-[#1d1d1d] transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8f8f8f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house">
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          </svg>
        </button>
        <button @click="changeLayout('file')" class="p-4 border border-neutral-700 rounded-2xl hover:bg-[#1d1d1d] transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8f8f8f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-plus-2">
            <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"/>
            <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
            <path d="M3 15h6"/>
            <path d="M6 12v6"/>
          </svg>
        </button>
        <button @click="changeLayout('book')" class="p-4 border border-neutral-700 rounded-2xl hover:bg-[#1d1d1d] transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8f8f8f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open-check">
            <path d="M12 21V7"/>
            <path d="m16 12 2 2 4-4"/>
            <path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"/>
          </svg>
        </button>
        <button @click="changeLayout('ticket')" class="p-4 border border-neutral-700 rounded-2xl hover:bg-[#1d1d1d] transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8f8f8f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ticket-minus">
            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/>
            <path d="M9 12h6"/>
          </svg>
        </button>
        <button @click="changeLayout('profile')" class="p-4 border border-neutral-700 rounded-2xl hover:bg-[#1d1d1d] transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8f8f8f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentLayout: "home",
    };
  },
  methods: {
    changeLayout(layoutName) {
      this.currentLayout = layoutName;
      console.log("Макет:", this.currentLayout);
    },
  },
};
</script>
