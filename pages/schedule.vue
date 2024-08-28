<template>
      <v-container>
        <v-col cols="12" style="height: 100px; font-size: 36px; font-weight: bold;">
          Schedule
        </v-col>
        <v-col>
          <v-btn @click="prevMonth" color="#3db8ff" style="width: 95px; height: 20px;">
            <v-icon>mdi-chevron-left</v-icon>
            <v-card-text>Prev</v-card-text>
          </v-btn>
          <v-btn @click="nextMonth" color="#3db8ff" style="width: 95px; height: 20px;">
            <v-card-text>Next</v-card-text>
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-col>
        <v-calendar
          ref="calendar"
          v-model="focused"
          color="primary"
        ></v-calendar>
      </v-container>
</template>

<script>
export default {
  data () {
    return {
      focused: ''
    }
  },
  methods: {
    prevMonth () {
      this.$refs.calendar.prev()
    },
    nextMonth () {
      this.$refs.calendar.next()
    }
  },
  head () {
    return {
      title: 'Schedule'
    }
  }
}
</script>
