<template>
  <section id="promo" class="explore">
    <div class="container">
      <div class="row text-content title pt-15 my-0 mx-0" id="header">
        <div class="col-md-9 px-md-0">
          <h1 class="pb-3">
            Explore our promos
          </h1>
          <p class="pb-0 descript-explore">
            Blandit <span class="cl-blue">1,900</span> natoque dui justo, dictum turpis amet, viverra vel
            ornare quis mattis mi ac eget id integer dolor dui aliquam volutpat varius pulvinar massa
          </p>
        </div>
        <div class="col-md-3 mt-md-3">
          <button class="btn btn-blue px-5 py-3 mt-0">Learn More</button>
        </div>
      </div>
      <div id="carouselExampleControls" class="carousel slide mt-md-3" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item" :class="{'active': $index === 0}" v-for="(hotel, $index) in hotels" :key="$index">
              <img :src="`${hotel.url}`" class="d-block w-100" alt="hotel">
              <div class="carousel-caption d-none d-md-block">
                <h5>{{ hotel.name }}</h5>
                <p>{{ hotel.address }}</p>
              </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      hotels: []
    }
  },
  mounted() {
    fetch("/data.json")
      .then((response) => response.json())
      .then((response) => 
        this.hotels = response
      )
  }
}
</script>