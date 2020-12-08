<template>
  <div class="custom">
    <b-card class="card">
      <b-form-input size="sm" placeholder="User Name" v-model="email">
      </b-form-input>
     
      <b-form-input size="sm" class="my-4" placeholder="Password" v-model="password">
      </b-form-input>
      <b-button size='sm' class="btn-custom" @click="Post()">LOGIN</b-button>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      email:'',
      password: '',
    }
  },
  methods: {
   Post() {
    if (this.email == 'test' && this.password == 123 ) {
      axios.post('https://reqres.in/api/login', {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      })
      .then(response => {
        this.$cookie.set('token', response.data.token,{ expires: '10s' })
        this.$store.state.token = response.data.token
        this.$router.push('/loginaccept')
      })
      .catch(error => {
        console.log('log',error)
      })
    }
  }
 }
}
</script>

<style lang="scss" scoped>
$text-color: #fffeea;
$black : #292826;
$yellow : #f9d342; 
$ligth-yellow: #ffea96;
$light-black : #464440;

%shadow{
  box-shadow: 2px 2px 5px $light-black,-2px -2px 5px $light-black;
}
%btn{
  color: $text-color ;
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-weight: 600;
  background: $yellow;
  border: none;
  transition: 1s;
}
%card{
  background-color: $black;
  padding: 0.8rem;
  width: 400px;
  text-align: center; 
}
  body{
    .custom{
      height: 80vh;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 2;
    }
    .btn-custom{
      @extend %btn;
      &:hover{
        @extend %shadow;
        background: $ligth-yellow;
        color: #a19c7c;
      }
      &:active{
        @extend %shadow;
        background: $ligth-yellow;
      }
    };
    .card{
      @extend %shadow;
      @extend %card;
    }
    input{
      background: transparent;
      border: none;
      border-bottom : 3px solid $yellow;
      letter-spacing: 2px;
      color: $text-color;
      &:focus{
        outline: none;
        color: $text-color;
        background: transparent;
        border-bottom : 2px solid $yellow;
      }
    }
  }
</style>
