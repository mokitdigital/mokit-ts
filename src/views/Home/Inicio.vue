<template>
  <div class="margin-inicio">
    <b-row class="d-flex align-items-sm-center justify-content-sm-center py-5">
      <b-col class="p-0">
        <img
          :src="require('../../assets/img/logo.png')"
          alt="Logotipo Mokit Digital"
          class="img animate__animated animate__pulse animate__infinite"
          v-b-modal.modal
        />
      </b-col>
      <b-col cols="7" class="p-0">
        <b-row cols="1" class="mr-3">
          <b-col class="p-0 m-0">
            <h1 class="title">MOKIT.DIGITAL</h1>
          </b-col>
          <b-col class="p-0 m-0">
            <h2 class="subtitle">Sites & Soluções Digitais</h2>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="d-flex align-items-sm-center justify-content-sm-center py-5">
      <b-col class="d-flex align-items-center justify-content-center p-0">
        <font-awesome-icon
          icon="chevron-down"
          class="chevron animate__animated animate__headShake animate__infinite"
          v-scroll-to="'#boxes'"
        />
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@mixin linear-gradient-text ($color-top, $color-bottom) {
  background: -webkit-gradient(linear, left top, left bottom, from($color-top), to($color-bottom));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.img {
  width: 90px;
  margin: 0px 0 0 35px;
  filter: contrast(60%);
  filter: drop-shadow(8px 0px 0px #afa2eb);
}
.title {
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 0;
  margin-top: 20px;
  line-height: 42px;
  @include linear-gradient-text(rgb(155, 155, 155), rgb(255, 255, 255))
}
.subtitle {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  @include linear-gradient-text(rgb(155, 155, 155), rgb(255, 255, 255))
}

.chevron {
  font-size: 25px;
  cursor: pointer;
}

@media screen and (min-width: 794px) {
  .margin-inicio {
    margin-block: 200px;
  }
  .img {
    width: 150px;
    margin: 0px 0 0 400px;
  }
  .title {
    font-size: 60px;
    line-height: 72px;
  }
  .subtitle {
    font-size: 28px;
    line-height: 30px;
  }
  .chevron {
    position: absolute;
    left: 5%;
    bottom: 20px;
    width: 90%;
  }
}
</style>
