<template>
  <b-container>
    <div class="my-4">
      <b-table
        :items="items"
        striped
        dark>
      </b-table>
      <b-button 
      variant="success" 
      @click="add()">
        Add
      </b-button>
    </div>
  </b-container>
</template>

<script>
export default {
  computed: {
    items(){
      return this.$store.getters.items
    }
  },
  methods: {
    add(){
      this.$router.push({path: '/Add', query:{name:`${id}`}})
      this.$store.state.form.name = null
      this.$store.state.form.age = null
      this.$store.state.form.city = null
    }
  },
}
</script>