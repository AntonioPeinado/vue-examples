<template>
  <form @submit.prevent.stop="onSubmit">
    <div>
      <label for="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        :value="email"
        @input="setEmail($event.target.value)"
      />
      <p v-if="!emailValid">Invalid email</p>
    </div>
    <div>
      <label for="password">Password:</label>
      <input
        type="text"
        id="password"
        name="password"
        :value="password"
        @input="setPassword($event.target.value)"
      />
      <p v-if="!passwordValid">Invalid password</p>
    </div>
    <button>Submit</button>
  </form>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { CREATE_USER } from "./actions";
import axios from "axios";
export default {
  name: "Login",
  computed: {
    ...mapState("login", ["email", "password"]),
    ...mapGetters("login", ["emailValid", "passwordValid", "formValid"])
  },
  methods: {
    ...mapActions("login", ["setEmail", "setPassword", "createUser"]),
    onSubmit() {
      if (!this.formValid) {
        return;
      }
      this.createUser({
        http: axios,
        model: {
          password: this.password,
          email: this.email
        }
      });
      //   axios
      //     .post("http://localhost:3000/users", {
      //       password: this.password,
      //       email: this.email
      //     })
      //     .then(response => {
      //       console.log(response);
      //     })
      //     .catch(err => {
      //       console.error(err);
      //     });
    }
  }
};
</script>