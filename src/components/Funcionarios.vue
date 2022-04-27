<template>
  <div>
    <h2>Funcionarios cadastrados</h2>
    <v-row class="justify-center mx-auto">
      <input
        type="type"
        v-model="nome"
        class="buscar"
        placeholder="Buscar funcionario pelo nome..."
      />
    </v-row>
    <div v-bind:key="funcionario.id" v-for="funcionario in filteredItems">
      <FuncionarioItem
        v-bind:funcionario="funcionario"
        v-on:del-item="delMethod"
        v-on:edit-item="editMethod"
      />
    </div>
    <div v-if="!funcionarios.length">
      <p>Ainda não tem funcionarios cadastrados</p>
    </div>
  </div>
</template>

<script>
import FuncionarioItem from "./FuncionarioItem";
export default {
  name: "funcionarios-cadastrados",
  props: ["funcionarios"],
  components: {
    FuncionarioItem,
  },
  data() {
    return {
      nome: "",
      dados: [],
    };
  },

  mounted() {},

  computed: {
    filteredItems() {
      return this.funcionarios.filter((item) => {
        return item.nome.toLowerCase().indexOf(this.nome.toLowerCase()) > -1;
      });
    },
  },
  methods: {
    delMethod(id) {
      this.$emit("del-event", id);
    },
    editMethod(id, abrirModal) {
      this.$emit("edit-event", id, abrirModal);
    },
  },
};
</script>

<style scoped>
.buscar {
  width: 30%;
  margin: 10px;
  padding: 10px;
  border: 1px solid #3f51b5;
  border-radius: 10px;
}
</style>
