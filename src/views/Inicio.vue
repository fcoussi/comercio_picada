<template>
  <div>
    <Navbar></Navbar>
    <header class="main-header">
      <div class="background-overlay text-white py-5">
        <!--background-overlay, se refiere
        a un efecto a asignar a una imagen, junto con algunas propiedades-->
        <div class="container">
          <!--Para centrar los contenidos-->
          <div class="row d-flex h-100">
            <div class="col-sm-6 text-center justify-content-center align-self-center">
              <!--justify-content-center align-self-center nos permite centrar de forma vertical-->
              <h1>Haz tu pedido y disfruta de nuestros sabores</h1>
              <p>
                 Las promociones no son aumulables entre sí. Pedido mínimo despacho a domicilio $8.500,
                 despúes de aplicado cualquier tipo de descuento.

              </p>
              <a href="#" class="btn btn-primary btn-lg text-white">Conoce más</a>
              <!--Boton para redireccionar a alguna parte, con propiedades bootstrap-->
            </div>
            
            <div class="col-sm-6">
              <Carousel></Carousel>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section id="newsletter" class="bg-dark text-white py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <input type="text" class="form-control form-control-lg" placeholder="Ingresa tu nombre" />
          </div>
          <div class="col-md-4">
            <input
              type="email"
              class="form-control form-control-lg"
              placeholder="Ingresa tu correo"
            />
          </div>
          <div class="col-md-4">
            <button class="btn btn-primary btn-lg btn-block">
              <!--btn-lg: Boton ancho, btn-block: Ocupa todo el espacio que disponga-->
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- Características -->
    <section class="py-5 text-center page-section" id="beneficios">
      <!--Espaciado de 5-->
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="card text-white">
              <div class="card-body">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <img src="../assets/Anuncio1.jpg" class="img-fluid d-none d-sm-block" />
                    </div>

                    <div class="col-md-6">
                      <img src="../assets/Anuncio2.jpg" class="img-fluid d-none d-sm-block" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="footer">
      <div class="row text-center text-white">
        <div class="col ml-auto">
          <p>Copyright &copy; 2020</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from "../components/Navbar.vue";
import Carousel from "../components/carousel.vue";
export default {
  components: { Navbar, Carousel }
};
</script>

<style>
.footer {
  background: #4d4b4b; /*Color de fondo*/
}

.termino {
  background: #080808;
}

.main-header {
  position: relative;
  background: url(../assets/tablero.jpg);
  background-size: cover;
}
</style>