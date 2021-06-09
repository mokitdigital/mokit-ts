<template>
  <b-container>
    <b-row>
      <b-col>
        <b-card
          title="Tabela de formularios"
          body-text-variant="dark"
          class="my-5 py-5"
        >
          <b-table
            :items="forms"
            :fields="fields"
            empty-text="Tabela esta vazia"
            show-empty
          >
            <template #cell(createdAt)="row">
              <div class="d-flex flex-column mb-1">
                <small>{{ row.item.createdAt | formatDateTime }}</small>
              </div>
            </template>
            <template #cell(button)="data">
              <b-button
                @click="deleteForm(data.item._id)"
                variant="danger"
                size="sm"
              >
                <font-awesome-icon icon="trash-alt"></font-awesome-icon>
              </b-button>
            </template>
          </b-table>
        </b-card>
      </b-col>
    </b-row>
    <boxes-modal :box="box" :icon="icon" :title="title" />
  </b-container>
</template>

<script lang="ts">
import { formService } from '@/services/form.service'
import { Component, Emit, Vue } from 'vue-property-decorator'
import BoxesModal from '@/views/Home/Boxes/BoxesModal.vue'

@Component({
  components: { BoxesModal }
})
export default class Forms extends Vue {
  private forms = []
  private fields = [
    {
      key: 'createdAt',
      label: 'Enviado',
      sortable: true
    },
    {
      key: 'nomeCompleto',
      sortable: true
    },
    {
      key: 'email',
      sortable: false
    },
    {
      key: 'celular',
      sortable: false
    },
    {
      key: 'empresa',
      sortable: false
    },
    {
      key: 'tipo',
      sortable: false
    },
    {
      key: 'button',
      label: '',
      sortable: false
    }
  ]

  private icon = ''
  private title = ''
  private box = ''

  @Emit()
  findForms (): void {
    formService
      .findForms()
      .then(response => {
        this.forms = response.data
      })
  }

  @Emit()
  deleteForm (id: string): void {
    this.$bvModal
      .msgBoxConfirm('Deseja remover este formulario?', {
        centered: true,
        title: 'Confirmação',
        size: 'sm',
        okTitle: 'Sim',
        okVariant: 'primary',
        cancelTitle: 'Não',
        cancelVariant: 'outline-secondary',
        headerClass: 'p-3',
        footerClass: 'p-2 flex-row d-flex'
      })
      .then((confirmed) => {
        if (confirmed) {
          formService
            .deleteForm(id)
            .then(() => {
              this.$notify({
                title: 'Confirmação',
                text: 'Formulario excluida com sucesso.',
                type: 'success'
              })
              this.$router.go(0)
            })
        }
      })
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mounted () {
    this.findForms()
  }
}
</script>

<style>

</style>
