<template>
  <div class="container">
    <p>Name: {{ student.first_name }} {{ student.last_name }}</p>
    <p>Email: {{ student.email }}</p>
    <p>Phone: {{ student.phone }}</p>
    <p>Bio: {{ student.bio }}</p>
    <p>LinkedIn: {{ student.linkedin }}</p>
    <p>Twitter: {{ student.twitter }}</p>
    <p>Website: {{ student.website }}</p>
    <p>Resume: {{ student.resume }}</p>
    <p>GitHub: {{ student.github }}</p>
    <p>Photo: {{ student.photo }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      student: {
        first_name: "Brian",
        last_name: "Rice",
        email: "brian@brian.com",
        phone: "123-456-7890",
        bio: "He's some guy who teaches coding",
        linkedin: "https://www.linkedin.com/in/brian_rice",
        twitter: "http://twitter.com/handle/brian_rice",
        website: "https://www.brian_rice.com",
        resume: "https://www.brian_rice.com/resume",
        github: "https://www.github.com/brian_rice",
        photo: "This is an average-looking photo"
      }, 
    };
  },
  created: function() {
    // axios.get("/api/resumes/" + this.$route.params.id).then(response => {
    //   this.resume = response.data;
    // });
  },
  methods: {}
};
</script>