<template>
  <div>
    <b-form-input v-model="val" @input="text" />
  </div>
</template>

<script>
import { Bus } from "../../main";

export default {
  props: ["val"],

  methods: {
    text(value) {
      this.val = value;
      Bus.$emit("test", this.val);
    },
  },
  created() {
    Bus.$on("test", (data) => {
      this.val = data;
    });
  },
};
</script>