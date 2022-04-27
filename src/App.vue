<template>
  <v-app>
    <div id="app" data-app>
      <v-toolbar color="indigo" dark fixed>
        <v-toolbar-title>EmpresaX</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <Modal
            v-on:add-event="addItem"
            v-on:edit-event="editItemEvent"
            v-bind:editfuncionario="editfuncionario"
        /></v-toolbar-items>

        <v-toolbar-items class="hidden-md-and-up">
          <v-menu class="hidden-md-and-up" bottom left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn dark icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <Modal
              v-on:add-event="addItem"
              v-on:edit-event="editItemEvent"
              v-bind:editfuncionario="editfuncionario"
            /> </v-menu
        ></v-toolbar-items>
      </v-toolbar>

      <div>
        <Funcionarios
          v-bind:funcionarios="funcionarios"
          v-on:del-event="deleteItem"
          v-on:edit-event="editItem"
        />
      </div>
    </div>
  </v-app>
</template>

<script>
import Funcionarios from "./components/Funcionarios";
import Modal from "./components/Modal";

export default {
  name: "App",
  components: {
    Funcionarios,
    Modal,
  },
  data() {
    return {
      funcionarios: [],
      editfuncionario: {
        title: "",
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
        id: "",
        abrirModal: false,
      },
    };
  },
  methods: {
    menuItems() {
      return this.menu;
    },
    addItem(newFuncionario) {
      this.funcionarios = [...this.funcionarios, newFuncionario];
    },
    deleteItem(id) {
      this.funcionarios = this.funcionarios.filter(
        (funcionario) => funcionario.id !== id
      );
    },
    editItem(id, abrirModal) {
      let objIndex = this.funcionarios.findIndex((obj) => obj.id === id);
      this.editfuncionario.codigo = this.funcionarios[objIndex].codigo;
      this.editfuncionario.nome = this.funcionarios[objIndex].nome;
      this.editfuncionario.address = this.funcionarios[objIndex].address;
      this.editfuncionario.cidade = this.funcionarios[objIndex].cidade;
      this.editfuncionario.bairro = this.funcionarios[objIndex].bairro;
      this.editfuncionario.numero = this.funcionarios[objIndex].numero;
      this.editfuncionario.complemento =
        this.funcionarios[objIndex].complemento;
      this.editfuncionario.cep = this.funcionarios[objIndex].cep;
      this.editfuncionario.cpf = this.funcionarios[objIndex].cpf;
      this.editfuncionario.rg = this.funcionarios[objIndex].rg;
      this.editfuncionario.fone = this.funcionarios[objIndex].fone;
      this.editfuncionario.celular = this.funcionarios[objIndex].celular;
      this.editfuncionario.nascimento = this.funcionarios[objIndex].nascimento;
      this.editfuncionario.email = this.funcionarios[objIndex].email;
      this.editfuncionario.salario = this.funcionarios[objIndex].salario;
      this.editfuncionario.abrirModal = abrirModal;
      this.editfuncionario.id = id;
    },
    editItemEvent(Item) {
      let objIndex = this.funcionarios.findIndex((obj) => obj.id === Item.id);

      this.funcionarios[objIndex].codigo = Item.codigo;
      this.funcionarios[objIndex].nome = Item.nome;
      this.funcionarios[objIndex].address = Item.address;
      this.funcionarios[objIndex].bairro = Item.bairro;
      this.funcionarios[objIndex].cidade = Item.cidade;
      this.funcionarios[objIndex].numero = Item.numero;
      this.funcionarios[objIndex].complemento = Item.complemento;
      this.funcionarios[objIndex].cep = Item.cep;
      this.funcionarios[objIndex].cpf = Item.cpf;
      this.funcionarios[objIndex].rg = Item.rg;
      this.funcionarios[objIndex].fone = Item.fone;
      this.funcionarios[objIndex].celular = Item.celular;
      this.funcionarios[objIndex].nascimento = Item.nascimento;
      this.funcionarios[objIndex].email = Item.email;
      this.funcionarios[objIndex].salario = Item.salario;
      this.editfuncionario.abrirModal = this.funcionarios[objIndex].abrirModal;
    },
  },
  watch: {
    funcionarios: {
      handler() {
        localStorage.setItem("funcionarios", JSON.stringify(this.funcionarios));
      },
      deep: true,
    },
  },
  mounted() {
    if (localStorage.getItem("funcionarios")) {
      this.funcionarios = JSON.parse(localStorage.getItem("funcionarios"));
    }
  },
};
</script>

<style>
#app {
  text-align: center;
  color: #2c3e50;
  display: block;
  width: 100%;
  justify-content: center;
}
</style>
