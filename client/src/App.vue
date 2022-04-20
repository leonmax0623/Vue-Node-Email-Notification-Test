<template>
  <div id="app">
    <div class="wrapper d-flex flex-column align-center justify-center">
      <div class="container mb-3">
        <div class="row">
          <div class="col col-3">Email Notifications</div>
          <div class="col col-9 d-flex flex-column">
            <div v-for="item in settings" :key="item.id">
              <label for="name" disabled>
                <input
                  class="mx-2"
                  type="checkbox"
                  v-model="item.isChecked"
                  :disabled="item.isDisabled"
                />
                <span>{{ item.label }}</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn-primary mx-auto" @click="showData">
        Save Changes
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      settings: [],
    };
  },
  methods: {
    showData() {
      console.log(this.settings);
    },
  },
  mounted() {
    axios.get("/settings").then((res) => {
      this.settings = res.data.settings;
    });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  max-width: 600px;
}
input {
  cursor: pointer;
}

input:disabled + span {
  color: #ccc;
}
</style>
