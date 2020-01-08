<template>
  <div class="container">
    <h1>Edit Capstone</h1>
    <form v-on:submit.prevent="updateCapstone(capstone)">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      Name:
      <input type="text" v-model="capstone.name" />
      Description:
      <input type="text" v-model="capstone.description" />
      URL:
      <input type="text" v-model="capstone.url" />
      Screenshot:
      <input type="text" v-model="capstone.screenshot" />
      Student Id:
      <input type="text" v-model="capstone.student_id" />

      <input type="submit" value="Update" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      capstone: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/capstones/" + this.$route.params.id).then(response => {
      this.capstone = response.data;
    });
  },
  methods: {
    updateCapstone: function(capstone) {
      var params = {
        id: capstone.id,
        name: capstone.name,
        description: capstone.description,
        url: capstone.url,
        screenshot: capstone.screenshot,
        student_id: capstone.student_id
      };
      axios
        .patch("/api/capstones/" + capstone.id, params)
        .then(response => {
          this.$router.push("/capstones");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};