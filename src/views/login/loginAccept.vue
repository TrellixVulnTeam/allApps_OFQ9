<template>
  <div class="about">
    <b-card class="cards">
      <h1 class="mb-4">You Are Log In</h1>
      <p class="py-2">Your token : {{ token }}</p>
    </b-card>
  </div>
</template>

<script>
export default {
  mounted() {
    if (!this.$store.state.token) {
      this.$router.push('/login')
    }
  },
  computed: {
    token(){
      return this.$store.getters.token
    }
  },
}
</script>

<style lang="scss" scoped>
$text-color: #ffffff;
$black : #292826;
$light-black : #413a31;
$yellow : #f9d342; 
$ligth-yellow: #ffea96;

%h1{
 padding: 20px;
 background: $black;
 color: $yellow;
 font-weight: bold;
 border-radius: 10px;
}
%para{
  color: $ligth-yellow;
  font-weight: 700;
  display: inline;
  padding: 10px;
  box-sizing: border-box;
}
%shadow{
  box-shadow: 2px 2px 5px $light-black,-1px -1px 5px $light-black;
}
%cards{
  background-color: $light-black;
  padding: 0.8rem;
  width: 400px;
  text-align: center;
}

  body{
    .about{
    height: 80vh;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    }
    h1{
      @extend %h1;
      @extend %shadow
    };
    p{
      @extend %para
    };
    .cards{
      @extend %cards;
      @extend %shadow
    }
  }

</style>
