<template>
  <div>
    <Navbar></Navbar>
    <b-container>
      <b-row>
        <b-col>
          <h2>Products</h2>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid>
      <b-row>
        <b-col cols="3">
          <b-list-group v-b-scrollspy:listgroup-ex>
            <b-list-group-item href="#list-item-1">Churrascos</b-list-group-item>
            <b-list-group-item href="#list-item-2">Completos</b-list-group-item>
            <b-list-group-item href="#list-item-3">Salchipapas</b-list-group-item>
            <b-list-group-item href="#list-item-4">Chorrillanas</b-list-group-item>
            <b-list-group-item href="#list-item-5">Bebidas</b-list-group-item>
          </b-list-group>
        </b-col>

        <b-col cols="9">
          <div id="listgroup-ex" style="position:relative; overflow-y:auto; height:600px">
            <h4 id="list-item-1"><Churrascos/></h4>
            <h4 id="list-item-2"><Completos /></h4>
            <h4 id="list-item-3"><Salchipapas /></h4>
            <h4 id="list-item-4"><Chorrillanas /></h4>
            <h4 id="list-item-5"><Bebidas /></h4>
          </div>
        </b-col>

      </b-row>
    </b-container>
  </div>

</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Completos from "@/components/Completos.vue";
import Churrascos from "@/components/Churrascos.vue";
import Salchipapas from "@/components/Salchipapas.vue";
import Bebidas from "@/components/Bebidas.vue";
import Chorrillanas from "@/components/Chorrillanas.vue";
export default {
  data() {
    return {
      
    };
  },
  components: {
    Navbar,
    Chorrillanas,
    Completos,
    Bebidas,
    Salchipapas,
    Churrascos 
  }
};
</script>

