<template >
  <div>
    <h5 v-for="(item,index) in item" :key="index">
      {{item.name}}
      <span @click="showeItem()">
        <template v-if="chekIcon(item.id)" >
          <b-icon :icon="icon"></b-icon>
        </template>
      </span>
      <item2 :items="items" :id="item.id" class="mt-2 ml-3" v-if="showe"/>
    </h5>
  </div>
</template>

<script>
import item2 from './item2'
export default {
  props:['items','id'],
  computed: {
    item(){
      return this.items.filter(f => f.parentId == this.id)
    }
  },
  data() {
    return {
      icon: 'chevron-down',
      showe: false,
    }
  },
  components:{
    item2
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
