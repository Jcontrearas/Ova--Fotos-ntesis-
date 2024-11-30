<template>
    <v-layout class="overflow-visible" style="height: 56px;">
      <v-bottom-navigation v-model="value" :bg-color="'teal'" mode="shift">
        <v-btn to="/">
          <v-icon>mdi-home</v-icon>
          <span>Inicio</span>
        </v-btn>
        <v-btn to="/contenido">
          <v-icon>mdi-book-open-page-variant</v-icon>
          <span>Contenido</span>
        </v-btn>
        <v-btn to="/proceso">
          <v-icon>mdi-flower</v-icon>
          <span>Proceso</span>
        </v-btn>
        <v-btn to="/importancia">
          <v-icon>mdi-leaf</v-icon>
          <span>Importancia</span>
        </v-btn>
        <v-btn to="/quiz">
          <v-icon>mdi-quiz</v-icon>
          <span>Quiz</span>
        </v-btn>
      </v-bottom-navigation>
    </v-layout>
  </template>
  
  <script setup>
  const value = ref(0);
  </script>
  
  <style scoped>
  /* Ajuste de estilos si es necesario */
  </style>
  
  