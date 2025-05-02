!<template>
    <div>
        <div class="form-box">
            <form class="contact-form" @submit.prevent="submitForm">
                <!-- Výber služby -->
                <fieldset class="form-group services">
                    <div class="services-box inner-row-gap">
                        <legend class="title-font">Select a service you need:</legend>
                        <div class="services-box-down">
                            <label><input class="services-box-label" type="checkbox" value="UX/UI Design" /> UX/UI Design</label>
                            <label><input class="services-box-label" type="checkbox" value="Development" /> Development</label>
                            <label><input class="services-box-label" type="checkbox" value="Branding" /> Branding</label>
                            <label><input class="services-box-label" type="checkbox" value="Other" /> Other</label>
                        </div>
                    </div>
                </fieldset>

                <!-- Výber rozpočtu -->
                <div class="form-group budget inner-row-gap">
                    <label for="budget" class="title-font">Budget:</label>
                    <select id="budget" class="budget-selector" name="budget">
                        <option disabled hidden selected>Select your budget</option>
                        <option value="500-1000"> - 1000€</option>
                        <option value="500-1000">1000€ - 2000€</option>
                        <option value="1000-3000">2000€ - 3000€</option>
                        <option value="3000+">3000€ + </option>
                    </select>
                </div>

                <!-- Kontaktné informácie -->
                <fieldset class="form-group contact-info">
                    <legend class="title-font">Contact informations</legend>
                    <div class="contact-box">
                        <div class="form-row">
                            <input type="text" placeholder="Full name" required />
                            <input type="email" placeholder="Email" required />
                        </div>
                        <textarea class="textarea-style" placeholder="Description of your request..." required></textarea>
                    </div>    
                </fieldset>

                <!-- Oddeľovač -->
                <div class="break-border">
                    <hr />
                </div>

                <!-- Odosielacie tlačidlo -->
                <button class="switch-btn send-btn">
                    <span class="switch-text switch-current">Send message!</span>
                    <span class="switch-text switch-next">Let's talk</span>
                </button>

                <!-- Text po odoslaní -->
                <p class="form-text">
                    Thank you for reaching out! We’ve received your message and will get back to you as soon as we review it.
                    <span class="form-text-span">Looking forward to connecting with you!</span>
                </p>
            </form>        
            <div class="form-down-box">
                <p class="box-down-text">
                    Do you prefer direct conversation? 
                    <img src="../../assets/icons/RightArrow.svg" alt="" class="box-down-icon">
                </p>
                <button class="form-button main-style-button switch-btn">
                    <span class="switch-text switch-current">Book a call (FREE)</span>
                    <span class="switch-text switch-next">Book a call (FREE)</span>
                </button>
            </div>                                                                                         
        </div>
    </div>
</template>

<script setup>

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
        font-size: calc(1.1vw + 0.2rem);
        font-weight: 400;
        column-gap: 18px;
        white-space: nowrap;
    }

    .box-down-icon {
        width: 24px;
        height: auto;
    }

    .form-button {
        width: calc(50% - 18px);
        padding: 27px 0;    
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
        display: none;
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