<template>
  <div class="container">
    <div class="well">
      <h3><b-icon variant="warning" animation="fade" scale="1" icon="exclamation-triangle-fill"></b-icon> binding Input </h3>
      <hr />
      <b-form-input v-model="text" />
      <hr />
      <input-2 :Text="text" @pass="setValue" />
    </div>
  </div>
</template>

<script>
import input2 from "./input2";
export default {
  components: {
    input2,
  },
  data() {
    return {
      text: null,
    };
  },
  methods: {
    setValue(val) {
      this.text = val;
    }
  }
};
</script>