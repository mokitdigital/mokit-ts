<template>
  <div id="formulario" class="border-top mt-2">
    <h1 class="text-white text-center mt-4">Faça Orçamento</h1>
    <b-row cols-lg="2" cols="1">
      <b-col>
        <b-form
          @submit="onSubmit"
          v-if="show"
          class="p-4 m-lg-5 p-lg-4"
        >
          <b-container class="p-lg-2">
            <b-row>
              <b-col sm="12" lg="12">
                <b-form-group
                  id="nome"
                  label="Nome"
                  class="my-2"
                >
                  <b-form-input
                    v-model="form.nomeCompleto"
                    placeholder="Coloque seu nome"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="12" lg="12">
                <b-form-group
                  id="nome"
                  label="E-mail"
                  class="my-2"
                >
                  <b-form-input
                    v-model="form.email"
                    placeholder="E-mail para contato"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="12" lg="12">
                <b-form-group
                  id="nome"
                  label="Celular"
                  class="my-2"
                >
                  <the-mask
                    v-model="form.celular"
                    class="form-control"
                    :mask="['(##) #####-####']"
                    placeholder="Celular ou Telefone"
                  ></the-mask>
                </b-form-group>
              </b-col>
              <b-col sm="12" lg="12">
                <b-form-group
                  id="nome"
                  label="Empresa"
                  class="my-2"
                >
                  <b-form-input
                    v-model="form.empresa"
                    placeholder="Nome fantasia"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col sm="12" lg="12">
                <b-form-group
                  label="Tipo de site"
                  class="my-2"
                >
                  <b-form-select
                    class="form-control"
                    v-model="form.tipo"
                    :options="sites"
                    required
                  ></b-form-select>
                </b-form-group>
              </b-col>
              <b-col sm="12" lg="12">
                <b-form-group class="my-5">
                  <b-form-checkbox
                    v-model="status"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                  ><span class="mx-2">Autorizo entrar em contato</span></b-form-checkbox>
                </b-form-group>
              </b-col>
              <b-col sm="12" lg="12" v-if="status === 'accepted'">
                <b-button-group class="d-flex justify-content-center d-md-table mx-auto">
                  <b-button type="submit" variant="outline-light">Por Email</b-button>
                  <b-button type="submit" variant="outline-success">Whatsapp</b-button>
                  <b-button type="submit" variant="outline-danger">Via Instagram</b-button>
                </b-button-group>
              </b-col>
            </b-row>
          </b-container>
        </b-form>
        <b-card
          v-if="!show"
          bg-variant="success"
          text-variant="white"
          header="Enviado com sucesso!"
          class="text-center my-4"
        >
          <b-card-text>Obrigado! Logo enviaremos uma mensagem!</b-card-text>
        </b-card>
      </b-col>
      <b-col class="d-flex justify-content-center align-items-center">
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000"
          fade
          indicators
          img-width="1024"
          img-height="480"
        >
          <b-carousel-slide
            caption="Sites personalizados"
            :img-src="require('../../assets/img/cel.png')"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Google Analitycs"
            class="text-dark"
            :img-src="require('../../assets/img/ga.webp')"
          ></b-carousel-slide>
          <b-carousel-slide
            :img-src="require('../../assets/img/ads.png')"
          ></b-carousel-slide>
        </b-carousel>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator'
import { formService } from '@/services/form.service'

@Component
export default class Form extends Vue {
  private form = {
    nomeCompleto: '',
    email: '',
    celular: '',
    empresa: '',
    tipo: null
  }

  private status = 'not_accepted'

  // eslint-disable-next-line @typescript-eslint/ban-types
  private sites: Array<object> = [
    { text: 'Selecione uma opção', value: null },
    { text: 'Portfólio', value: 'Portfólio' },
    { text: 'Cartão de Visita', value: 'Cartão de Visita' },
    { text: 'E-Commerce', value: 'E-Commerce' },
    { text: 'Delivery', value: 'Delivery' },
    { text: 'ERP/Software Interno', value: 'ERP/Software Interno' }
  ]

  private show = true

  @Emit()
  onSubmit (): void {
    formService
      .createForm(this.form)
      .then(response => {
        console.log(response.data)
      })
    this.show = !this.show
  }
}
</script>

<style>

</style>
