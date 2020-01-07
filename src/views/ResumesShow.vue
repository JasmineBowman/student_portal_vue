<template>
  <div class="container">
    <p>Name: {{ resume.first_name }} {{ resume.last_name }}</p>
    <p>Email: {{ resume.email }}</p>
    <p>Phone Number: {{ resume.phone_number }}</p>
    <p>Short Bio: {{ resume.short_bio }}</p>
    <p>LinkedIn URL: {{ resume.linkedin_url }}</p>
    <p>Online Resume URL: {{ resume.online_resume_url }}</p>
    <p>GitHub URL: {{ resume.github_url }}</p>
    <p>Website URL: {{ resume.website_url }}</p>
    <p>Photo URL: {{ resume.photo_url }}</p>
    <p>Twitter: {{ resume.twitter }}</p>

  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      resume: {
        first_name: "Brian",
        last_name: "Rice",
        email: "brian@brian.com",
        phone_number: "123-456-7890",
        short_bio: "He's some guy who teaches coding",
        linkedin_url: "https://www.linkedin.com/in/brian_rice",
        twitter: "http://twitter.com/handle/brian_rice",
        website_url: "https://www.brian_rice.com",
        online_resume_url: "https://www.brian_rice.com/resume",
        github_url: "https://www.github.com/brian_rice",
        photo_url: "This is an average-looking photo"
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