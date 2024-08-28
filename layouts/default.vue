<template>
  <v-app dark>
    <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon v-if="!isMobileOrTablet" @click="miniVariant = !miniVariant" />
      <v-app-bar-nav-icon v-else @click="drawer = !drawer" />
      <v-spacer />
      <TopBar />
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <SideBar :drawer="drawer" :mini-variant="miniVariant" @toggle-drawer="handleDrawer" />
  </v-app>
</template>

<script>
import SideBar from '~/components/menu/SideBar.vue'
import TopBar from '~/components/menu/TopBar.vue'

import breakpoint from '~/mixins/breakpoint'
export default {
  name: 'DefaultLayout',
  components: { SideBar, TopBar },
  mixins: [breakpoint],
  data () {
    return {
      drawer: false,
      miniVariant: false
    }
  },
  methods: {
    handleDrawer (v) {
      this.drawer = v
    }
  }
}
</script>
