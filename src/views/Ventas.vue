<template>
  <div>
    <form @submit.prevent="agregarNota()">
      <h3 class="text-center">Agregar nueva Nota</h3>
      <input
        type="text"
        placeholder="Ingrese un Nombre"
        class="form-control my-2"
        v-model="nota.nombre"
      />
      <input
        type="text"
        placeholder="Ingrese una cantidad"
        class="form-control my-2"
        v-model="nota.cantidad"
      />
      <b-button class="btn-sm btn-success" type="submit">Agregar</b-button>
    </form>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Valor</th>
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in notas" :key="index">
          <th scope="row">{{item._id}}</th>
          <td>{{item.nombre}}</td>
          <td>{{item.cantidad}}</td>
          <td>{{item.valor*item.cantidad}}</td>
          <td>
            <!-- <b-button class="btn-warning btn-sm mx-2" @click="activarEdicion(item._id)">Actualizar</b-button> -->
            <b-button class="btn-danger btn-sm mx-2" @click="eliminarNota(item._id)">Eliminar</b-button>
          </td>
        </tr>
      </tbody>
    </table>

    <Cabecera></Cabecera>
    <Lista></Lista>
  </div>
</template>

<script>
import Cabecera from "../components/Cabecera.vue";
import Lista from "../components/Lista.vue";

export default {
  components: {
    Cabecera,
    Lista
  },
  data() {
    return {
      notas: [],
      nota: { nombre: "", descripcion: "" }
    };
  },
  created() {
    this.listarNotas();
  },
  methods: {
    listarNotas() {
      //solo nombre de la ruta,  gracias a ruta base
      this.axios
        .get("ventas")
        .then(response => {
          // console.log(response.data)
          this.notas = response.data;
        })
        .catch(e => {
          console.log("error" + e);
        });
    },
    agregarNota() {
      //console.log(this.nota);
      this.axios
        .post("/nueva-venta", this.nota)
        .then(res => {
          this.notas.push(res.data);
          this.nota.nombre = "";
          this.nota.cantidad = "";
        })
        .catch(e => {
          console.log(e.response);
        });
    },
    eliminarNota(id) {
      this.axios
        .delete(`ventas/${id}`)
        .then(res => {
          let index = this.notas.findIndex(item => item._id === res.data._id);
          this.notas.splice(index, 1);
        })
        .catch(e => {
          console.log(e.response);
        });
    }
  }
};
</script>