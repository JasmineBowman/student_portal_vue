<template>
  <div class="container">
    <h1>Edit Education</h1>
    <form v-on:submit.prevent="updateEducation(education)">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      Start Date:
      <input type="text" v-model="education.start_date" />
      End Date:
      <input type="text" v-model="education.end_date" />
      Degree:
      <input type="text" v-model="education.degree" />
      University:
      <input type="text" v-model="education.university" />
      Details:
      <input type="text" v-model="education.details" />
      Student Id:
       <input type="text" v-model="education.id" />

      <input type="submit" value="Update" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      experience: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/experiences/" + this.$route.params.id).then(response => {
      this.experience = response.data;
    });
  },
  methods: {
    updateExperience: function(experience) {
      var params = {
        start_date: experience.start_date,
        end_date: experience.end_date,
        job_title: experience.job_title,
        company: experience.company,
        details: experience.details,
      };
      axios
        .patch("/api/experiences/" + experience.id, params)
        .then(response => {
          this.$router.push("/experiences");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>