<template>
  <div class="container">
    <h3>
      <b-icon 
      variant="warning" 
      animation="fade" 
      scale="1" 
      icon="exclamation-triangle-fill">
      </b-icon>
      Bus event 
    </h3>
    <hr />
    <input-1 :val="text" />
    <hr />
    <input-2 :val="text" />
  </div>
</template>

<script>
import input1 from "./input-1";
import input2 from "./input-2";
export default {
  components: {
    input1,
    input2,
  },
  data() {
    return {
      text: null
    }
  }
};
</script>