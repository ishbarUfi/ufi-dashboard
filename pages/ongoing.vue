<template>
  <v-container>
    <v-row>
      <v-col cols="12" style="height: 100px; font-size: 36px; font-weight: bold;">
        My Course
      </v-col>
      <v-card>
        <v-card-title>
          Your Learning Progress
        </v-card-title>
        <span class="last-update" style="margin-top: 4px; margin-left: 40px; color: #6c757d; font-size: 14px;">Last Update: {{ lastUpdateDate }}</span>
        <v-card-text style="color: black">
          <img class="img" src="../assets/images/propil.png" style="margin-left: 20px; height: 40px;">
          <div style="margin-left: 90px; margin-bottom: 40px; margin-top:-50px">
            <h3>Nama User</h3>
          </div>
          <v-divider />
          <v-card-text>
            <v-progress-linear :value="20" color="green" height="10">
              Course : 20%
            </v-progress-linear>
          </v-card-text>
        </v-card-text>
        <v-btn color="#3db8ff" style="position: absolute; top: 10px; right: 10px; width: 95px; height: 20px;">
          <h6>See other >></h6>
        </v-btn>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head () {
    return {
      title: 'mycourse'
    }
  }
}
</script>
