<template>
  <div id="boxes" class="mb-5">
    <b-row cols="1" cols-lg="4" class="py-lg-3">
      <b-col class="my-2">
        <b-card class="m-lg-5 animate__animated animate__flipInX">
          <div class="d-flex justify-content-center align-items-center">
            <font-awesome-icon icon="address-card" class="text-dark icons" />
          </div>
          <div>
            <h2 class="text-dark fs-6 text-center my-3">QUEM SOMOS?</h2>
            <h4
              class="text-black-50 fs-6 text-center"
              style="cursor: pointer;"
              @click="openModal(
                'address-card',
                'QUEM SOMOS',
                'about'
              )"
            >
              Saiba mais
            </h4>
          </div>
        </b-card>
      </b-col>
      <b-col class="my-2">
        <b-card  class="m-lg-5 animate__animated animate__flipInX">
          <div class="d-flex justify-content-center align-items-center">
            <font-awesome-icon icon="dice-d20" class="text-dark icons" />
          </div>
          <div>
            <h2 class="text-dark fs-6 text-center my-3">SITES</h2>
            <h4
              class="text-black-50 fs-6 text-center"
              style="cursor: pointer;"
              @click="openModal('dice-d20', 'SITES', 'site')"
            >
              Saiba mais
            </h4>
          </div>
        </b-card>
      </b-col>
      <b-col class="my-2">
        <b-card  class="m-lg-5 animate__animated animate__flipInX">
          <div class="d-flex justify-content-center align-items-center">
            <font-awesome-icon icon="people-carry" class="text-dark icons" />
          </div>
          <div>
            <h2 class="text-dark fs-6 text-center my-3">Nossa Equipe</h2>
            <h4
              class="text-black-50 fs-6 text-center"
              style="cursor: pointer;"
              @click="openModal('people-carry', 'NOSSA EQUIPE', 'equipe')"
            >Saiba mais</h4>
          </div>
        </b-card>
      </b-col>
      <b-col class="my-2">
        <b-card class="m-lg-5 animate__animated animate__flipInX">
          <div class="d-flex justify-content-center align-items-center">
            <font-awesome-icon icon="comment-dollar" class="text-dark icons" />
          </div>
          <div>
            <h2 class="text-dark fs-6 text-center my-3">Faca orcamento</h2>
            <h4
              class="text-black-50 fs-6 text-center animate__animated animate__headShake animate__infinite"
              v-scroll-to="'#formulario'"
              style="cursor: pointer;"
            >Saiba mais</h4>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row cols="1" cols-lg="4" class="py=lg-3 my-0">
      <b-col class="my-2">
        <b-card class="m-lg-5 animate__animated animate__flipInX">
          <div class="d-flex justify-content-center align-items-center">
            <font-awesome-icon icon="question-circle" class="text-dark icons" />
          </div>
          <div>
            <h2 class="text-dark fs-6 text-center my-3">ATENDIMENTO VIRTUAL</h2>
            <h4
              class="text-black-50 fs-6 text-center"
              v-scroll-to="'#formulario'"
              style="cursor: pointer;"
            >Saiba mais</h4>
          </div>
        </b-card>
      </b-col>
      <b-col class="my-2">
        <b-card  class="m-lg-5 animate__animated animate__flipInX">
          <div class="d-flex justify-content-center align-items-center">
            <font-awesome-icon icon="headset" class="text-dark icons" />
          </div>
          <div>
            <h2 class="text-dark fs-6 text-center my-3">SUPORTE PREMIUM</h2>
            <h4
              class="text-black-50 fs-6 text-center"
              @click="openModal('headset', 'SUPORTE PREMIUM', 'suporte')"
              style="cursor: pointer;"
            >Saiba mais</h4>
          </div>
        </b-card>
      </b-col>
      <b-col class="my-2">
        <b-card  class="m-lg-5 animate__animated animate__flipInX">
          <div class="d-flex justify-content-center align-items-center">
            <font-awesome-icon icon="share-alt" class="text-dark icons" />
          </div>
          <div>
            <h2 class="text-dark fs-6 text-center my-3">SERVICOS DIGITAIS</h2>
            <h4 class="text-black-50 fs-6 text-center" style="cursor: pointer;">Saiba mais</h4>
          </div>
        </b-card>
      </b-col>
      <b-col class="my-2">
        <b-card class="m-lg-5 animate__animated animate__flipInX">
          <div class="d-flex justify-content-center align-items-center">
            <font-awesome-icon icon="handshake" class="text-dark icons" />
          </div>
          <div>
            <h2 class="text-dark fs-6 text-center my-3">TORNE-SE EMPREENDEDOR</h2>
            <h4
              class="text-black-50 fs-6 text-center"
              v-scroll-to="'#formulario'"
              style="cursor: pointer;"
            >Saiba mais</h4>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="d-flex align-items-sm-center justify-content-sm-center py-5">
      <b-col class="d-flex align-items-center justify-content-center p-0">
        <font-awesome-icon
          icon="chevron-down"
          class="chevron animate__animated animate__headShake animate__infinite"
          v-scroll-to="'#formulario'"
        />
      </b-col>
    </b-row>
    <boxes-modal :box="box" :icon="icon" :title="title" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator'
import BoxesModal from '@/views/Home/Boxes/BoxesModal.vue'

@Component({
  components: { BoxesModal }
})

export default class Boxes extends Vue {
  private icon = ''
  private title = ''
  private box = ''

  @Emit()
  openModal (icon: string, title: string, box: string): void {
    this.icon = icon
    this.title = title
    this.box = box
    this.$bvModal.show('modal')
  }
}
</script>

<style lang="scss" scoped>
.icons {
  font-size: 60px;
}
.chevron {
  font-size: 25px;
  cursor: pointer;
}
</style>
