export default {
  computed: {
    isMobile () {
      return ['xs'].includes(this.$vuetify.breakpoint.name)
    },
    isTablet () {
      return ['sm'].includes(this.$vuetify.breakpoint.name)
    },
    isMobileOrTablet () {
      return ['xs', 'sm'].includes(this.$vuetify.breakpoint.name)
    }
  }
}
