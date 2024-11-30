<template>
  
    <v-container fluid class="pa-0 ">
      <!-- Hero Section -->
      <v-parallax
        src="https://pcfb.gumlet.io/images/articles/large-plant-in-sunlight.png?s=841cfb1b5736705af959eca35d7b5aed"
        height="400"
      >
        <v-row
          align="center"
          justify="center"
          class="hero-overlay"
        >
          <v-col cols="12" class="text-center">
            <h1 class="text-h2 font-weight-bold white--text mb-4">
              Descubre la Fotosíntesis
            </h1>
            <p class="text-h5 white--text">
              El proceso que da vida a nuestro planeta.<br>En esta ova encontraras, conseptos, juegos, quiz, formularios y demas </br>
            </p>
            <v-btn
              class="mt-6"
              color="light-green darken-1"
              large
              elevation="2"
              to="/contenido"
            >
              Comenzar Aventura
            </v-btn>
          </v-col>
        </v-row>
      </v-parallax>
      <!-- Características principales -->
      <v-container class="my-12 ">
        <v-row>
          <v-col cols="12" md="4">
            <v-card
              class="mx-auto"
              max-width="400"
              elevation="2"
              hover
            >
              <v-card-title class="light-green lighten-4">
                <v-icon large color="light-green darken-2" class="mr-2">
                  mdi-leaf
                </v-icon>
                Proceso Natural
              </v-card-title>
              <v-card-text class="text-body-1 pt-4">
                Comprende cómo las plantas transforman la luz solar en energía vital para todos los seres vivos.
              </v-card-text>
            </v-card>
          </v-col>
  
          <v-col cols="12" md="4">
            <v-card
              class="mx-auto"
              max-width="400"
              elevation="2"
              hover
            >
              <v-card-title class="light-green lighten-4">
                <v-icon large color="light-green darken-2" class="mr-2">
                  mdi-weather-sunny
                </v-icon>
                Energía Solar
              </v-card-title>
              <v-card-text class="text-body-1 pt-4">
                Descubre cómo la luz solar se convierte en energía química a través de este fascinante proceso.
              </v-card-text>
            </v-card>
          </v-col>
  
          <v-col cols="12" md="4">
            <v-card
              class="mx-auto"
              max-width="400"
              elevation="2"
              hover
            >
              <v-card-title class="light-green lighten-4">
                <v-icon large color="light-green darken-2" class="mr-2">
                  mdi-molecule-co2
                </v-icon>
                Ciclo del Carbono
              </v-card-title>
              <v-card-text class="text-body-1 pt-4">
                Aprende sobre el papel crucial de la fotosíntesis en el ciclo del carbono y el equilibrio de la vida.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  
      <!-- Sección de introducción -->
      <v-container class="my-12 ">
        <v-row align="center">
          <v-col cols="12" md="6">
            <h2 class="text-h4 mb-4 green--text text--darken-2">
              ¿Por qué estudiar la fotosíntesis?
            </h2>
            <p class="text-body-1">
              La fotosíntesis es uno de los procesos más importantes en la naturaleza. 
              A través de este fascinante mecanismo, las plantas:
            </p>
            <v-list>
              <v-list-item v-for="(item, i) in beneficios" :key="i">
                <v-list-item-icon>
                  <v-icon color="green">mdi-check-circle</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ item }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col cols="12" md="6" class="text-center">
            <v-img
              src="https://images.unsplash.com/photo-1504618223053-559bdef9dd5a"
              max-width="500"
              class="mx-auto rounded-lg"
            ></v-img>
          </v-col>
        </v-row>
        <div class="video-container">
        <video class="video" controls src="/components/¿Qué es la fotosíntesis_.mp4"></video>
      </div>
      </v-container>
    </v-container>
  
    <footer class="custom-footer">
    <div class="footer-waves">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
      </svg>
    </div>
    <div class="footer-content">
      <div class="footer-section">
        <div class="university-info">
          <img 
            class="footer-logo" 
            src="https://universidadesgratuitas.com/wp-content/uploads/2020/09/escudo-universidad-de-cordoba.png" 
            alt="Escudo Universidad de Córdoba"
          >
          <h3 class="university-name">Universidad de Córdoba</h3>
        </div>
        <div class="social-links">
          <a href="#" class="social-link"><v-icon>mdi-facebook</v-icon></a>
          <a href="#" class="social-link"><v-icon>mdi-twitter</v-icon></a>
          <a href="#" class="social-link"><v-icon>mdi-instagram</v-icon></a>
          <a href="#" class="social-link"><v-icon>mdi-youtube</v-icon></a>
        </div>
      </div>

      <div class="footer-section">
        <h4>Navegación Rápida</h4>
        <ul class="footer-links">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Contenido</a></li>
          <li><a href="#">Actividades</a></li>
          <li><a href="#">Recursos</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Contacto</h4>
        <ul class="contact-info">
          <li><v-icon small class="mr-2">mdi-email</v-icon> educacion@unicordoba.edu.co</li>
          <li><v-icon small class="mr-2">mdi-phone</v-icon> (123) 456-7890</li>
          <li><v-icon small class="mr-2">mdi-map-marker</v-icon> Montería, Córdoba</li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="creators">
        <v-icon color="light-green" class="mr-2">mdi-leaf</v-icon>
        Desarrollado por: Juan Contreras · Angel Castillo · Francisco Burgos
      </div>
      <div class="copyright">
        <p>&copy; 2024 OVA sobre Fotosíntesis · Universidad de Córdoba</p>
        <p class="license">Este recurso educativo está bajo licencia Creative Commons</p>
      </div>
    </div>
  </footer>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    data: () => ({
      beneficios: [
        'Producen el oxígeno que respiramos',
        'Transforman la energía solar en energía química',
        'Mantienen el equilibrio de CO₂ en la atmósfera',
        'Son la base de todas las cadenas alimenticias',
        'Contribuyen a la biodiversidad del planeta'
      ]
    })
  }
  </script>
  
  <style scoped>

:root {
            --leaf-green: #2E8B57;
            --leaf-light-green: #3CB371;
            --leaf-dark-green: #1E4D2B;
}
h1{
font-size: 3rem
}
  h1, p {
    color: #fff;
    font-family: 
  "Questrial"
  }
.container {
  background-image: url(https://www.easternenggco.com/wp-content/uploads/2018/06/1-2.jpg);
  
}
  .hero-overlay {
    background: rgba(0, 0, 0, 0.4);
    height: 130%;
  }
  .mt-6 importan{
    
            color: white;
           

  }

  
  /* Animaciones hover para las tarjetas */
  .v-card {
    transition: transform 0.3s ease-in-out;
  }

  .v-card:hover {
    transform: translateY(-5px);
  }
  
  /* Estilos adicionales para mejorar la legibilidad */
  .text-body-1 {
    line-height: 1.6;
    color: rgba(0, 0, 0, 0.87);
  }
  
  .v-card-title {
    word-break: normal;
  }
  
  /* Responsive adjustments */
  @media (max-width: 600px) {
    .text-h2 {
      font-size: 3rem !important;
    }
    
    .text-h4 {
      font-size: 1.8rem !important;
    }
  }
  
/* Contenedor del video */
.video-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

/* Video */
.video {
  width: 80%;
  max-width: 800px;
  border: 2px solid white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.custom-footer {
  position: relative;
  background: linear-gradient(135deg, #1b5e20 0%, #388e3c 100%);
  color: #fff;
  padding: 60px 0 20px;
  margin-top: 50px;
}

.footer-waves {
  position: absolute;
  top: -50px;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.footer-waves svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 50px;
}

.footer-waves .shape-fill {
  fill: #1b5e20;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  padding: 0 20px;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.university-info {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.footer-logo {
  width: 60px;
  height: auto;
  margin-right: 15px;
  
}

.university-name {
  font-size: 1.2rem;
  margin: 0;
  font-weight: 500;
}

.social-links {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.social-link {
  color: white;
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-link:hover {
  color: #81c784;
  transform: translateY(-3px);
}

.footer-links, .contact-info {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li, .contact-info li {
  margin-bottom: 12px;
}

.footer-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
  display: inline-block;
}

.footer-links a:hover {
  color: #81c784;
  transform: translateX(5px);
}

.footer-section h4 {
  color: #81c784;
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-weight: 500;
}

.footer-bottom {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
}

.creators {
  margin-bottom: 15px;
  color: #a5d6a7;
}

.copyright {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

.license {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 5px;
}

@media (max-width: 960px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer-section {
    text-align: center;
  }

  .university-info {
    justify-content: center;
  }

  .social-links {
    justify-content: center;
  }

  .contact-info li {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
  </style>
  