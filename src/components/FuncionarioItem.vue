<template>
  <div class="mx-auto">
    <div class="card">
      <p>{{ funcionario.codigo }}</p>
      <h2>{{ funcionario.nome }}</h2>
      <v-card class="mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">Endereço</div>
            <v-list-item-title class="text-p mb-1">
              {{ funcionario.address }}
            </v-list-item-title>
            <v-list-item-subtitle>{{
              funcionario.bairro
            }}</v-list-item-subtitle>
            <v-list-item-subtitle>
              {{ funcionario.cidade }}</v-list-item-subtitle
            >
            <v-list-item-subtitle>{{
              funcionario.numero
            }}</v-list-item-subtitle>
            <v-list-item-subtitle>
              {{ funcionario.complemento }}</v-list-item-subtitle
            >
            <v-list-item-subtitle>{{ funcionario.cep }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
      <v-card class="mx-auto" outlined>
        <v-list-item three-line>
          <v-list-item-content>
            <div class="text-overline mb-4">Dados Pessoais</div>
            <v-list-item-subtitle
              >CPF: {{ funcionario.cpf }}</v-list-item-subtitle
            >
            <v-list-item-subtitle>
              RG: {{ funcionario.rg }}</v-list-item-subtitle
            >
            <v-list-item-subtitle
              >Data de nascimento: {{ funcionario.nascimento }}
            </v-list-item-subtitle>
            <v-list-item-subtitle
              >Fone: {{ funcionario.fone }}</v-list-item-subtitle
            >
            <v-list-item-subtitle>
              Celular: {{ funcionario.celular }}</v-list-item-subtitle
            >
            <v-list-item-subtitle
              >E-mail: {{ funcionario.email }}</v-list-item-subtitle
            >
            <v-list-item-subtitle
              >Salario: {{ funcionario.salario }}</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-card>
      <v-btn
        color="primary"
        class="ma-3"
        @click="$emit('edit-item', funcionario.id, true)"
      >
        Editar
      </v-btn>
      <v-btn color="error" @click="$emit('del-item', funcionario.id)">
        Deletar
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "FuncionarioItem",
  props: ["funcionario"],
};
</script>

<style scoped>
.glyphicon-pencil,
.glyphicon-trash {
  font-size: 15px;
  padding: 4px;
}
.card {
  width: 500px;
  margin: 20px auto 10px auto;
  padding: 10px;
  border: 1px rgb(172, 160, 160) solid;
  border-radius: 5px;
}
.card-endereço {
  border: 1px rgb(172, 160, 160) solid;
}
</style>
