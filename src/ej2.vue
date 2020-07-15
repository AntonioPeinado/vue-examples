<template>
  <form @submit.prevent.stop="onSubmit">
    <div>
      <label :for="emailId">Email:</label>
      <input :id="emailId" name="email" @blur="validateEmail" v-model="email" type="text" />
      <p role="alert" v-if="emailError">{{emailError}}</p>
    </div>
    <!-- <FormField name="email" id="email" label="Email:" v-model="email" type="text" validators="[isEmail]" >-->
    <button>Submit</button>
  </form>
</template>
<script>
import uuid from 'uuid';
const isEmail = (value, msg = 'Formato de email incorrecto') => {
    const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
    return isValidEmail ? '' : msg;
} 
export default {
    data() {
        return {
            emailId: uuid.v4(),
            email: '',
            password: '',
            emailError: '',
            passwordError: ''
        }
    },
    methods: {
        onSubmit(){
            this.validateForm();
            if(this.isFormValid()){
                console.log({email: this.email, password: this.password})
            }
        },
        validateForm(){
            this.validateEmail();
        },
        isFormValid(){
            return !this.emailError && !this.passwordError;
        },
        validateEmail(){
            this.emailError = isEmail(this.email, 'Ojo con el email');
        },
        validatePassword(){

        }
    }
}
</script>