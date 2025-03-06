<script setup lang="ts">
import { ref } from '#imports'

const date = ref(new Date())

const attrs = ref([
  {
    key: 'today',
    highlight: {
      color: 'teal',
      fillMode: 'solid'
    },
    dates: new Date()
  }
])
</script>

<template>
  <div class="calendar-container">
    <client-only>
      <VDatePicker v-model="date" :attributes="attrs" class="custom-calendar" />
    </client-only>
  </div>
</template>

<style scoped>
.calendar-container {
  width: 100%;
  max-width: none;
}
:deep(.vc-container) {
  width: 100%;
  background-color: #404040 !important;
  border-radius: 8px;
  padding: 10px;
  border: 1px solid #404040;
}
:deep(.vc-nav-item:hover) {
  background-color: #363535 !important;
}
:deep(.is-active) {
  background-color: #363535 !important;
}
:deep(.vc-popover-content ), :deep(.vc-nav-title), :deep(.vc-nav-arrow) {
  background-color: #404040 !important;
  color: white;
  border: 1px solid #3f3f3f;
}
:deep(.vc-focus) {
  color: white!important;

}
:deep(.vc-focus:focus) {
  color: white!important;
}
:deep(.vc-weeks) {
    margin-top: 20px;
}
:deep(.vc-title) {
  color: white;
}
:deep(.vc-arrow) {
  color: white;
}
:deep(.vc-day) {
  color: white;
}
:deep(.vc-weekday) {
  color: rgb(170, 167, 167);
}
:deep(.vc-arrow:hover) {
    background-color: #3b3b3b;
}
:deep(.vc-day-content.is-today) {
  border-color: rgb(138, 147, 147) !important;
  color: teal !important;
  background-color: teal!important;
}
:deep(.vc-day-content:focus),
:deep(.vc-day-content:active),
:deep(.vc-day-content:focus-visible) {
background-color: teal!important;
  color: white !important;
  outline: none !important;
  box-shadow: none !important;
}
:deep(.vc-day-content){
    color: rgb(255, 251, 251) !important;
}
:deep(.vc-day-content.is-selected),
:deep(.vc-day-content.is-selected:hover),
:deep(.vc-day-content.is-selected:focus),
:deep(.vc-day-content.is-selected:active) {
  background-color: teal !important;
  color: white !important;
}
:deep(.vc-nav-arrow) {
  color: white !important;
}
:deep(.vc-day.is-not-in-month .vc-day-content) {
  color: rgba(255, 255, 255, 0.5) !important;
}
</style>
