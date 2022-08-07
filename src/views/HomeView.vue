<template>
  <BannerComponent />
  <BrandComponent />
  <ServicesComponent />
  <ExploreComponent />
  <TestimonialComponent />
  <NewsletterComponent />
</template>

<script>
import BrandComponent from '@/components/BrandComponent.vue'
import ServicesComponent from '@/components/ServicesComponent.vue'
import ExploreComponent from '@/components/ExploreComponent.vue'
import TestimonialComponent from '@/components/TestimonialComponent.vue'
import NewsletterComponent from '@/components/NewsletterComponent.vue'
import BannerComponent from '@/components/BannerComponent.vue'


export default {
  name: 'App',
  components: {
    BrandComponent,
    ServicesComponent,
    ExploreComponent,
    TestimonialComponent,
    NewsletterComponent,
    BannerComponent
}
}
</script>
