import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  plugins: ["~/plugins/preline.client.ts"], 
  modules: ['@samk-dev/nuxt-vcalendar'],
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});