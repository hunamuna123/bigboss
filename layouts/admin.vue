<template>
    <div class="w-full flex justify-center">
        <h1 class="text-white text-xl font-semibold">Отметить отсутствующих</h1>
    </div>
    <div class="flex flex-col py-4 w-full transition-opacity   ">
        <div class=" rounded-xl w-full">
            <div class="flex flex-col w-full">
                <div class=" w-full">
                    <div class=" min-w-full inline-block  w-full">
                        <div class="border border-neutral-700 rounded-lg  w-full">
                            <div class="max-h-auto overflow-y-auto custom-scrollbar w-full">
                                <table :class="{ 'opacity-50 pointer-events-none': isConfirmed }" class="min-h-full divide-y divide-gray-200 w-full">
                                    <thead class="bg-neutral-700 w-full">
                                        <tr>
                                            <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-white uppercase">ФИО</th>
                                            <th scope="col" class="py-3 ps-4 text-end">
                                                <div class="flex justify-end items-center h-5">
                                                    <p class="px-6 py-3 text-start text-xs font-medium text-white uppercase">Отметка</p>   
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-neutral-700 w-full">
                                        <tr 
                                            v-for="(name, index) in names" 
                                            :key="index" 
                                            @click="toggleCheckbox(index)"
                                            class="cursor-pointer w-full"
                                        >
                                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{{ name }}</td>
                                            <td class="py-3 ps-4 text-end">
                                                <div class="flex justify-end items-center h-5 px-6 py-4">
                                                    <input 
                                                        :id="'hs-table-checkbox-' + index" 
                                                        type="checkbox" 
                                                        class="border-teal-500 rounded-sm text-blue-600 focus:ring-blue-500"
                                                        v-model="checked[index]"
                                                        @click.stop
                                                        :disabled="isConfirmed"
                                                    >
                                                    <label :for="'hs-table-checkbox-' + index" class="sr-only">Checkbox</label>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="w-full flex justify-center mt-4">
                            <button 
                                class="w-full bg-teal-500 text-white py-1.5 rounded-lg hover:bg-teal-600" 
                                @click="toggleConfirm"
                            >
                                {{ isConfirmed ? 'Изменить' : 'Подтвердить' }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const names = ref([
  'Илья Большаков', 'Максим Наумов', 'Борисенко Лада', 
  'Алексей Смирнов', 'Татьяна Иванова', 'Дмитрий Ковалев', 
  'Екатерина Петрова', 'Сергей Васильев', 'Анна Морозова', 
  'Павел Тарасов', 'Илья Большаков', 'Максим Наумов', 'Борисенко Лада', 
  'Алексей Смирнов', 'Татьяна Иванова', 'Дмитрий Ковалев', 
  'Екатерина Петрова', 'Сергей Васильев', 'Анна Морозова', 
  'Павел Тарасов'
]);

const checked = ref(Array(names.value.length).fill(false));
const isConfirmed = ref(false);

const toggleCheckbox = (index) => {
  if (!isConfirmed.value) {
    checked.value[index] = !checked.value[index];
  }
}

const toggleConfirm = () => {
  isConfirmed.value = !isConfirmed.value;
}
</script>

<style>
.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

.custom-scrollbar::-webkit-scrollbar-button {
  display: none;
}
</style>
