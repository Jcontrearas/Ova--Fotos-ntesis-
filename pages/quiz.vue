<template>
  <div class="main-container">
    <div class="nature-bg"></div>
    <v-container class="py-12 content-container">
      <v-card class="quiz-card mx-auto" elevation="8">
        <div class="quiz-header">
          <h1 class="quiz-title">Quiz sobre la Fotosíntesis</h1>
          <div class="leaf-decoration">🌿</div>
          <p class="quiz-subtitle">Explora tu conocimiento sobre el proceso vital que mantiene la vida en la Tierra</p>
        </div>

        <div class="progress-container">
          <div class="progress-bar">
            <div 
              class="progress-fill"
              :style="{ width: `${(answers.filter(a => a !== '').length / preguntas.length) * 100}%` }"
            ></div>
          </div>
          <span class="progress-text">
            {{ answers.filter(a => a !== '').length }} de {{ preguntas.length }} preguntas respondidas
          </span>
        </div>

        <v-card-text class="quiz-content">
          <v-form>
            <div 
              v-for="(pregunta, index) in preguntas" 
              :key="index"
              class="question-card"
              :class="{ 'answered': answers[index] !== '' }"
            >
              <div class="question-header">
                <span class="question-number">Pregunta {{ index + 1 }}</span>
                <div class="question-icon">🌱</div>
              </div>
              
              <p class="question-text">{{ pregunta.texto }}</p>
              
              <v-radio-group 
                v-model="answers[index]"
                class="options-group"
              >
                <div 
                  v-for="(opcion, opcionIndex) in pregunta.opciones"
                  :key="opcionIndex"
                  class="option-wrapper"
                >
                  <v-radio
                    :value="opcion.valor"
                    :class="{
                      'correct-answer': resultado !== null && opcion.valor === pregunta.respuesta,
                      'wrong-answer': resultado !== null && answers[index] === opcion.valor && opcion.valor !== pregunta.respuesta
                    }"
                  >
                    <template v-slot:label>
                      <div class="option-content">
                        <span class="option-text">{{ opcion.texto }}</span>
                        <span v-if="resultado !== null && opcion.valor === pregunta.respuesta" class="correct-icon">✓</span>
                      </div>
                    </template>
                  </v-radio>
                </div>
              </v-radio-group>
            </div>
          </v-form>

          <div v-if="resultado !== null" class="results-container">
            <div class="score-circle">
              <div class="score-number">{{ resultado }}</div>
              <div class="score-total">/{{ preguntas.length }}</div>
            </div>
            <div class="results-message">
              {{ getResultMessage(resultado) }}
            </div>
          </div>
        </v-card-text>

        <v-card-actions class="quiz-actions">
          <v-btn
            color="primary"
            class="submit-btn"
            @click="verificarRespuestas"
            :disabled="answers.includes('') || resultado !== null"
          >
            <span class="btn-icon">📝</span>
            Verificar Respuestas
          </v-btn>
          <v-btn
            color="secondary"
            class="reset-btn"
            @click="reiniciarQuiz"
          >
            <span class="btn-icon">🔄</span>
            Reiniciar Quiz
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
    <h2 class="titulo-video" >DISFRUTA DEL SIGUIENTE JUEGO</h2>
    <iframe class="juego"tyle="max-width:100%" src="https://wordwall.net/es/embed/1aeed8fe71d2479da5d9734d7a6deea3?themeId=23&templateId=49&fontStackId=1" width="900" height="500" frameborder="0" allowfullscreen></iframe>
  
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
  
  </div>
  
 
</template>

<script>
export default {
  data() {
    return {
      preguntas: [
        {
          texto: "¿Qué gas se libera durante la fotosíntesis?",
          opciones: [
            { texto: "Oxígeno", valor: "oxigeno" },
            { texto: "Hidrógeno", valor: "hidrogeno" },
            { texto: "Dióxido de Carbono", valor: "co2" },
          ],
          respuesta: "oxigeno",
        },
        {
          texto: "¿Qué parte de la planta realiza la fotosíntesis?",
          opciones: [
            { texto: "Raíces", valor: "raíces" },
            { texto: "Hojas", valor: "hojas" },
            { texto: "Tallo", valor: "tallo" },
          ],
          respuesta: "hojas",
        },
        {
          texto: "¿Qué pigmento es clave en la fotosíntesis?",
          opciones: [
            { texto: "Clorofila", valor: "clorofila" },
            { texto: "Melanina", valor: "melanina" },
            { texto: "Hemoglobina", valor: "hemoglobina" },
          ],
          respuesta: "clorofila",
        },
        {
          texto: "¿En qué orgánulo celular ocurre la fotosíntesis?",
          opciones: [
            { texto: "Cloroplasto", valor: "cloroplasto" },
            { texto: "Núcleo", valor: "núcleo" },
            { texto: "Mitocondria", valor: "mitocondria" },
          ],
          respuesta: "cloroplasto",
        },
        {
          texto: "¿Qué energía impulsa la fotosíntesis?",
          opciones: [
            { texto: "Energía solar", valor: "solar" },
            { texto: "Energía eléctrica", valor: "eléctrica" },
            { texto: "Energía térmica", valor: "térmica" },
          ],
          respuesta: "solar",
        },
        {
          texto: "¿Qué sustancia produce la fotosíntesis como alimento?",
          opciones: [
            { texto: "Glucosa", valor: "glucosa" },
            { texto: "Proteínas", valor: "proteinas" },
            { texto: "Ácidos nucleicos", valor: "nucleicos" },
          ],
          respuesta: "glucosa",
        },
        {
          texto: "¿Cuál es la fuente principal de carbono para las plantas?",
          opciones: [
            { texto: "Dióxido de carbono", valor: "co2" },
            { texto: "Carbonato de sodio", valor: "carbonato" },
            { texto: "Metano", valor: "metano" },
          ],
          respuesta: "co2",
        },
        {
          texto: "¿Qué organismos realizan fotosíntesis?",
          opciones: [
            { texto: "Plantas y algas", valor: "plantas" },
            { texto: "Animales", valor: "animales" },
            { texto: "Hongos", valor: "hongos" },
          ],
          respuesta: "plantas",
        },
        {
          texto: "¿Qué compuesto absorbe la luz solar?",
          opciones: [
            { texto: "Clorofila", valor: "clorofila" },
            { texto: "Agua", valor: "agua" },
            { texto: "Oxígeno", valor: "oxigeno" },
          ],
          respuesta: "clorofila",
        },
        {
          texto: "¿Dónde ocurre principalmente la fotosíntesis en una hoja?",
          opciones: [
            { texto: "Mesófilo", valor: "mesofilo" },
            { texto: "Cutícula", valor: "cuticula" },
            { texto: "Estomas", valor: "estomas" },
          ],
          respuesta: "mesofilo",
        },
      ],
      answers: Array(10).fill(""),
      resultado: null,
    };
  },
  methods: {
    verificarRespuestas() {
      this.resultado = this.preguntas.reduce((aciertos, pregunta, index) => {
        return aciertos + (this.answers[index] === pregunta.respuesta ? 1 : 0);
      }, 0);
    },
    reiniciarQuiz() {
      this.answers = Array(10).fill("");
      this.resultado = null;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    getResultMessage(score) {
      if (score === this.preguntas.length) return '¡Excelente! Eres un experto en fotosíntesis! 🌟';
      if (score >= this.preguntas.length * 0.8) return '¡Muy bien! Tienes un gran conocimiento del tema! 🌱';
      if (score >= this.preguntas.length * 0.6) return 'Buen trabajo. Sigue aprendiendo sobre este fascinante proceso! 📚';
      return 'Continúa estudiando. ¡La fotosíntesis es un proceso maravilloso por descubrir! 💪';
    }
  },
};
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
}

.nature-bg {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #a8e6cf 0%, #1b4332 100%);
  opacity: 0.1;
  z-index: -1;
}

.quiz-card {
  border-radius: 20px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  max-width: 800px;
  margin: 20px auto;
  position: relative;
}

.quiz-header {
  background: linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%);
  color: white;
  padding: 2rem;
  text-align: center;
  position: relative;
}

.quiz-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.leaf-decoration {
  font-size: 2rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  animation: float 3s ease-in-out infinite;
}

.quiz-subtitle {
  font-size: 1.1rem;
  opacity: 0.9;
}

.progress-container {
  padding: 1.5rem;
  background: #f8f9fa;
}

.progress-bar {
  height: 8px;
  background: #e9ecef;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #2d6a4f 0%, #40916c 100%);
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 0.9rem;
  color: #6c757d;
  text-align: right;
  display: block;
}

.quiz-content {
  padding: 2rem;
}

.question-card {
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  border: 2px solid transparent;
  transition: all 0.3s ease;
}

.question-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
}

.question-card.answered {
  border-color: #2d6a4f;
}

.question-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.question-number {
  font-size: 0.9rem;
  font-weight: 600;
  color: #2d6a4f;
}

.question-icon {
  margin-left: auto;
  font-size: 1.2rem;
}

.question-text {
  font-size: 1.1rem;
  color: #2d3436;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.options-group {
  margin-top: 1rem;
}

.option-wrapper {
  margin: 0.5rem 0;
}

.option-content {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.2s ease;
}

.option-text {
  flex-grow: 1;
}

.correct-icon {
  color: #2d6a4f;
  font-weight: bold;
  margin-left: 0.5rem;
}

.correct-answer :deep(.v-label) {
  color: #2d6a4f !important;
  font-weight: 600;
}

.wrong-answer :deep(.v-label) {
  color: #dc3545 !important;
  text-decoration: line-through;
}

.results-container {
  text-align: center;
  margin-top: 2rem;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 15px;
}

.score-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: white;
  margin: 0 auto 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.score-number {
  font-size: 3rem;
  font-weight: 700;
  color: #2d6a4f;
  line-height: 1;
}

.score-total {
  font-size: 1.2rem;
  color: #6c757d;
}

.results-message {
  font-size: 1.2rem;
  color: #2d3436;
  line-height: 1.6;
}

.quiz-actions {
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.submit-btn {
  background: linear-gradient(135deg, #2d6a4f 0%, #40916c 100%) !important;
  color: white !important;
  padding: 0.5rem 2rem !important;
  border-radius: 25px !important;
  text-transform: none !important;
}

.reset-btn {
  background: white !important;
  color: #dc3545 !important;
  border: 2px solid #dc3545 !important;
  padding: 0.5rem 2rem !important;
  border-radius: 25px !important;
  text-transform: none !important;
}

.btn-icon {
  margin-right: 0.5rem;
  font-size: 1.2rem;
}

.authors {
  margin-top: 1rem;
  font-style: italic;
  opacity: 0.8;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@media (max-width: 768px) {
  .quiz-card {
    margin: 10px;
  }
  
  .quiz-title {
    font-size: 2rem;
  }
  
  .quiz-actions {
    flex-direction: column;
  }
  
  .footer-wrapper {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-text {
    text-align: center;
  }
}

.juego {
  display:flex;
  align-items: center;
  border-radius: 15px;
  margin: auto;
  margin-bottom: 20px;
  margin-bottom: 20px
}
.titulo-video {
  font-size: 1.1rem;
  color: #2d3436;
  margin-bottom: 1rem;
  line-height: 1.5;
  text-align: center
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


  
  