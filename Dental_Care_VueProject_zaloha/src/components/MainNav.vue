<template>
    <header>
      <nav class="main_nav">
        <div class="nav_container">
          <button @click="toggleSidebar" class="sidebar_open">
            <img src="../assets/img/nav_mobile_icon.svg" alt="Open nav button" />
          </button>
          <span class="logo">
            <a href="#"><img src="../assets/img/Nav_logo_A.svg" alt="Navigation logo" class="nav_logo" /></a>
          </span>
    
          <div :class="['nav_menu', { active: isSidebarOpen }]">
            <div class="logo_toggle">
              <span>
                <a href="#"><img src="../assets/img/Nav_logo_A.svg" alt="logo img in navigation" /></a>
              </span>
              <button @click="toggleSidebar" class="sidebar_close">
                <img src="../assets/img/x_icon.svg" alt="Close nav button" />
              </button>
            </div>
    
            <ul class="nav_ul">
              <li><a href="#">O nás</a></li>
              <li><a href="#">Služby</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Recenzie</a></li>
              <li><a href="#">Kontakt</a></li>
              <li><button class="fullnav_button mobile-only">Rezervovať</button></li>
            </ul>
          </div>
    
          <button class="fullnav_button">Rezervovať</button>
        </div>
      </nav>
    </header>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const isSidebarOpen = ref(false);
  
      function toggleSidebar() {
        isSidebarOpen.value = !isSidebarOpen.value;
      }
  
      return { isSidebarOpen, toggleSidebar };
    }
  };
  </script>
  
  <style scoped>

  header {
    
    height: 163px;
  }
  
  button:hover {
    cursor: pointer;
  }
  
  .main_nav {
    position: fixed;
    top: 47px;
    left: 0;
    height: 80px;
    width: 100%;
    z-index: 1000;
  }
  
  .nav_container {
    position: relative;
    height: 100%;
    max-width: 1280px;
    width: 100%;
    background-color: #132B58;
    border-radius: 16px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .sidebar_open {
    color: #ffffff;
    border: none;
    background-color: transparent;
    font-size: 25px;
    padding: 5px;
    cursor: pointer;
    display: none;
  }
  
  .mobile-only {
  display: none;
  margin: 0 auto;
}

  .nav_ul {
    display: flex;
    align-items: center;
  }
  
  .nav_ul li {
    margin-left: 33px;
  }
  
  .nav_ul li a {
    position: relative;
    font-size: 18px;
    font-weight: 500;
    color: #ffffff;
    padding: 10px;
  }
  
  .nav_menu .logo_toggle {
    display: none;
  }
  
  .sidebar_close {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  
  .fullnav_button {
    width: 197px;
    height: 48px;
    border: none;
    border-radius: 8px;
    gap: 10px;
    background-color: #1376F8;
    color: #ffffff;
    padding: 10px 46px;
    margin: 16px;
    font-size: 18px;
    font-weight: 600;
  }
  
  .logo {
    width: 80px;
    height: 50px;
    margin-left: 22px;
  }
  
  .nav_logo {
    content: url('../assets/img/Nav_logo_A.svg');
  }
  
  /* Responsive styles */
  @media (max-width: 900px) {
    .sidebar_open {
      display: block;
      margin-right: 21px;
    }
 
    .main_nav {
        position: static;
    }

    .nav_menu .mobile-only {
      display: block;
    }

    .fullnav_button {
      display: none;
    }
  
    .nav_container {
      flex-direction: row-reverse;
    }
  
    .nav_logo {
      content: url('../assets/img/nav_logo_B.svg');
    }
  
    .nav_menu {
      position: fixed;
      height: 100%;
      width: 350px;
      left: -100%;
      top: 0;
      background-color: #132B58;
      padding: 20px;
      transition: all 0.4s ease;
      z-index: 10;
    }
  
    .nav_container {
      background-color: #ffffff;
    }
  
    .nav_menu.active {
      left: 0;
    }
  
    .nav_menu .logo_toggle {
      display: block;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  
    .nav_ul {
      flex-direction: column;
      padding: 60px;
    }
  
    .nav_ul li a {
      display: block;
      margin-top: 20px;
    }
  }
  </style>