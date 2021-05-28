<template>
  <div class="home">
    <inicio />
    <boxes />
    <form-component />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Boxes from './Home/Boxes.vue'
import Form from './Home/Form.vue'
import Inicio from './Home/Inicio.vue'

@Component({
  components: { Inicio, Boxes, 'form-component': Form }
})

export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
</style>
