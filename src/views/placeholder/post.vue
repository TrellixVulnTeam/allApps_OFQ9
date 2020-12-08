<template>
  <div class="about container my-4">
    <b-col md='3' class="my-2">
      <b-btn variant="danger" @click="back()">back</b-btn>
    </b-col>
    <b-overlay :show="show">
      <b-table 
      striped 
      dark 
      responsive 
      :items="data" 
      :fields="filds">
      </b-table>
    </b-overlay>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      data : [],
      show: true,
      filds:[
        {key: 'userId'},
        {key: 'id'},
        {key: 'title'},
        {key: 'body'}
      ],
    }
  },
  async created() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    const data = await response.json(); 
    this.data = data
    if (this.data !== null) {
      this.show = false
    }
  },
   methods: {
    back() {
      this.$router.back()
    },
  },
}
</script>