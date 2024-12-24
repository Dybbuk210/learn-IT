<template>
    <section class="contact">
        <article class="contact_container">
            <div class="contact_text">
                <h1 class="h1h2_style">kontaktujte nás</h1>
                <h1 class="h1h2_style"><span class="strong_text">a objednajte sa</span></h1>
                <p>
                    Používame len tie najkvalitnejšie materiály na trhu, aby sme našim pacientom mohli poskytnúť tie najlepšie produkty, preto sa o nič nestarajte a objednajte sa.
                </p>
            </div>

            <div class="form_container">
                <form action="">
                    <h4>Nezávezná objednávka</h4>
                    <div class="inputs_container">
                        <div class="inputs_box">

                            <input type="text" name="fullname" placeholder="Meno a Priezvisko" required>
                            <input type="tel" name="phone" placeholder="Telefónne číslo" required>
                            <input type="email" name="email" placeholder="Emailová Adresa" required>

                            <div class="date_time">
                                <label for="date">Dátum</label>
                                <input type="date" name="date">
                            </div>

                            <div class="date_time">
                                <label for="time">Čas</label>
                                <input type="time" name="time">
                            </div>

                        </div>
                        <div class="calendar_box">
                            <Formular></Formular>
                        </div>
                    </div>
                    <button>Objednať sa</button>
                </form>
            </div>

        </article>
    </section>
</template>

<script>
import Formular from '../components/Formular.vue';
export default {
  name: 'ContactSection',
  components: {
    Formular
  }
}
</script>

<style scoped>
.contact {
    max-width: 1440px;
    width: 100%;
    padding: 60px 0;
    background-color: #132B58;
}

article {
    max-width: 1280px;
    width: 100%;
    display: flex;
    padding: 1rem;
    margin: 0 auto;
    align-items: start;
    justify-content: center;
    flex-direction: column;
}

.h1h2_style {
    font-size: 42px;
    font-weight: 500;
    line-height: 52.5px;
    color: #ffffff;
    text-transform: capitalize;
    text-align: start;
}

.h1h2_style .strong_text {
    font-weight: 700;

}

p {
    width: 100%;
    font-size: 18px;
    font-weight: 400;
    line-height: 27.9px; 
    text-align: start;
    margin: 2rem 0;
    color: #ffffff;
    letter-spacing: 1.5%;
}

.form_container {
    width: 100%;
    display: flex;
    justify-content: center;
}

form {
    width: 336px;
    height: 850px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: #ffffff;
    border-radius: 16px;
}

.inputs_container {
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

h4 {
    font-size: 18px;
    font-weight: 600;
    color: #011632;
    margin-top: 20px;
}

input {
    width: 272px;
    height: 50px;
    border-radius: 8px;
    border: solid 1px #9C9C9C;
    padding: 0 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21.7px;
    letter-spacing: 2%;
}

.inputs_box {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.date_time {
    display: flex;
    flex-direction: column;
}

label {
    font-size: 12px;
    font-weight: 600;
    line-height: 19px;
    text-align: start;
}

.calendar_box {
    width: 275px;
    height: 320px;
}

button {
    width: 207px;
    height: 48px;
    background-color: #1376F8;
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
}

@media (min-width: 800px) {

form {
    width: 788px;
    height: 575px;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.inputs_container {
    flex-direction: row;
}

input {
    width: 345px;
}

.calendar_box {
    width: 311px;
    height: 100%;
}

}

@media (min-width: 1100px) {
    article {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        gap: 100px;
        padding: 0;
    }
}
</style>