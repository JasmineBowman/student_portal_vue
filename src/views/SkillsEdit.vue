<template>
  <div class="container">
    <h1>Edit Skills</h1>
    <form v-on:submit.prevent="updateSkills(skill)">
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      Skill Name:
      <input type="text" v-model="skill.skill_name" />
      Student Id:
      <input type="text" v-model="skill.student_id" />

      <input type="submit" value="Update" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      skill: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/skills/" + this.$route.params.id).then(response => {
      this.skill = response.data;
    });
  },
  methods: {
    updateSkill: function(skill) {
      var params = {
        id: skill.id,
        skill: skill.skill_name,
        student_id: skill.student_id
      };
      axios
        .patch("/api/skills/" + skill.id, params)
        .then(response => {
          this.$router.push(`/skills/${this.$route.params.id}`);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>