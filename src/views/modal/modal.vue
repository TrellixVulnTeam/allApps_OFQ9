<template>
  <b-container>
    <b-button variant="success" @click="show()" class="my-4">Show modal</b-button>
    
    <div :class="display" @click="close()" class="modal" >
      <div class="content" >
        <p>Some text in the Modal..</p>
        <b-button variant="danger">Close</b-button>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      display: 'd-none',
    }
  },
  methods: {
    show(){
      this.display = 'd-flex'
    },
    close(){
      this.display = 'd-none'
    }
  },
}
</script>
 
<style >
.modal { 
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0, 0, 0, 0.466); 
  justify-content: center;
  align-items: center;
}
.content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888888;
  border-radius: 8px;
  width: 70%;
}
</style>
