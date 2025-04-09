<template>
  <v-card>
    <v-tabs v-model="tab" bg-color="primary">
      <v-tab value="one">TodoList</v-tab>
      <v-tab value="three">완료</v-tab>
    </v-tabs>
    <v-form @submit.prevent="addNewTodo">
      <v-text-field
        v-model="newTodo"
        :rules="rules"
        hide-details="auto"
        label="Add Todo"
        clearable
      />
    </v-form>

    <v-window v-model="tab">
      <v-window-item value="one">
        <TodoList :items="todoList" title="TodoList" />
      </v-window-item>
      <v-window-item value="three">
        <TodoList :items="complete" title="완료" />
      </v-window-item>
    </v-window>
  </v-card>
</template>

<script setup>
import { computed, ref } from 'vue';
import TodoList from '@/components/TodoList.vue';

const tab = ref('one');
const newTodo = ref("");

const items = ref([
  { text: 'Real-Time', icon: 'mdi-clock', check: false },
  { text: 'Audience', icon: 'mdi-account', check: false },
  { text: 'Conversions', icon: 'mdi-flag', check: false },
]);
const addNewTodo = () => {
  items.value.push({
    text : newTodo.value,
    check : false,
    icon: 'mdi-account'
  })
  newTodo.value = "";
}
const rules = [
    value => !!value || 'Required.',
    value => (value && value.length >= 3) || 'Min 3 characters',
  ]
const todoList = computed(() => items.value.filter((e) => !e.check));
const complete = computed(() => items.value.filter((e) => e.check))
</script>
