<template>
  <navbar-component />
  <router-view />
  <footer-component />
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  components: {
    NavbarComponent,
    FooterComponent
}
}
</script>