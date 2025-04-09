<template>
  <v-list>
    <v-list-subheader>{{ title }}</v-list-subheader>
    <v-list-item
      v-for="(item, i) in items"
      :key="i"
      :value="item"
      rounded="xl"
      :active="false"
      :ripple="false"
      @click="item.check = !item.check"
    >
      <template v-slot:prepend>
        <v-icon :icon="item.icon"></v-icon>
      </template>
      <template v-slot:append>
        <v-checkbox v-model="item.check" />
      </template>
      <v-list-item-title v-text="item.text"></v-list-item-title>
    </v-list-item>
  </v-list>
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
  items : Array,
  title : String,
})
</script>

<style lang="css" scoped>
</style>
