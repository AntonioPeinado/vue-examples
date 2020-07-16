<template>
  <form class="login" @submit.prevent.stop="onSubmit">
    <FormField
      ref="fields.email"
      class="login__field"
      v-model="model.email"
      :validators="validators.email"
      :label="'Email:'"
      :name="'email'"
    />
    <FormField
      ref="fields.password"
      class="login__field"
      v-model="model.password"
      :validators="validators.password"
      :label="'Password:'"
      :name="'password'"
    />
    <button class="login__button">Submit</button>
  </form>
</template>
<script>
import { isEmail, required, minLength } from "./validators";
import FormField from "./FormField";
export default {
  name: "Login",
  components: {
    FormField
  },
  data() {
    return {
      model: {
        email: "",
        password: ""
      },
      validators: {
        email: [required(), isEmail()],
        password: [required(), minLength(6)]
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
        ['email','password'].forEach((field) => {
            this.$refs[field].validate();
        })
    },
    isFormValid() {
        return !this.$refs.email.error && !this.$refs.password.error;
    },
    reset() {
        this.$refs.email.reset();
        this.$refs.password.reset();
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
.login__button {
  color: blueviolet;
}
</style>