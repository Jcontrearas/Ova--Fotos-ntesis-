<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Faculty+Glyphic&family=Libre+Bodoni:ital,wght@0,400..700;1,400..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100..900;1,100..900&family=Faculty+Glyphic&family=Funnel+Display:wght@300..800&family=Libre+Bodoni:ital,wght@0,400..700;1,400..700&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Questrial&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" rel="stylesheet">
  <v-app>
    <!-- Barra de navegación -->
    <v-app-bar color="primary" prominent>
      <!-- Botón para abrir el menú de navegación lateral -->
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Fotosíntesis</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Botones adicionales (opcionales) -->
      <template v-if="$vuetify.display.mdAndUp">
        <v-btn icon="mdi-magnify" variant="text"></v-btn>
        <v-btn icon="mdi-filter" variant="text"></v-btn>
      </template>

      <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
    </v-app-bar>

    <!-- Menú de navegación lateral -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <!-- Enlaces a las páginas -->
        <v-list-item to="/" @click="drawer = false">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Inicio</v-list-item-title>
        </v-list-item>

        <v-list-item to="/contenido" @click="drawer = false">
          <v-list-item-icon>
            <v-icon>mdi-book</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Contenido</v-list-item-title>
        </v-list-item>

        <v-list-item to="/quiz" @click="drawer = false">
          <v-list-item-icon>
            <v-icon>mdi-quiz</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Quiz</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Contenido principal -->
    <v-main>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: false, // Control del menú lateral
  }),
};
</script>

<style scoped>
*{
  font-family: "Questrial"
}
/* Ajuste para la altura y márgenes del contenido */
v-main {
  margin-top: 96px; /* Espacio para la barra de navegación */
  background-color: #3DB345;
}
*{
  font-family: "Faculty Glyphic";
}

</style>
