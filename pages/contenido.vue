<template>
    <v-container fluid>
      <!-- Encabezado con animación -->
      <v-row class="mb-8">
        <v-col cols="12">
          <v-card class="primary-gradient pa-8">
            <div class="text-center">
              <v-icon size="64" color="white" class="mb-4">mdi-leaf</v-icon>
              <h1 class="text-h3 white--text font-weight-bold mb-4">
                La Fotosíntesis
              </h1>
              <p class="text-h6 white--text">
                El proceso más importante para la vida en la Tierra
              </p>
            </div>
          </v-card>
        </v-col>
      </v-row>
  
      <!-- Definición y Conceptos Básicos -->
      <v-row>
        <v-col cols="12">
          <v-card class="pa-6 mb-6">
            <v-card-title class="text-h4 green--text text--darken-2 d-flex align-center">
              <v-icon large color="green darken-2" class="mr-2">mdi-book-open-variant</v-icon>
              ¿Qué es la Fotosíntesis?
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6">
                  <p class="text-body-1">
                    La fotosíntesis es el proceso bioquímico por el cual las plantas, algas y algunos microorganismos 
                    transforman la energía luminosa en energía química. Este proceso es fundamental para la vida en 
                    la Tierra, ya que:
                  </p>
                  <v-list>
                    <v-list-item class="txt"v-for="(punto, index) in conceptosBasicos" :key="index">
                      <v-list-item-icon>
                        <v-icon  class="icon"  color="green">mdi-check-circle</v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title>{{ punto }}</v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-col>
                <v-col cols="12" md="6">
                  <v-card class="equation-card pa-4 text-center" outlined>
                    <h3 class="mb-4">Ecuación General</h3>
                    <div class="equation-text">
                      6 CO₂ + 6 H₂O + luz solar → C₆H₁₂O₆ + 6 O₂
                    </div>
                    <v-divider class="my-4"></v-divider>
                    <div class="d-flex justify-space-around">
                      <div>
                        <v-icon color="blue-grey">mdi-arrow-right-bold</v-icon>
                        <div class="caption">Reactivos</div>
                      </div>
                      <div>
                        <v-icon color="green">mdi-arrow-left-bold</v-icon>
                        <div class="caption">Productos</div>
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
  
          <!-- Elementos Necesarios -->
          <v-card class="pa-6 mb-6">
            <v-card-title class="text-h4 green--text text--darken-2">
              <v-icon large color="green darken-2" class="mr-2">mdi-puzzle</v-icon>
              Elementos Necesarios
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="6" md="3" v-for="(elemento, index) in elementosNecesarios" :key="index">
                  <v-card class="element-card text-center pa-4" outlined :class="`element-${index}`">
                    <v-avatar size="64" :color="elemento.color" class="mb-4">
                      <v-icon dark large>{{ elemento.icon }}</v-icon>
                    </v-avatar>
                    <h3 class="text-h6 mb-2">{{ elemento.title }}</h3>
                    <p class="mb-0">{{ elemento.description }}</p>
                    <v-chip small class="mt-2" :color="elemento.color" text-color="white">
                      {{ elemento.role }}
                    </v-chip>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
  
          <!-- Fases de la Fotosíntesis -->
          <v-card class="pa-6 mb-6">
            <v-card-title class="text-h4 green--text text--darken-2">
              <v-icon large color="green darken-2" class="mr-2">mdi-sync</v-icon>
              Fases de la Fotosíntesis
            </v-card-title>
            <v-card-text>
              <v-timeline align-top dense>
                <v-timeline-item
                  v-for="(fase, index) in fasesFotosintesis"
                  :key="index"
                  :color="fase.color"
                  small
                >
                  <v-card>
                    <v-card-title :class="`${fase.color} white--text`">
                      {{ fase.title }}
                    </v-card-title>
                    <v-card-text class="pt-4">
                      <p>{{ fase.description }}</p>
                      <v-chip-group>
                        <v-chip
                          v-for="(caracteristica, i) in fase.caracteristicas"
                          :key="i"
                          small
                          outlined
                        >
                          {{ caracteristica }}
                        </v-chip>
                      </v-chip-group>
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
  
          <!-- Importancia y Aplicaciones -->
          <v-card class="pa-6">
            <v-card-title class="text-h4 green--text text--darken-2">
              <v-icon large color="green darken-2" class="mr-2">mdi-earth</v-icon>
              Importancia y Aplicaciones
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="6" v-for="(impacto, index) in importancia" :key="index">
                  <v-card outlined class="impact-card pa-4" hover>
                    <div class="d-flex">
                      <v-avatar :color="impacto.color" size="52" class="mr-4">
                        <v-icon dark>{{ impacto.icon }}</v-icon>
                      </v-avatar>
                      <div>
                        <h3 class="text-h6 mb-2">{{ impacto.title }}</h3>
                        <p class="mb-0">{{ impacto.description }}</p>
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
  
          <!-- Datos Curiosos -->
          <v-card class="pa-6 mt-6">
            <v-card-title class="text-h4 green--text text--darken-2">
              <v-icon large color="green darken-2" class="mr-2">mdi-lightbulb-on</v-icon>
              Datos Curiosos
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12" md="4" v-for="(dato, index) in datosCuriosos" :key="index">
                  <v-card outlined class="fact-card">
                    <v-card-title class="green lighten-4">
                      <v-icon left color="green darken-2">mdi-star</v-icon>
                      Dato #{{ index + 1 }}
                    </v-card-title>
                    <v-card-text class="pt-4">
                      {{ dato }}
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
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
    name: 'ContenidoFotosintesis',
    data: () => ({
      conceptosBasicos: [
        'Convierte energía luminosa en energía química',
        'Produce glucosa como fuente de energía',
        'Libera oxígeno como subproducto',
        'Es la base de las cadenas alimenticias',
        'Regula el ciclo del carbono'
      ],
      elementosNecesarios: [
        {
          icon: 'mdi-white-balance-sunny',
          color: 'amber darken-2',
          title: 'Luz Solar',
          description: 'La energía solar es el motor de la fotosíntesis. La luz, especialmente en las longitudes de onda roja y azul, es absorbida por los pigmentos de la planta.Este proceso ocurre en los cloroplastos, específicamente en las membranas de los tilacoides, donde se encuentran los pigmentos.',
          role: 'Energía'
        },
        {
          icon: 'mdi-leaf',
          color: 'green darken-2',
          title: 'Clorofila',
          description: 'El pigmento principal que actúa como catalizador es la clorofila, particularmente la clorofila a. Estos pigmentos no se consumen en la reacción, sino que facilitan la conversión de energía luminosa en energía química, funcionando como un "puente" entre la luz y las reacciones químicas.',
          role: 'Catalizador'
        },
        {
          icon: 'mdi-molecule-co2',
          color: 'blue-grey darken-2',
          title: 'CO₂',
          description: 'El CO₂ es el reactivo clave en la fase oscura o ciclo de Calvin. Este gas se toma del ambiente a través de pequeños poros en las hojas llamados estomas. Este carbono es usado para formar moléculas de glucosa, el principal producto de la fotosíntesis.',
          role: 'Reactivo'
        },
        {
          icon: 'mdi-water',
          color: 'light-blue darken-2',
          title: 'Agua',
          description: 'El agua es absorbida del suelo por las raíces y transportada a las hojas a través del xilema. El oxígeno producido en esta reacción se libera al ambiente, mientras que los electrones reemplazan los perdidos por la clorofila en la fotosíntesis, y los protones son utilizados para generar un gradiente químico que produce ATP.',
          role: 'Reactivo'
        }
      ],
      fasesFotosintesis: [
        {
          color: 'amber darken-2',
          title: 'Fase Lumínica',
          description: 'Se captura la energía de la luz solar y se convierte en energía química (ATP y NADPH).',
          caracteristicas: ['Requiere luz', 'Produce ATP', 'Fotólisis del agua', 'Libera O₂']
        },
        {
          color: 'green darken-2',
          title: 'Ciclo de Calvin',
          description: 'Se utiliza la energía química para producir glucosa a partir del CO₂.',
          caracteristicas: ['No requiere luz', 'Consume ATP', 'Fija CO₂', 'Produce glucosa']
        }
      ],
      importancia: [
        {
          icon: 'mdi-food-apple',
          color: 'deep-orange',
          title: 'Producción de Alimentos',
          description: 'Base de todas las cadenas alimenticias y la agricultura mundial.'
        },
        {
          icon: 'mdi-weather-sunny',
          color: 'amber',
          title: 'Energía Renovable',
          description: 'Inspira el desarrollo de tecnologías de energía solar y biocombustibles.'
        },
        {
          icon: 'mdi-molecule-co2',
          color: 'blue-grey',
          title: 'Control Climático',
          description: 'Regula los niveles de CO₂ atmosférico y ayuda a combatir el cambio climático.'
        },
        {
          icon: 'mdi-tree',
          color: 'green',
          title: 'Biodiversidad',
          description: 'Mantiene los ecosistemas y la diversidad de especies en el planeta.'
        }
      ],
      datosCuriosos: [
        'Las plantas solo utilizan aproximadamente el 1% de la luz solar que reciben para la fotosíntesis.',
        'La fotosíntesis evolucionó hace aproximadamente 3.4 mil millones de años en las bacterias.',
        'Un árbol maduro puede producir suficiente oxígeno en un día para una familia de cuatro personas.'
      ]
    })
  }
  </script>
  
  <style scoped>
  
  h1, .text-h6  {
    color: #fff;
  }
  .primary-gradient {
    background: linear-gradient(135deg, #2E7D32, #66BB6A);
  }
  
  .equation-card {
    background-color: #f5f5f5;
  }
  
  .equation-text {
    font-size: 1.5rem;
    font-weight: bold;
    color: #2E7D32;
  }
  
  .element-card {
    height: 100%;
    transition: all 0.3s ease;
  }
  
  .element-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }
  
  .impact-card {
    transition: all 0.3s ease;
  }
  
  .impact-card:hover {
    background-color: #f5f5f5;
    transform: translateX(5px);
  }
  
  .fact-card {
    height: 100%;
    transition: transform 0.3s ease;
  }
  
  .fact-card:hover {
    transform: scale(1.02);
  }
  
  .text-body-1 {
    line-height: 1.8;
    color: rgba(0, 0, 0, 0.87);
  }
  
  /* Animaciones para las cards */
  .element-0 { animation: fadeIn 0.5s ease-out; }
  .element-1 { animation: fadeIn 0.7s ease-out; }
  .element-2 { animation: fadeIn 0.9s ease-out; }
  .element-3 { animation: fadeIn 1.1s ease-out; }

 


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
  