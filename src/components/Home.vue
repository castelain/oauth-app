<template>
  <div class="bg">
    <button id="link">
      <a
        :href="'https://github.com/login/oauth/authorize?client_id='+clientId+'&redirect_uri='+redirectUri"
      >github 登录</a>
    </button>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      clientId: "905a043bc898cef8da39",
      redirectUri: "http://localhost:8888/oauth/redirect"
    };
  }
};
</script>

<style scoped>
#link {
  background: linear-gradient(90deg, #c9d6ff 0%, #e2e2e2 100%);
  width: 160px;
  height: 40px;
  border-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 2px 2px 6px whitesmoke;
}
#link a {
  text-decoration: none;
  color: white;
  font-size: 20px;
}
#link:hover {
  background: linear-gradient(90deg, #74ebd5 0%, #acb6e5 100%);
}
</style>