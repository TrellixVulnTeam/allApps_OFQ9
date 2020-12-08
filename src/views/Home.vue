<template>
  <b-container>
    <b-row class="row-custom my-4">
      <router-link tag="b-col" to="/busEvent">Bus Event</router-link>
    
      <router-link tag="b-col" to="/inputBinding">Input Bindig</router-link>
    
      <router-link  tag="b-col" to="/setget">Set get Binding</router-link>
    
      <router-link tag="b-col" to="/filter">Filter</router-link>    
    </b-row>

    <b-row class="row-custom mb-4">
      <router-link tag="b-col" to="/modal">Modal</router-link>
    
      <router-link tag="b-col" to="/sidbar">Sidebar</router-link>
    
      <router-link tag="b-col" to="/pag1">Store</router-link>
    
      <router-link tag="b-col" to="/user">Place Holder</router-link>    
    </b-row>

    <b-row class="row-custom mb-4">
      <router-link tag="b-col" to="/login">Login</router-link>
    
      <router-link tag="b-col" to="/page1">Nested routing</router-link>

      <router-link tag="b-col" to="/p1">pra</router-link>
    </b-row>
  </b-container>
</template>

<style lang="scss"  scoped>
@import '@/assets/home';
</style>
