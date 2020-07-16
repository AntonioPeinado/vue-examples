<template>
  <div>
    <label :class="{'field__label--invalid': error}" :for="id">{{label}}</label>
    <input
      :class="{'field__input--invalid': error}"
      :id="id"
      :name="name"
      @blur="validate"
      :type="type"
      :value="value"
      @input="onInput"
    />
    <p class="field__error" role="alert" v-if="error">{{error}}</p>
  </div>
</template>
<script>
import { v4 } from "uuid";
import { validate } from "./validators";
export default {
  name: "FormField",
  props: {
    validators: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      default: v4()
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "text"
    },
    value: {
      required: true
    }
  },
  data() {
    return {
      error: ""
    };
  },
  methods: {
    validate() {
      this.error = validate(this.value, ...this.validators);
    },
    reset() {
      this.$emit("input", '');
      this.error = "";
    },
    onInput(ev) {
      this.$emit("input", ev.target.value);
    }
  }
};
</script>
<style scoped>
.field__error {
  color: red;
  font-weight: bold;
}
.field__label--invalid {
  color: red;
}
.field__input--invalid {
  border-color: red;
}
</style>