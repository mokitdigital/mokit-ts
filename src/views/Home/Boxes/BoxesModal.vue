<template>
  <div v-if="icon">
    <modal-component :icon="icon" :title="title" :size="sizes" :orcamento="orcamentos">
      <template v-slot:body>
        <p class="text-white p-5" v-if="box === 'about'">
          Somos uma agência desenvolvedora de websites,
          com projetos personalizados para aqueles que
          buscam um novo patamar para a sua empresa.<br />
          Nossa missão é trazer soluções eficientes com
          as melhores tecnologias do mercado e qualidade
          de forma criativa aos nossos clientes.
          Tudo isso prezando agilidade, competência, pontualidade e a confiança.
        </p>

        <div v-if="box === 'site'">
          <b-row class="text-white" v-for="(st, idx) in tipoSite" :key="idx">
            <b-col sm="12" lg="6" class="text-center mt-4">
              <img
                :src="st.img"
                width="300"
                alt="Logotipo"
              >
              <b-button
                v-b-toggle="[...st.id]"
                class="my-2"
                variant="light"
              >
                Saiba Mais
              </b-button>
            </b-col>
            <b-col sm="12" lg="6" class="mt-4">
              <b-collapse :id="st.id">
                {{ st.descricao }}
              </b-collapse>
            </b-col>
          </b-row>
        </div>

        <div v-if="box === 'equipe'">
          <b-row class="text-center d-flex justify-content-center">
            <b-col class="d-flex justify-content-center">
              <div class="lucas">
                <div class="img"></div>
                <h1>Lucas Scherer</h1>
                <h2>Desenvolvedor</h2>
              </div>
            </b-col>
            <b-col class="d-flex justify-content-center">
              <div class="luan">
                <div class="img"></div>
                <h1>Luan Medeiros</h1>
                <h2>Desenvolvedor</h2>
              </div>
            </b-col>
            <b-col class="d-flex justify-content-center">
              <div class="franciele">
                <div class="img"></div>
                <h1>Franciele Escolante</h1>
                <h2>
                  Marketing e Social<br/>
                  Media
                </h2>
              </div>
            </b-col>
          </b-row>
        </div>

        <div v-if="box === 'suporte'">
          <b-row>
            <b-col cols="12">
              <h1 class="text-center text-white fs-4">Suporte Premium te trará:</h1>
            </b-col>
            <b-col class="text-center">
              <b-list-group>
                <b-list-group-item>Prioridade pelo Whatsapp</b-list-group-item>
                <b-list-group-item>Prioridade pelo Email</b-list-group-item>
                <b-list-group-item>Tempo determinado para definição de verificações</b-list-group-item>
              </b-list-group>
            </b-col>
          </b-row>
        </div>

        <div v-if="box === 'login'">
          <b-row>
            <b-col cols="12" class="px-5 my-3">
              <b-form-group label="Seu usuário" label-class="text-white">
                <b-form-input
                  type="text"
                  v-model="auth.userName"
                  placeholder="Usuário"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" class="px-5 my-3">
              <b-form-group label="Senha" label-class="text-white">
                <b-form-input
                  type="password"
                  v-model="auth.passWord"
                  placeholder="Senha"
                  required
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col cols="12" class="px-5 my-3">
              <b-button
                @click="login()"
              >Entrar</b-button>
            </b-col>
          </b-row>
        </div>
      </template>
    </modal-component>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'
import ModalComponent from '@/components/ModalComponent.vue'
import { loginService } from '@/services/auth.service'

@Component({
  components: { ModalComponent }
})

export default class Boxes extends Vue {
  @Prop() readonly icon!: string
  @Prop() readonly title!: string
  @Prop() readonly box!: string
  @Prop() readonly size!: string
  @Prop() readonly orcamento!: string

  private auth = {
    userName: '',
    passWord: ''
  }

  private sizes = this.size || 'lg'

  private orcamentos = this.orcamento

  private tipoSite = [
    {
      descricao: 'Portfólio é uma coleção de trabalhos já realizados de uma empresa ou de um profissional. Muitas organizações têm seus portfólios separados por departamentos ou unidade de negócios. Existem diversos tipos de portfólios, depende do segmento da empresa e do profissional.',
      img: require('../../../assets/img/site-portfolio.webp'),
      id: 'site-portfolio'
    },
    {
      descricao: '(ou “comércio eletrônico” em português) é uma modalidade de comércio onde os negócios e transações financeiras são realizadas via dispositivos e plataformas eletrônicas, como computadores, tablets e smartphones.',
      img: require('../../../assets/img/eco-maior-1.png'),
      id: 'site-ecommerce'
    },
    {
      descricao: 'é a entrega de um produto onde o seu cliente está, seja em casa, no trabalho ou algum outro lugar.',
      img: require('../../../assets/img/ifood.jpg'),
      id: 'site-delivery'
    },
    {
      descricao: 'Cartão de visita é, num sentido genérico, um pequeno cartão contendo os dados de contacto de pessoas ou empresas. As informações inseridas num cartão de visita geralmente são o nome, cargo ou função, endereço, número de telefone e e-mail, mas nada impede que informações sejam acrescentadas ou omitidas.',
      img: require('../../../assets/img/cartão-de-visita-de-nutrição-2.jpg'),
      id: 'site-cartao'
    },
    {
      descricao: 'Planejamento de Recursos Empresariais ou planeamento de recurso corporativo (em inglês Enterprise Resource Planning; ERP) é um sistema de informação que interliga todos os dados e processos de uma organização em um único sistema.',
      img: require('../../../assets/img/O-que-e-um-Sistema-ERP_V2-1024x576.png.webp'),
      id: 'site-erp'
    }
  ]

  @Emit()
  login (): void {
    loginService
      .login(this.auth.userName, this.auth.passWord)
      .then(response => {
        console.log(response)
        this.$router.push('/allforms')
      })
  }
}
</script>

<style lang="scss" scoped>
.lucas {
    .img {
      width: 200px;
      height: 200px;
      left: 0px;
      top: 0px;
      background: url('../../../assets/img/lucas.png');
      background-size: 100%;
    }
    h1 {
      font-family: 'Raleway', sans-serif;
      color: #fff;
      font-size: 25px;
    }
    h2 {
      font-size: 15px;
      font-family: 'Raleway', sans-serif;
      color: #FF8500;
    }
  }
  .luan {
    .img {
      width: 200px;
      height: 200px;
      left: 0px;
      top: 0px;
      background: url('../../../assets/img/luan.jpg');
      background-size: 100%;
      border-radius: 180px;
      border: 8px solid #844F82;
    }
    h1 {
      font-family: 'Raleway', sans-serif;
      color: #fff;
      font-size: 25px;
    }
    h2 {
      font-size: 15px;
      font-family: 'Raleway', sans-serif;
      color: #FF8500;
    }
  }
  .franciele {
    .img {
      width: 200px;
      height: 200px;
      left: 0px;
      top: 0px;
      background: url('../../../assets/img/fran.jpeg');
      background-size: 100%;
      border-radius: 180px;
      border: 8px solid #844F82;
    }
    h1 {
      font-family: 'Raleway', sans-serif;
      color: #fff;
      font-size: 25px;
    }
    h2 {
      font-size: 15px;
      font-family: 'Raleway', sans-serif;
      color: #FF8500;
    }
  }
</style>
