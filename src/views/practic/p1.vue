<template>
  <div>
    <p2 :val="text"/>
  </div>
</template>

<script>
import p2 from './p2'
import { Bus } from "../../main";

export default {
  data() {
    return {
      text: ""
    }
  },
  components: {
    p2
  },
  methods: {
  
  },
  created() {
    Bus.$on('pass', (data) => {this.val = data})
  },
}
</script>