<template>
  <div class="bg">
    <h3>UserInformation:</h3>
    <p>username: {{username}}</p>
    <p>email: {{email}}</p>
    <p>location: {{location}}</p>
  </div>
</template>

<script>
export default {
  name: "UserInformation",
  data() {
    return {
      username: "",
      email: "",
      location: ""
    };
  },
  created() {
    this.username = this.$route.params.username;
    this.email = this.$route.params.email;
    this.location = this.$route.params.location;
		// console.log(this.$route);
  }
};
</script>

<style scoped>
.bg {
	text-align: center;
	position: absolute;
}
</style>