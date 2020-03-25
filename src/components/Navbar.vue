<template>
  <b-navbar class="navbar" type="dark" toggleable="lg"  sticky="true">
    <b-navbar-brand href="/">
      <b-card-img
        :src="require('../assets/logo-sanhueza.png')"
        fluid
        alt="Responsive image"
        width="120"
        height="90"
        class="d-inline-block align-top"
      ></b-card-img>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse class="nav-item " id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item :to="{name: 'Inicio'}" exact>Inicio</b-nav-item>
        <b-nav-item :to="{name: 'Menu'}" exact>Comidas</b-nav-item>
        <b-nav-item :to="{name: 'Hubicacion'}" exact>Hubicacion</b-nav-item>
        <b-nav-item :to="{name: 'Nosotros'}" exact>Nosotros</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <div>
          <button class="btn btn-success btn-lg"><i class="fas fa-camera"></i>Button</button>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template> 

<style>
.navbar {
  color: #fff;
  background: #050505;
  opacity: 0.9;
}

.nav-item {
  color: #fff;
}
</style>