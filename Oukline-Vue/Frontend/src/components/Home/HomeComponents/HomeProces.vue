<template>
    <div class="inner-container proces-box">
        <div class="btn-box">
            <div class="btn-box-left">
            <p>
                Be part of our creative process
                <span class="btn-icon"><img src="../../../assets/icons/RightArrow.svg" alt=""></span>
            </p>
            </div>
            <div class="btn-box-right">
                <a href="mailto:studio@oukline.com" class="second-btn-style btn-width switch-btn">
                    <span class="button-text switch-text switch-current">
                        studio@oukline.com
                        <img src="../../../assets/icons/PartnersBTNicon.svg" alt="" class="button-icon">
                    </span>
                    <span class="button-text switch-text switch-next">
                        studio@oukline.com
                        <img src="../../../assets/icons/PartnersBTNicon.svg" alt="" class="button-icon">
                    </span>
                  </a> 
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>

.proces-box {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    padding-top: 150px;
}

.btn-box {
  display: flex;
  width: 100%;
  column-gap: 17px;
}

.btn-box-left {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.btn-box p {
  display: flex;
  font-size: 20px;
  font-weight: 400;
  column-gap: 17px;
}

.btn-box button {
  display: flex;
  font-size: 17px;
  font-weight: 400;
}

.btn-icon {
  display: inline-block;
}

.btn-width{
    display: flex;
    column-gap: 8px;
    padding: 25px 112px;
}

@media (max-width: 600px) {
  .btn-box,
  .btn-box-left p {
    flex-direction: column;
  }

  .btn-box-left,
  .btn-box-right {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .btn-box-left p {
    align-items: center;
    row-gap: 10px;
    margin-bottom: 10px;
  }

    .btn-icon {
        transform: rotate(90deg);
        width: 14%;
        height: 12%;
    }

    .btn-width {
        width: 100%;
        height: 50px;
        justify-content: center;
        align-items: center;
    }

    .studio-btn-icon {
        height: 100%;
        width: auto;
    }

    .proces-box {
      padding-top: 100px;
    }
}
</style>