<template>
  <div>
    <b-form-input v-model="text" />
  </div>
</template>

<script>
export default {
  props: {
    value: { type: String },
  },
  computed: {
    text: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
};
</script>