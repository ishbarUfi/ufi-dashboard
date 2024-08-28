<template>
  <v-container>
    <v-col cols="12" style="height: 100px; font-size: 36px; font-weight: bold;">
      My Course
    </v-col>
    <v-row>
      <v-col>
        <v-select v-model="MenuSort" outlined style="width: 300px" :items="MenuSort" label="Sort By" />
      </v-col>
      <v-col>
        <v-select v-model="MenuCourse" outlined style="width: 300px" :items="MenuCourse" label="Status" />
      </v-col>
      <v-col>
        <v-text-field v-model="Search" outlined style="width: 300px" label="Search Title">
          icon: 'mdi-note-edit'
        </v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="1">
        <input v-model="Checked" type="checkbox" style="transform: scale(1.5);"> <br>
        <input v-model="Checked" type="checkbox" style="transform: scale(1.5);">
      </v-col>
      <v-col cols="12" md="2">
        <span> Kompetensi Teknis </span>
      </v-col>
      <v-col cols="12" md="3">
        <v-card
          class="mt-2"
          style="cursor: pointer; text-align: center; height:300px"
          @click="handleClick"
        >
        <v-img
        :src="gbrWong.LinkGbr"
        :aspect-ratio="1.41"
        contain
        class="rounded-t"
        style="background-color: rgb(204,216,245);"
      />
          <h4>Add New Course</h4>
          <div style="display: box; margin-left: 5px;">
            <span>in Laboratory Management</span><br>
            <span>by supersaya</span>
          </div>
        </v-card>
        <v-card
          class="mt-2"
          style="cursor: pointer; text-align: center; height:300px"
          @click="handleClick"
        >
        <v-img
        :src="gbrWong.LinkGbr"
        :aspect-ratio="1.41"
        contain
        class="rounded-t"
        style="background-color: rgb(204,216,245);"
      />
          <h4>Add New Course</h4>
          <div style="display: box; margin-left: 5px;">
            <span>in Laboratory Management</span><br>
            <span>by supersaya</span>
          </div>
        </v-card>
        <v-card
          class="mt-2"
          style="cursor: pointer; text-align: center; height:300px"
          @click="handleClick"
        >
        <v-img
        :src="gbrWong.LinkGbr"
        :aspect-ratio="1.41"
        contain
        class="rounded-t"
        style="background-color: rgb(204,216,245);"
      />
          <h4>Add New Course</h4>
          <div style="display: box; margin-left: 5px;">
            <span>in Laboratory Management</span><br>
            <span>by supersaya</span>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card
          class="mt-2"
          style="cursor: pointer; text-align: center; height:300px"
          @click="handleClick"
        >
        <v-img
        :src="gbrWong.LinkGbr"
        :aspect-ratio="1.41"
        contain
        class="rounded-t"
        style="background-color: rgb(204,216,245);"
      />
          <h4>Add New Course</h4>
          <div style="display: box; margin-left: 5px;">
            <span>in Laboratory Management</span><br>
            <span>by supersaya</span>
          </div>
        </v-card>
        <v-card
          class="mt-2"
          style="cursor: pointer; text-align: center; height:300px"
          @click="handleClick"
        >
        <v-img
        :src="gbrWong.LinkGbr"
        :aspect-ratio="1.41"
        contain
        class="rounded-t"
        style="background-color: rgb(204,216,245);"
      />
          <h4>Add New Course</h4>
          <div style="display: box; margin-left: 5px;">
            <span>in Laboratory Management</span><br>
            <span>by supersaya</span>
          </div>
        </v-card>
        <v-card
          class="mt-2"
          style="cursor: pointer; text-align: center; height:300px"
          @click="handleClick"
        >
        <v-img
        :src="gbrWong.LinkGbr"
        :aspect-ratio="1.41"
        contain
        class="rounded-t"
        style="background-color: rgb(204,216,245);"
      />
          <h4>Add New Course</h4>
          <div style="display: box; margin-left: 5px;">
            <span>in Laboratory Management</span><br>
            <span>by supersaya</span>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="3">
        <v-card
          class="mt-2"
          style="cursor: pointer; text-align: center; height:300px"
          @click="handleClick"
        >
        <v-img
        :src="gbrWong.LinkGbr"
        :aspect-ratio="1.41"
        contain
        class="rounded-t"
        style="background-color: rgb(204,216,245);"
      />
          <h4>Add New Course</h4>
          <div style="display: box; margin-left: 5px;">
            <span>in Laboratory Management</span><br>
            <span>by supersaya</span>
          </div>
        </v-card>
        <v-card
          class="mt-2"
          style="cursor: pointer; text-align: center; height:300px"
          @click="handleClick"
        >
        <v-img
        :src="gbrWong.LinkGbr"
        :aspect-ratio="1.41"
        contain
        class="rounded-t"
        style="background-color: rgb(204,216,245);"
      />
          <h4>Add New Course</h4>
          <div style="display: box; margin-left: 5px;">
            <span>in Laboratory Management</span><br>
            <span>by supersaya</span>
          </div>
        </v-card>
        <v-card
          class="mt-2"
          style="cursor: pointer; text-align: center; height:300px"
          @click="handleClick"
        >
        <v-img
        :src="gbrWong.LinkGbr"
        :aspect-ratio="1.41"
        contain
        class="rounded-t"
        style="background-color: rgb(204,216,245);"
      />
          <h4>Add New Course</h4>
          <div style="display: box; margin-left: 5px;">
            <span>in Laboratory Management</span><br>
            <span>by supersaya</span>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      MenuSort: ['Ascending', 'Descending'],
      MenuCourse: ['Semua Course', 'Mandatory', 'Completed', 'Enrolled'],
      Select: null,
      gbrWong: {
        name: 'TAMBAH KURSUS BARU',
        LinkGbr:
          'https://lms-dev-api.pupuk-indonesia.com/default/course_cover.png',
        category: 'Manajemen Laboratorium',
        author: 'supersaya',
        chapters: 1,
        rating: 5
      }
    }
  },
  head () {
    return {
      title: 'coursecont'
    }
  }
}
</script>
