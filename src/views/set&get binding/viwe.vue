<template>
  <div class="container ">
    <h3>
      <b-icon variant="warning" animation="fade" scale="1" icon="exclamation-triangle-fill">
      </b-icon> 
      set & get 
    </h3>
    <hr />
    <b-form-input v-model="text"></b-form-input>
    <hr />
    <input-child v-model="text" @input="getValue" />
  </div>
</template>

<script>
import inputChild from "./input";

export default {
  components: {
    inputChild,
  },
  data() {
    return {
      text: null,
    };
  },
};
</script>