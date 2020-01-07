<template>
  <div class="container">
    <h1>Edit Student</h1>
    <form v-on:submit.prevent="updateStudent(student)">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      First Name:
      <input type="text" v-model="student.first_name" />
      Last Name:
      <input type="text" v-model="student.last_name" />
      Email:
          <input type="text" v-model="student.email" />
      Phone:
          <input type="text" v-model="student.phone" />
      Bio:
      <input type="text" v-model="student.bio" />
      LinkedIn:
      <input type="text" v-model="student.linkedin" />
      Twitter:
      <input type="text" v-model="student.twitter" />
      Website:
        <input type="text" v-model="student.website" />
      Resume:
      <input type="text" v-model="student.resume" />
      GitHub:
      <input type="text" v-model="student.github" />
      Photo:
      <input type="text" v-model="student.photo" />

      <input type="submit" value="Update" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      student: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/students/" + this.$route.params.id).then(response => {
      this.student = response.data;
    });
  },
  methods: {
    updateStudent: function(student) {
      var params = {
        id: student.id, 
        first_name: student.first_name,
        last_name: student.last_name,
        email: student.email,
        phone: student.phone,
        bio: student.bio,
        linkedin: student.linkedin,
        twitter: student.twitter,
        website: student.website,
        resume: student.resume,
        github: student.github,
        photo: student.photo
      };
      axios
        .patch("/api/students/" + student.id, params)
        .then(response => {
          this.$router.push("/students");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>