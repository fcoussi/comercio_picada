<template>
  <div>
    <Navbar></Navbar>
    <br />
    <div class="row">
      <div class="col-8">
        <div class="container align-center">
          <h2 class="widget-title">Encuéntranos</h2>
        </div>
        <google-map />
      </div>
      <div class="col-4 bg-dark">
        <section id="widget_contact_info-5" class="widget widget_contact_info">
          <h2 class="widget-title text-white">Horas e información</h2>
          <div itemscope itemtype="http://schema.org/LocalBusiness">
            <div
              class="confit-address"
              itemscope
              itemtype="http://schema.org/PostalAddress"
              itemprop="address"
            >
              <a
                href="https://maps.google.com/maps?z=16&amp;q=tiburcio+saavedra+1210+-+temuco"
                target="_blank"
              >Las Margaritas 1761 - Temuco</a>
            </div>
            <div class="confit-phone text-white">
              <span itemprop="telephone">452 344787</span>
            </div>
            <div class="confit-hours text-white" itemprop="openingHours">
              Lunes, Martes y Miércoles: desde las 18:00 hrs. hasta las 23:00 hrs.
              <br />Jueves, Viernes, Sábado: desde las 18:00 hrs. hasta las 23:00 hrs.
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import GoogleMap from "../components/GoogleMap.vue";

export default {
  components: {
    Navbar,
    GoogleMap
  }
};
</script>