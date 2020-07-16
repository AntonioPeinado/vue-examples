<template>
  <form class="login" @submit.prevent.stop="onSubmit">
    <div class="login__field">
      <label :class="{'login__label--invalid': errors.email}" :for="emailId">Email:</label>
      <input
        :class="{'login__input--invalid': errors.email}" 
        :id="emailId"
        name="email"
        @blur="validateEmail"
        v-model="model.email"
        type="text"
      />
      <p class="login__error" role="alert" v-if="errors.email">{{errors.email}}</p>
    </div>
    <div class="login__field">
      <label :class="{'login__label--invalid': errors.password}" :for="passwordId">Password:</label>
      <input
        :class="{'login__input--invalid': errors.password}" 
        class="login__input"
        :id="passwordId"
        name="password"
        @blur="validatePassword"
        v-model="model.password"
        type="text"
      />
      <p role="alert" class="login__error" v-if="errors.password">{{errors.password}}</p>
    </div>
    <button class="login__button">Submit</button>
  </form>
</template>
<script>
import { v4 } from "uuid";
import { isEmail, required, validate, minLength } from "./validators";
export default {
  name: "Login",
  data() {
    return {
      emailId: v4(),
      passwordId: v4(),
      model: {
        email: "",
        password: ""
      },
      errors: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      this.validateForm();
      if (this.isFormValid()) {
        console.log({ email: this.model.email, password: this.model.password });
        this.reset();
      }
    },
    validateForm() {
      this.validateEmail();
      this.validatePassword();
    },
    isFormValid() {
      return Object.values(this.errors).every(err => !err);
    },
    validateEmail() {
      this.errors.email = validate(this.model.email, required(), isEmail());
    },
    validatePassword() {
      this.errors.password = validate(
        this.model.password,
        required(),
        minLength(6)
      );
    },
    reset() {
      Object.keys(this.model).forEach(key => {
        this.model[key] = "";
      });
      Object.keys(this.errors).forEach(key => {
        this.errors[key] = "";
      });
    }
  }
};
</script>
<style scoped>
.login {
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.login__field {
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-bottom: 1rem;
}
.login__error {
  color: red;
  font-weight: bold;
}
.login__button {
    color: blueviolet;
}
.login__label--invalid {
    color: red;
}
.login__input--invalid {
    border-color: red;
}
</style>