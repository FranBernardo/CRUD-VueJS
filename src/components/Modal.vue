<template>
  <div class="text-end pa-5">
    <v-dialog v-model="abrirModal" persistent width="900">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Cadastrar novo funcionario
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Funcionario
        </v-card-title>
        <v-card-text>
          <v-container>
            <form @submit="addBook" class="pa-10">
              <v-text-field
                v-model="codigo"
                type="number"
                label="Código"
                required
              ></v-text-field>
              <v-text-field
                v-model="nome"
                label="Nome Completo"
                required
              ></v-text-field>
              <p class="text-start">Endereço:</p>
              <vue-google-autocomplete
                ref="endereco"
                id="map"
                class="endereco"
                placeholder="Digete o endereco aqui..."
                v-on:placechanged="getAddressData"
              >
              </vue-google-autocomplete>
              <v-row>
                <v-col cols="12" sm="6" md="6" lg="6" xl="6">
                  <v-text-field
                    v-model="bairro"
                    label="Bairro"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="6" xl="6">
                  <v-text-field
                    v-model="cidade"
                    label="Cidade"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-text-field
                v-model="complemento"
                label="Complemento"
                required
              ></v-text-field>
              <v-row>
                <v-col cols="12" sm="6" md="6" lg="6" xl="6">
                  <v-text-field
                    v-model="numero"
                    type="number"
                    label="Numero"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="6" xl="6">
                  <v-text-field
                    v-model="cep"
                    type="tel"
                    v-mask="'#####-###'"
                    label="CEP"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="6" md="6" lg="6" xl="6">
                  <v-text-field
                    v-model="cpf"
                    type="tel"
                    v-mask="'###.###.###-##'"
                    label="CPF"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="6" xl="6">
                  <v-text-field
                    v-model="rg"
                    type="tel"
                    v-mask="'#.###.###'"
                    label="RG"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="6" md="6" lg="6" xl="6">
                  <v-text-field
                    v-model="fone"
                    type="tel"
                    v-mask="'(##) #####-####'"
                    label="Fone"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="6" xl="6">
                  <v-text-field
                    v-model="celular"
                    type="tel"
                    v-mask="'(##) #####-####'"
                    label="Celular"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-text-field
                v-model="nascimento"
                type="tel"
                v-mask="'##/##/####'"
                label="Data de Nascimento"
                required
              ></v-text-field>
              <v-text-field
                v-model="email"
                label="E-mail"
                required
              ></v-text-field>
              <v-text-field
                v-model="salario"
                type="numero"
                label="Salario"
                required
              ></v-text-field>
              <v-btn
                color="success"
                class="ma-3"
                type="submit"
                value="Salvar"
                text
                @click="abrirModal = false"
              >
                Salvar
              </v-btn>
            </form>
          </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="abrirModal = false">
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import VueGoogleAutocomplete from "vue-google-autocomplete";
export default {
  name: "Modal-cadastro",
  props: ["editfuncionario"],
  components: {
    VueGoogleAutocomplete,
  },
  data() {
    return {
      endereco: "",
      abrirModal: this.editfuncionario.abrirModal,
      codigo: "",
      nome: "",
      address: "",
      bairro: "",
      cidade: "",
      numero: "",
      complemento: "",
      cep: "",
      cpf: "",
      rg: "",
      fone: "",
      celular: "",
      nascimento: "",
      email: "",
      salario: "",
      edit: false,
    };
  },
  methods: {
    getAddressData: function (addressData) {
      this.endereco = addressData;
      this.address = this.endereco.route;
      if (this.endereco.administrative_area_level_2) {
        this.cidade = this.endereco.administrative_area_level_2;
      } else {
        this.cidade = this.endereco.administrative_area_level_1;
      }
    },

    addBook(e) {
      e.preventDefault();
      if (this.edit === false) {
        const newFuncionario = {
          codigo: this.codigo,
          nome: this.nome,
          address: this.address,
          bairro: this.bairro,
          cidade: this.cidade,
          numero: this.numero,
          complemento: this.complemento,
          cep: this.cep,
          cpf: this.cpf,
          rg: this.rg,
          fone: this.fone,
          celular: this.celular,
          nascimento: this.nascimento,
          email: this.email,
          salario: this.salario,
          id: Math.floor(Math.random() * 100),
        };
        if (newFuncionario.nome !== "") {
          this.$emit("add-event", newFuncionario);
        }
        this.codigo = "";
        this.nome = "";
        this.address = "";
        this.bairro = "";
        this.cidade = "";
        this.numero = "";
        this.complemento = "";
        this.cep = "";
        this.cpf = "";
        this.rg = "";
        this.fone = "";
        this.celular = "";
        this.nascimento = "";
        this.email = "";
        this.salario = "";
      } else {
        const Item = {
          codigo: this.codigo,
          nome: this.nome,
          address: this.address,
          bairro: this.bairro,
          cidade: this.cidade,
          numero: this.numero,
          complemento: this.complemento,
          cep: this.cep,
          cpf: this.cpf,
          rg: this.rg,
          fone: this.fone,
          celular: this.celular,
          nascimento: this.nascimento,
          email: this.email,
          salario: this.salario,
          id: this.id,
        };
        //send to parent (App.vue)
        this.$emit("edit-event", Item);
        // clear input field
        this.codigo = "";
        this.nome = "";
        this.address = "";
        this.bairro = "";
        this.cidade = "";
        this.numero = "";
        this.complemento = "";
        this.cep = "";
        this.cpf = "";
        this.rg = "";
        this.fone = "";
        this.celular = "";
        this.nascimento = "";
        this.email = "";
        this.salario = "";
        this.edit = false;
      }
    },
  },
  watch: {
    editfuncionario: {
      handler() {
        this.codigo = this.editfuncionario.codigo;
        this.nome = this.editfuncionario.nome;
        this.address = this.editfuncionario.address;
        this.bairro = this.editfuncionario.bairro;
        this.cidade = this.editfuncionario.cidade;
        this.numero = this.editfuncionario.numero;
        this.complemento = this.editfuncionario.complemento;
        this.cep = this.editfuncionario.cep;
        this.cpf = this.editfuncionario.cpf;
        this.rg = this.editfuncionario.rg;
        this.fone = this.editfuncionario.fone;
        this.celular = this.editfuncionario.celular;
        this.nascimento = this.editfuncionario.nascimento;
        this.email = this.editfuncionario.email;
        this.salario = this.editfuncionario.salario;
        this.id = this.editfuncionario.id;
        this.abrirModal = this.editfuncionario.abrirModal;
        this.edit = true;
      },
      deep: true,
    },
    title: {
      handler() {
        if (this.nome === "") {
          this.edit = false;
        }
      },
    },
  },
};
</script>

<style scoped>
.endereco {
  width: 100%;
  border: 1px solid #fff;
  border-bottom: 1px solid gray;
}
input[type="text"]:focus {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
  border-bottom: 1px solid rgb(5, 139, 216);
}
</style>