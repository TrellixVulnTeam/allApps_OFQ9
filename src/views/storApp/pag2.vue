<template>
  <div>
    <b-container class="d-flex justify-content-center align-items-center">
      <b-card class="my-5" bg-variant="secondary" text-variant="white" @keypress.enter="pushItem()">
        <b-form-group  label-cols="5" label="Enter Your Name">
            <b-form-input size="sm" class="my-2" v-model="form.name"></b-form-input>
        </b-form-group>

        <b-form-group label-cols="5" label="Enter Your Age">
            <b-form-input type="Number" size="sm" class="my-2" v-model="form.age"></b-form-input>
        </b-form-group>
        
        <b-form-group label-cols="5" label="Enter Your City">
            <b-form-input size="sm" class="my-2" v-model="form.city"></b-form-input>
        </b-form-group>  
           
        <b-button 
        variant="success" 
        class="my-2" 
        @click="pushItem()">
          Add
        </b-button>   

        <b-button 
        variant="danger" 
        class="mx-2" 
        @click="$router.back()">
          Cansel
        </b-button>   
      </b-card>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: this.$store.state.form
    }
  },
  methods: {
    pushItem(){
      this.$store.commit('pushItems')
      this.$router.push('/pag1')
    }
  },
}
</script>