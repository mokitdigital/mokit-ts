<template>
  <div>
    <b-sidebar
      id="sidebar-1"
      bg-variant="dark"
      text-variant="light"
      backdrop-variant="light"
      no-header-close
      shadow
    >
      <div class="px-3 py-5">
        <p id="list-menu-1">
          <router-link to="/" class="text-white nounderline">
          <font-awesome-icon icon="globe" class="mx-2" />
            Página Inicial
          </router-link>
        </p>
        <p id="list-menu-1" @click="openModal('address-card', 'QUEM SOMOS', 'about')">
          <font-awesome-icon icon="address-card" class="mx-2" />
          Quem somos?
        </p>
        <p id="list-menu-2" @click="openModal('dice-d20', 'SITES', 'site')">
          <font-awesome-icon icon="dice-d20" class="mx-2"></font-awesome-icon>
          Sites
        </p>
        <p id="list-menu-3" @click="openModal('people-carry', 'NOSSA EQUIPE', 'equipe')">
          <font-awesome-icon icon="people-carry" class="mx-2"></font-awesome-icon>
          Nossa Equipe
        </p>
        <p id="list-menu-4" v-b-toggle.sidebar-1 v-scroll-to="'#formulario'">
          <font-awesome-icon icon="comment-dollar" class="mx-2"></font-awesome-icon>
          Faça um orcamento
        </p>
        <p id="list-menu-5" v-b-toggle.sidebar-1 v-scroll-to="'#formulario'">
          <font-awesome-icon icon="question-circle" class="mx-2"></font-awesome-icon>
          Atendimento Virtual
        </p>
        <p id="list-menu-6" @click="openModal('headset', 'SUPORTE PREMIUM', 'suporte')">
          <font-awesome-icon icon="headset" class="mx-2"></font-awesome-icon>
          Suporte Premium
        </p>
        <p id="list-menu-7">
          <font-awesome-icon icon="share-alt" class="mx-2"></font-awesome-icon>
          Serviços Digitais
        </p>
        <p id="list-menu-8" v-b-toggle.sidebar-1 v-scroll-to="'#formulario'">
          <font-awesome-icon icon="handshake" class="mx-2"></font-awesome-icon>
          Torne-se Empreendedor
        </p>
        <hr>
        <p v-if="token" id="list-menu-9">
          <router-link to="/allforms" class="text-white nounderline">
            <font-awesome-icon icon="user-alt" class="mx-2"></font-awesome-icon>
            Luan
          </router-link>
        </p>
        <p v-else id="list-menu-9" @click="openModal('sign-in-alt', 'LOGIN', 'login')">
          <font-awesome-icon icon="sign-in-alt" class="mx-2"></font-awesome-icon>
          Entrar
        </p>
      </div>
    </b-sidebar>
    <boxes-modal :box="box" :icon="icon" :title="title" :size="'md'" :orcamento="false" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BoxesModal from '@/views/Home/Boxes/BoxesModal.vue'
import { authHeader } from '@/helpers/authHeader'
export default Vue.extend({
  components: { BoxesModal },
  data () {
    return {
      icon: '',
      title: '',
      box: '',
      token: undefined
    }
  },
  methods: {
    openModal (icon: string, title: string, box: string): void {
      this.icon = icon
      this.title = title
      this.box = box
      this.$bvModal.show('modal')
    }
  },
  mounted () {
    this.token = authHeader()
  }
})
</script>

<style lang="scss" scoped>
#list-menu-1,
#list-menu-2,
#list-menu-3,
#list-menu-4,
#list-menu-5,
#list-menu-6,
#list-menu-7,
#list-menu-8,
#list-menu-9 {
  padding-block: 20px;
  border-radius: 5px;
}

#list-menu-1:hover,
#list-menu-2:hover,
#list-menu-3:hover,
#list-menu-4:hover,
#list-menu-5:hover,
#list-menu-6:hover,
#list-menu-7:hover,
#list-menu-8:hover,
#list-menu-9:hover {
  background-color: rgb(119, 119, 119);
  cursor: pointer;
}

.nounderline {
  text-decoration: none !important
}
</style>
