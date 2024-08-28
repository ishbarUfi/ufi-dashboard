<template>
  <v-container>
    <v-row>
      <v-col cols="12" style="height: 100px; font-size: 36px; font-weight: bold;">
        Dashboard
      </v-col>
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>
            Your Learning Progress
          </v-card-title>
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
        </v-card>

        <v-card class="mt-4" style="height: 400px; overflow-y: auto;">
          <v-card-title style="font-weight: bold;">
            Mandatory Course
          </v-card-title>
          <v-card-text style="font-weight:bold;">
            Find more in your course library
          </v-card-text>
          <v-card-text style="color: black; display: flex;">
            <img class="img" src="../assets/images/propil.jpg" style=" height: 120px; margin-left: 20px;">
            <div style="margin-left: 20px;">
              <h3>Add New Course</h3>
            </div>
            <v-btn color="green" style="position: absolute; right: 10px;">
              <h4>Open Course >></h4>
            </v-btn>
          </v-card-text>

          <v-card-text style="color: black; display: flex;">
            <img class="img" src="../assets/images/propil.jpg" style=" height: 120px; margin-left: 20px;">
            <div style="margin-left: 20px;">
              <h3>Hello World!</h3>
            </div>
            <v-btn color="green" style="position: absolute; right: 10px;">
              <h4>Open Course >></h4>
            </v-btn>
          </v-card-text>

          <v-card-text style="color: black; display: flex;">
            <img class="img" src="../assets/images/propil.jpg" style=" height: 120px; margin-left: 20px;">
            <div style="margin-left: 20px;">
              <h3>Testing</h3>
            </div>
            <v-btn color="green" style="position: absolute; right: 10px;">
              <h4>Open Course >></h4>
            </v-btn>
          </v-card-text>

          <v-btn color="#3db8ff" @click="goMycourse" style="position: absolute; top: 10px; right: 10px; width: 95px; height: 20px;">
            <h6>See other >></h6>
          </v-btn>
        </v-card>
        <v-card class="mt-4">
          <v-card-title>
            Course Recomendation
          </v-card-title>
          <v-row>
            <v-col cols="12" md="5">
              <v-card
                class="mt-4"
                style="cursor:grab; text-align: center; margin-left: 30px; height:300px"
                @click="goMycourse"
              >
              <v-img
              :src="gbrWong.LinkGbr"
              :aspect-ratio="1.41"
              contain
              class="rounded-t"
              style="background-color: rgb(204,216,245);"
            />
                <v-card-title>Add New Course</v-card-title>
                <div style="display: box;">
                  <span>in Laboratory Management</span><br>
                  <span>by supersaya</span>
                </div>
              </v-card>
            </v-col>

            <v-col cols="12" md="5">
              <v-card
                class="mt-4"
                style="cursor: pointer; text-align: center;margin-left: 30px;height:300px"
                @click="goMycourse"
              >
              <v-img
              :src="gbrWong.LinkGbr"
              :aspect-ratio="1.41"
              contain
              class="rounded-t"
              style="background-color: rgb(204,216,245);"
            />
                <v-card-title>Course Laen</v-card-title>
                <div style="display: box;">
                  <span>in Cekulahan</span><br>
                  <span>by supermen</span>
                </div>
              </v-card>
            </v-col>
          </v-row>

          <v-btn color="#3db8ff" @click="goMycourse" style="position: absolute; top: 10px; right: 10px; width: 95px; height: 20px;">
            <h6>See other >></h6>
          </v-btn>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="mb-4">
          <v-card-title>
            On Going Course
          </v-card-title>
          <v-card-text style="color: black">
            <img class="img" src="@/assets/images/propil.jpg" style="margin-left: 20px; height: 40px;">
            <div style="margin-left: 90px; margin-bottom: 40px; margin-top:-50px">
              <h3>Digital Planning</h3>
            </div>
            <v-divider />
            <v-card-text>
              <v-progress-linear :value="20" color="blue" height="10">
                Course : 35%
              </v-progress-linear>
            </v-card-text>
          </v-card-text>
          <v-btn color="#3db8ff" @click="goMycourse" style="position: absolute; top: 10px; right: 10px; width: 95px; height: 20px;">
            <h6>See other >></h6>
          </v-btn>
        </v-card>
        <v-card class="mb-4">
          <v-card-title>
            External Course
          </v-card-title>
          <v-card-text>
            <img class="img" src="@/assets/images/B1.png" style="height: 60px;">
            <img class="img" src="@/assets/images/B2.png" style="height: 60px;">
            <img class="img" src="@/assets/images/B3.png" style="height: 60px;">
            <img class="img" src="@/assets/images/B4.png" style="height: 60px;">
          </v-card-text>
          <v-btn color="#3db8ff" @click="goMycourse" style="position: absolute; top: 10px; right: 10px; width: 95px; height: 20px;">
            <h6>See other >></h6>
          </v-btn>
        </v-card>
        <v-card class="mb-4">
          <v-card-title>
            Popular Course
          </v-card-title>
          <v-card-text style="color: black">
            <v-row>
              <v-col cols="12" md="6">
                <v-card
                  class="mt-4"
                  style="cursor: pointer; text-align: center; height:150px"
                  @click="goMycourse"
                >
                  <v-img
                    :src="gbrWong.LinkGbr"
                    :aspect-ratio="1.41"
                    contain
                    class="rounded-t"
                    style="background-color: rgb(204,216,245);"
                  />
                  <h3>Add New Course</h3>
                  <div style="display: box; margin-left: 5px;">
                    <span>in Laboratory Management</span><br>
                    <span>by supersaya</span>
                  </div>
                </v-card>
              </v-col>

              <v-col cols="12" md="6">
                <v-card
                  class="mt-4"
                  style="cursor: pointer; text-align: center; height:150px"
                  @click="goMycourse"
                >
                <v-img
                :src="gbrWong.LinkGbr"
                :aspect-ratio="1.41"
                contain
                class="rounded-t"
                style="background-color: rgb(204,216,245);"
              />
                  <h3>Course Laen</h3>
                  <div style="display: box; margin-left: 5px;">
                    <span>in Cekulahan</span><br>
                    <span>by supermen</span>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-card-text>
          <v-btn color="#3db8ff" @click="goMycourse" style="position: absolute; top: 10px; right: 10px; width: 95px; height: 20px;">
            <h6>See other >></h6>
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      gbrWong: {
        name: 'TAMBAH KURSUS BARU',
        LinkGbr:
          'https://pismart-dev.pupuk-indonesia.com/public/assets/thumbnail/thumb_comp_pi.png&quot',
        category: 'Manajemen Laboratorium',
        author: 'supersaya',
        chapters: 1,
        rating: 5
      }
    }
  },

  head () {
    return {
      title: 'Dashboard'
    }
  },
  methods: {
    goMycourse () {
      this.$router.push({ name: 'mycourse' })
    },
    gocourselib () {
      this.$router.push({ name: 'courselib' })
    },
    gocoursecont () {
      this.$router.push({ name: 'coursecont' })
    }
  }
}
</script>
