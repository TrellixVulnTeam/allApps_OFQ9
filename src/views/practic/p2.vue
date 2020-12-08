<template>
  <div>
    <input type="text" v-model="val" @input="text">    
  </div>
</template>

<script>
import { Bus } from "../../main";

export default {
  props:['val'],
  methods: {
    text(value){
      this.val = value
      Bus.$emit('pass',this.val)
    }
    
  },
}
</script>