<template>
  <b-modal
    id="modal"
    body-bg-variant="dark"
    footer-bg-variant="dark"
    header-bg-variant="dark"
    header-text-variant="light"
    header-border-variant="dark"
    footer-border-variant="dark"
    hide-header-close
    content-class="rounded-circle"
    size="lg"
  >
    <template #modal-header="{ close }">
      <font-awesome-icon :icon="icon" class="my-1 mx-4 fs-1" />
      <h1 class="mx-1 mt-2 fs-3">{{title}}</h1>
      <font-awesome-icon icon="times" class="ms-auto pointer fs-2" @click="close" />
    </template>

    <slot name="body" />

    <template #modal-footer="{ close }">
      <p class="text-white-50 text-center pointer" @click="close" v-scroll-to="'#formulario'">Gostou? Faça um orçamento!</p>
    </template>
  </b-modal>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class Modal extends Vue {
  @Prop() readonly icon: string | undefined
  @Prop() readonly title: string | undefined
}
</script>

<style>
.mt-3_5 {
  margin-top: 15px;
}
.pointer {
  cursor: pointer;
}
</style>
