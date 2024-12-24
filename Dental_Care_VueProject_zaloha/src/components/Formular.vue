<template>
    <div class="calendar">
      <div class="calendar-header">
        <button @click="prevMonth">&lt;</button>
        <span>{{ currentMonthName }} {{ currentYear }}</span>
        <button @click="nextMonth">&gt;</button>
      </div>
      <!-- Obalovací div pre názvy dní -->
      <div class="calendar-week-header">
        <div class="calendar-day header-day" v-for="day in daysOfWeek" :key="day">{{ day }}</div>
      </div>
      <div class="calendar-grid">
        <div
          v-for="day in previousMonthDays"
          :key="'prev-' + day"
          class="calendar-day text-gray-400"
        >
          {{ day }}
        </div>
        <div
          v-for="day in daysInMonth"
          :key="'day-' + day"
          class="calendar-day"
          :class="{ selected: day === selectedDay }"
          @click="selectDay(day)"
        >
          {{ day }}
        </div>
        <div
          v-for="day in nextMonthDays"
          :key="'next-' + day"
          class="calendar-day text-gray-400"
        >
          {{ day }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Formular',
    data() {
      return {
        selectedDay: null,
        currentDate: new Date(),
        currentMonth: new Date().getMonth(),
        currentYear: new Date().getFullYear(),
        daysOfWeek: ["PO", "UT", "ST", "ŠT", "PI", "SO", "NE"],
      };
    },
    computed: {
      daysInMonth() {
        return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
      },
      previousMonthDays() {
        const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
        const daysInPreviousMonth = new Date(this.currentYear, this.currentMonth, 0).getDate();
        return Array.from({ length: firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1 }, (_, i) =>
          daysInPreviousMonth - (firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1) + i + 1
        );
      },
      nextMonthDays() {
        const totalDays = this.blankDays.length + this.daysInMonth;
        const remainingDays = totalDays % 7 === 0 ? 0 : 7 - (totalDays % 7);
        return Array.from({ length: remainingDays }, (_, i) => i + 1);
      },
      blankDays() {
        const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
        return Array.from({ length: firstDay === 0 ? 6 : firstDay - 1 });
      },
      currentMonthName() {
        return this.currentDate.toLocaleString("default", { month: "long" });
      },
    },
    methods: {
      prevMonth() {
        if (this.currentMonth === 0) {
          this.currentMonth = 11;
          this.currentYear--;
        } else {
          this.currentMonth--;
        }
        this.updateCurrentDate();
      },
      nextMonth() {
        if (this.currentMonth === 11) {
          this.currentMonth = 0;
          this.currentYear++;
        } else {
          this.currentMonth++;
        }
        this.updateCurrentDate();
      },
      selectDay(day) {
        this.selectedDay = day;
      },
      updateCurrentDate() {
        this.currentDate = new Date(this.currentYear, this.currentMonth, 1);
      },
    },
  };
  </script>
  
  <style scoped>
  .calendar {
    width: 100%;
    height: 100%;
    padding: 16px;
    background: white;
    border: 1px solid #ccc;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
  }
  
  .calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
  
  .calendar-week-header {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    width: 100%;
    background-color: #F5F7FA;
    padding: 8px 0;
    border-radius: 4px;
  }
  
  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 4px; /* Zmenšenie medzier pre lepšie prispôsobenie */
    flex-grow: 1;
  }
  
  .calendar-day {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4%;
    border-radius: 4px;
    cursor: pointer;
    min-width: 0; /* Zabezpečí, že sa bunky nezväčšia nad veľkosť rodičovského kontajnera */
    min-height: 0; /* Rovnako zabezpečí obmedzenie výšky */
  }
  
  .calendar-day.text-gray-400 {
    color: #ccc;
  }
  
  .calendar-day.selected {
    background-color: #007bff;
    color: white;
  }
  </style>  