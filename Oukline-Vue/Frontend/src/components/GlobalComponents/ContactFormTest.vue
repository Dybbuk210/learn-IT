<template>
  <div>
    <div class="form-box">
      <form class="contact-form" @submit.prevent="submitForm">
        <!-- Honeypot -->
        <div style="position: absolute; left: -9999px;" aria-hidden="true">
          <label for="website">Nechaj prázdne</label>
          <input type="text" name="website" id="website" v-model="form.website" tabindex="-1" autocomplete="off" />
        </div>

        <!-- Time input -->
        <input type="hidden" name="form_load_time" id="form_load_time" :value="form.form_load_time" />

        <!-- Select service -->
        <fieldset class="form-group services">
          <div class="services-box inner-row-gap">
            <legend class="title-font">Select a service you need:</legend>
            <div class="services-box-down">
              <label v-for="option in serviceOptions" :key="option">
                <input
                  class="services-box-label"
                  type="checkbox"
                  :value="option"
                  v-model="form.services"
                  name="services[]"
                />
                {{ option }}
              </label>
            </div>
          </div>
        </fieldset>

        <!-- Budget -->
        <div class="form-group budget inner-row-gap">
          <label for="budget" class="title-font">Budget:</label>
          <select id="budget" class="budget-selector" name="budget" required v-model="form.budget">
            <option disabled hidden value="">Select your budget</option>
            <option value="1,000-3,000">1,000€ - 3,000€</option>
            <option value="3,000-5,000">3,000€ - 5,000€</option>
            <option value="5,000-10,000">5000€ - 10,000€</option>
            <option value="10,000+">10,000€ +</option>
          </select>
        </div>

        <!-- Contact info -->
        <fieldset class="form-group contact-info">
          <legend class="title-font">Contact informations</legend>
          <div class="contact-box">
            <div class="form-row">
              <input type="text" placeholder="Full name" name="user_name" required v-model="form.user_name" />
              <input type="email" placeholder="Email" name="user_email" required v-model="form.user_email" />
            </div>
            <textarea
              class="textarea-style"
              name="user_message"
              placeholder="Description of your request..."
              required
              v-model="form.user_message"
            ></textarea>
          </div>
        </fieldset>

        <div class="break-border">
          <hr />
        </div>

        <button class="switch-btn send-btn" type="submit">
          <span class="switch-text switch-current">Send message!</span>
          <span class="switch-text switch-next">Let's talk</span>
        </button>

        <p class="form-text" v-if="formSent">
          Thank you for reaching out! We’ve received your message and will get back to you as soon as we review it.
          <span class="form-text-span">Looking forward to connecting with you!</span>
        </p>
      </form>

      <div class="form-down-box">
        <p class="box-down-text">
          Not a fan of forms? No worries, email us here
          <img src="../../assets/icons/RightArrow.svg" alt="Arrow icon" class="box-down-icon" />
        </p>
        <a href="mailto:studio@oukline.com" class="main-style-button btn-width switch-btn form-button">
            <span class="button-text switch-text switch-current">
                studio@oukline.com
                <img src="../../assets/icons/PartnersBTNicon.svg" alt="Clipboard icon" class="button-icon">
            </span>
            <span class="button-text switch-text switch-next">
                studio@oukline.com
                <img src="../../assets/icons/PartnersBTNicon.svg" alt="Clipboard icon" class="button-icon">
            </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const formSent = ref(false)

const form = ref({
  website: '',
  form_load_time: '',
  services: [],
  budget: '',
  user_name: '',
  user_email: '',
  user_message: ''
})

const serviceOptions = ['UX/UI Design', 'Development', 'Branding', 'Other']

onMounted(() => {
  form.value.form_load_time = Date.now()
})

const submitForm = async () => {
  const formData = new FormData()

  for (const key in form.value) {
    if (Array.isArray(form.value[key])) {
      form.value[key].forEach(val => formData.append(`${key}[]`, val))
    } else {
      formData.append(key, form.value[key])
    }
  }

  try {
    const response = await fetch('/form.php', {
      method: 'POST',
      body: formData
    })

    const text = await response.text()
    console.log('RESPONSE TEXT:', text)

    if (response.ok && text.trim() === 'success') {
      formSent.value = true
      resetForm()
    } else {
      console.error('Chyba pri odoslaní formulára:', text)
    }
  } catch (error) {
    console.error('Fetch error:', error)
  }
}

const resetForm = () => {
  form.value = {
    website: '',
    form_load_time: Date.now(), // 🔁 nastav znova čas
    services: [],
    budget: '',
    user_name: '',
    user_email: '',
    user_message: ''
  }
}
</script>


<style scoped>
    .contact-form, .form-group, .services-box {
        display: flex;
        flex-direction: column;
    }

    .contact-form {
        background-color: var(--main-color-black);
        padding: 52px 41px;
        row-gap: 32px;
        border-radius: 6px;
    }

    .title-font {
        font-size: clamp(16px, 5vw, 20px);
        font-weight: 400;
        color: #B7BAC1;
    }

    .services-box-down {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        font-weight: 300;
        color: #FFFFFF;
    }

    .inner-row-gap {
        row-gap: 25px;
    }

    .form-down-box {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 28px 0;
        column-gap: 18px;
    }

    .box-down-text {
        display: flex;  
        align-items: center;
        font-size: 20px;
        font-weight: 400;
        column-gap: 18px;
        white-space: nowrap;
    }

    .box-down-icon {
        width: 24px;
        height: auto;
    }

    .form-button {
      color: #fff;
      width: calc(50% - 18px);
      padding: 27px 82px;
    }

    .services-box-label {
        width: 20px;
        height: 20px;
    }

    .services-box-down label {
        display: flex;
        align-items: center;
        gap: 11px;
    }

    /* custom checkbox */
    .services-box-label {
        appearance: none;
        width: 20px;
        height: 20px;
        background-color: #222; /* základné pozadie */
        border: 1px solid white;
        border-radius: 4px;
        position: relative;
        cursor: pointer;
        gap: 10px;
    }

    .services-box-label:checked {
        background-color: white;
    }

    .services-box-label:checked::after {
        content: "";
        color: var(--main-color-black);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60%;
        height: 60%;
        background-image: url('../../assets/icons/CheckBoxIcon.svg');
        background-size: contain;
        background-repeat: no-repeat;
    }

    .budget-selector {
        appearance: none;
        padding: 10px 14px;
        border-radius: 3px;
        font-size: 14px;
        font-weight: 400;
        color: #7C8088;
        background-color: #292929;
        cursor: pointer;
        background-image: url('../assets/icons/ArrowDown.svg');
        background-repeat: no-repeat;
        background-position: right 15px center;
        background-size: 16px;
    }

    .budget-selector option {
        padding: 8px 14px;
    }

    .form-row input, .textarea-style {
        padding: 10px 14px;
        border-radius: 3px;
        font-size: 14px;
        font-weight: 400;
        color: #7C8088;
        background-color: #292929;
        cursor: pointer;
    }

    textarea {
        min-height: 100px;
        width: 100%;
        box-sizing: border-box;
        font-family: 'Inter Tight', sans-serif;
        resize: none;
    }

    textarea::placeholder {
        font-size: 14px;
        font-weight: 300;
    }

    .form-row {
        display: flex;
        column-gap: 10px;
    }

    .form-row input {
        width: 100%;
    }

    .contact-box {
        display: flex;
        flex-direction: column;
        row-gap: 15px;
    }

    .contact-info legend {
        padding-bottom: 20px;
    }

    .send-btn {
        width: 100%;
        height: 50px;
        border-radius: 3px;
        font-size: 16px;
        font-weight: 400;
        color: #151515;
        background-color: #fff;
    }

    .form-text {
        color: #B7BAC1;
        font-size: 14px;
        font-weight: 300;
    }

    .form-text span {
        color: #fff;
    }

    .break-border {
        border-bottom: solid 1px #292929;
    }

    @media (max-width: 1200px) {
        .services-box-down {
            flex-wrap: wrap;
            row-gap: 15px;
        }

        .services-box-down label {
            flex: 1 1 48%;
        }
    }

    @media (max-width: 900px) {
        .form-down-box {
            display: none;
        }
    }

    @media (max-width: 600px) {
        .form-row {
            flex-direction: column;
            row-gap: 15px;
        }

        .form-row input {
            width: auto;
        }
    }

    @media (max-width: 350px) {
        .services-box-down label {
            flex: 1 1 100%;
        }
    }
</style>