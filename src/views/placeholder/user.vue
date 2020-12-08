<template>
  <div class="container my-4">
    <b-overlay :show="show" >
      <b-table 
      striped 
      dark 
      responsive 
      :items="data" 
      :fields="filds">
        <template #cell(show)="data">
          <b-btn variant="outline-primary" @click="showPost(data.item.id)" >
            show post 
          </b-btn>
        </template>
      </b-table>
    </b-overlay>
  </div>
</template>

<script>
export default {
data() {
  return {
    data : null,
    show:true,
    filds:[
      {key : 'name' ,label :'user' },
      {key : 'show'},
    ]
  }
},
async created() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  this.data = data
  this.show = !response.ok
  },
  methods: {
    showPost(id){
      this.id = id
      this.$router.push({path: '/post', query:{p: `${id}`}})
    },
  },
}
</script>

