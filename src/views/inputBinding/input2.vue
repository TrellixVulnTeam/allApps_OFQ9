
<template>
  <div>
    <b-form-input :value="Text" @input="passValue" />
  </div>
</template>

<script>
export default {
  props: ["Text"],
  methods: {
    passValue(value) {
      return this.$emit("pass",value);
    }
  }
};
</script>