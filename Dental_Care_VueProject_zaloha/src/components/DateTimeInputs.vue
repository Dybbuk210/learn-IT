<template>
    <div class="unified-date-time-picker">
      <!-- Vstup pre dátum -->
      <div class="input-wrapper" @click="toggleDateDropdown">
        <input
          type="text"
          :value="formattedDate"
          placeholder="Vyberte dátum"
          readonly
        />
        <button class="dropdown-toggle" @click.stop="toggleDateDropdown">▼</button>
      </div>
      <!-- Rozbaľovací výber pre dátum -->
      <div v-if="showDateDropdown" class="dropdown-menu">
        <div class="input-group">
          <label>Dátum:</label>
          <select v-model="selectedDay">
            <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
          </select>
          <select v-model="selectedMonth">
            <option v-for="(month, index) in months" :key="index" :value="index">{{ month }}</option>
          </select>
          <select v-model="selectedYear">
            <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
          </select>
        </div>
        <button @click="confirmDateSelection">Potvrdiť dátum</button>
      </div>
  
      <!-- Vstup pre čas -->
      <div class="input-wrapper" @click="toggleTimeDropdown">
        <input
          type="text"
          :value="formattedTime"
          placeholder="Vyberte čas"
          readonly
        />
        <button class="dropdown-toggle" @click.stop="toggleTimeDropdown">▼</button>
      </div>
      <!-- Rozbaľovací výber pre čas -->
      <div v-if="showTimeDropdown" class="dropdown-menu">
        <div class="input-group">
          <label>Čas:</label>
          <select v-model="selectedHour">
            <option v-for="hour in hours" :key="hour" :value="hour">{{ String(hour).padStart(2, '0') }}</option>
          </select>
          :
          <select v-model="selectedMinute">
            <option v-for="minute in minutes" :key="minute" :value="minute">{{ String(minute).padStart(2, '0') }}</option>
          </select>
        </div>
        <button @click="confirmTimeSelection">Potvrdiť čas</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DateTimeInputs',
    data() {
      return {
        showDateDropdown: false,
        showTimeDropdown: false,
        selectedDay: new Date().getDate(),
        selectedMonth: new Date().getMonth(),
        selectedYear: new Date().getFullYear(),
        selectedHour: new Date().getHours(),
        selectedMinute: new Date().getMinutes(),
        days: Array.from({ length: 31 }, (_, i) => i + 1),
        months: [
          'Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún',
          'Júl', 'August', 'September', 'Október', 'November', 'December'
        ],
        years: Array.from({ length: 101 }, (_, i) => new Date().getFullYear() - 50 + i),
        hours: Array.from({ length: 24 }, (_, i) => i),
        minutes: Array.from({ length: 60 }, (_, i) => i),
      };
    },
    computed: {
      formattedDate() {
        return `${this.selectedDay}.${this.selectedMonth + 1}.${this.selectedYear}`;
      },
      formattedTime() {
        return `${String(this.selectedHour).padStart(2, '0')}:${String(this.selectedMinute).padStart(2, '0')}`;
      }
    },
    methods: {
      toggleDateDropdown() {
        this.showDateDropdown = !this.showDateDropdown;
        this.showTimeDropdown = false; // Zatvorí časový dropdown, ak je otvorený
      },
      toggleTimeDropdown() {
        this.showTimeDropdown = !this.showTimeDropdown;
        this.showDateDropdown = false; // Zatvorí dátumový dropdown, ak je otvorený
      },
      confirmDateSelection() {
        this.showDateDropdown = false;
      },
      confirmTimeSelection() {
        this.showTimeDropdown = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .unified-date-time-picker {
    position: relative;
    max-width: 300px;
    margin: 0 auto;
  }
  
  .input-wrapper {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    background-color: white;
    margin-bottom: 16px;
  }
  
  input {
    border: none;
    outline: none;
    flex-grow: 1;
    cursor: pointer;
  }
  
  .dropdown-toggle {
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    border: 1px solid #ccc;
    background: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 16px;
    z-index: 10;
  }
  
  .input-group {
    margin-bottom: 16px;
  }
  
  select {
    margin-right: 8px;
    padding: 4px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  