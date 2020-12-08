<template>
  <div class="container">
    <b-button v-b-toggle.sidebar class="my-3">Toggle Sidebar</b-button>
    <b-sidebar 
    shadow 
    backdrop 
    id="sidebar" 
    title="Menu" 
    bg-variant="dark" 
    text-variant="light"
    backdrop-variant='dark'>
      <div class="px-3 py-2">
        <h4 v-for="(item,index) in item" :key="index">
          <div v-if="!item.parentId" >
            {{item.name}}
            <span @click="showeItem()">
              <template v-if="chekIcon(item.id)" >
                <b-icon :icon="icon"/>
              </template>
            </span>
            <item :items="items" :id="item.id" class="mt-2 ml-3" v-if="showe"/>
          </div>
        </h4>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import Item from '@/components/Item'
export default {
  computed: {
    item(){
      return this.items.filter(f => !f.parentId)
    }
  },
  data() {
    return {
      icon: 'chevron-down',
      showe: false,
      items:[
      { 
        name: 'text 1',
        id: 1,
        parentId : null,
      },
      {
        name: 'text 2',
        id: 2,
        parentId : null,
      },
      {     
        name: 'text 3',
        id: 3,
        parentId: 2,
      },
      {
        name: 'text 4',
        id: 4,
        parentId: 2,
      },
      { 
        name: 'text 5',
        id: 5,
        parentId: 4, 
      }
    ]
  }
},
  components:{
    Item,
  },
  methods: {
    chekIcon(id){
      const showe = this.items.filter(f => id == f.parentId)
      return showe.length
    },
    showeItem(){
      if(this.icon == 'chevron-down'){
       this.showe = true
       this.icon = 'chevron-up'
      }
      else {
       this.showe = false
       this.icon = 'chevron-down' 
      }
    }
  },
 
}
</script>
