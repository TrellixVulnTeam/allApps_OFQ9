<template>
  <div id="app">
    <router-link id="style" class="mb-5" to="/">Home</router-link>
    <router-view/>
  </div>
</template>

<script>
import page1 from './views/nestedRouter/page1'
export default {
  component:{
    page1
  },
  
}
</script>

<style lang="scss" scope>
  #style{
    padding: 7px;
    margin: 5px;
    color: #000;
    background: #887654;
    border-radius: 5px;
    box-shadow: 1px 1px 4px #b6b6b6ee,-1px 2px 4px #b6b6b6ee;
    font-weight: 500;
    box-sizing: border-box;
      &:hover{
        background: #f9d342;
        text-decoration: none;
      }
  }

</style>
