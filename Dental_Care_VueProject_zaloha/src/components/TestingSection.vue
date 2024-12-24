  <!-- Skúška animácie na pohyb kariet. Kód nieje môj takže ho potrebujem poskúšať ak sa mi ho podari implementovať bude to pekna animacia pohybu kariet -->
<template>
    <section class="clients_section">
      <div class="clients_header">
        <h1 class="h1h2_style">Naši klienti</h1>
        <p>Naši spokojní klienti.</p>
      </div>
      <div class="clients_wrapper">
        <button @click="moveLeft" class="nav_button left">◀</button>
        <div class="clients_cards">
          <div
            v-for="(client, index) in visibleClients"
            :key="index"
            class="client_card"
            :class="{ animating: isAnimating }"
          >
            <img :src="client.image" alt="Klient obrázok" class="client_image" />
            <div class="client_info">
              <h4>{{ client.name }}</h4>
              <div class="rating">{{ client.rating }}</div>
              <p>{{ client.description }}</p>
            </div>
          </div>
        </div>
        <button @click="moveRight" class="nav_button right">▶</button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'TestingSection',
    data() {
      return {
        clients: [
          { image: 'path/to/client-image1.jpg', name: 'Klient 1', rating: '★★★★★', description: 'Popis klienta 1' },
          { image: 'path/to/client-image2.jpg', name: 'Klient 2', rating: '★★★★★', description: 'Popis klienta 2' },
          { image: 'path/to/client-image3.jpg', name: 'Klient 3', rating: '★★★★★', description: 'Popis klienta 3' },
          { image: 'path/to/client-image4.jpg', name: 'Klient 4', rating: '★★★★★', description: 'Popis klienta 4' },
          { image: 'path/to/client-image5.jpg', name: 'Klient 5', rating: '★★★★★', description: 'Popis klienta 5' },
          { image: 'path/to/client-image6.jpg', name: 'Klient 6', rating: '★★★★★', description: 'Popis klienta 6' },
          { image: 'path/to/client-image7.jpg', name: 'Klient 7', rating: '★★★★★', description: 'Popis klienta 7' },
          { image: 'path/to/client-image8.jpg', name: 'Klient 8', rating: '★★★★★', description: 'Popis klienta 8' },
          { image: 'path/to/client-image9.jpg', name: 'Klient 9', rating: '★★★★★', description: 'Popis klienta 9' },
        ],
        currentIndex: 0,
        isAnimating: false,
      };
    },
    computed: {
      visibleClients() {
        return this.clients.slice(this.currentIndex, this.currentIndex + 3);
      },
    },
    methods: {
      moveLeft() {
        if (this.currentIndex > 0) {
          this.startAnimation();
          this.currentIndex -= 3;
        }
      },
      moveRight() {
        if (this.currentIndex < this.clients.length - 3) {
          this.startAnimation();
          this.currentIndex += 3;
        }
      },
      startAnimation() {
        this.isAnimating = true;
        setTimeout(() => {
          this.isAnimating = false;
        }, 1000); // Trvanie animácie
      },
    },
  };
  </script>
  
  <style scoped>
  .clients_section {
    padding: 20px;
  }
  
  .clients_wrapper {
    display: flex;
    align-items: center;
    overflow: hidden;
    position: relative;
  }
  
  .clients_cards {
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: translateX(0);
  }
  
  .client_card {
    min-width: 300px;
    margin: 10px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.5s ease;
  }
  
  .client_card.animating {
  animation: moveUp 0.3s ease-in-out forwards, moveSide 0.4s ease-in-out 0.3s forwards, moveDown 0.3s ease-in-out 0.7s forwards;
}

@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-2rem); /* Posunutie nahor */
  }
}

@keyframes moveSide {
  0% {
    transform: translateY(-2rem) translateX(0);
  }
  100% {
    transform: translateY(-2rem) translateX(-100%); /* Posunutie do strany */
  }
  
}

@keyframes moveDown {
  0% {
    transform: translateY(-2rem) translateX(-100%);
  }
  100% {
    transform: translateY(0) translateX(-100%); /* Návrat nadol */
  }
}

  
  .nav_button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
    padding: 10px;
  }
  </style>

  <!-- Skúška animácie na pohyb kariet. Kód nieje môj takže ho potrebujem poskúšať ak sa mi ho podari implementovať bude to pekna animacia pohybu kariet -->