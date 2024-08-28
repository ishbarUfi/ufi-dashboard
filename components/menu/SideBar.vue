<template>
  <v-navigation-drawer v-model="visible" :mini-variant="miniVariant" app>
    <v-list-item>
      <v-container class="d-flex justify-center">
        <v-img
          v-if="miniVariant"
          :src="logo"
          alt="Apps Logo"
          max-height="45"
          max-width="45"
        />
        <v-img
          v-else
          :src="logo"
          alt="Apps Logo"
          max-height="180"
          max-width="180"
        />
      </v-container>
    </v-list-item>
    <v-divider />
    <v-list>
      <v-list-item-group
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in menus"
          :key="i"
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: true
    },
    miniVariant: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      visible: false,
      logo: require('~/assets/images/LogoLep.png'),
      menus: [
        { text: 'Index', icon: 'mdi-clock', to: '/' },
        { text: 'Dashboard', icon: 'mdi-home', to: '/dashboard' },
        { text: 'My Courses', icon: 'mdi-book-open-variant', to: '/mycourse' },
        { text: 'Course Library', icon: 'mdi-bookshelf', to: '/courselib' },
        { text: 'Course Content', icon: 'mdi-note-edit', to: '/coursecont' },
        { text: 'Schedule', icon: 'mdi-calendar', to: '/schedule' }
      ]
    }
  },
  watch: {
    drawer (v) {
      this.visible = v
      console.log(v)
    },
    visible (v) {
      this.$emit('toggle-drawer', v)
    }
  }
}
</script>
