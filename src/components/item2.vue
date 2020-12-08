<template>
  <div>
    <h6 v-for="(item,index) in item" :key="index">
      {{item.name}}
    </h6>
  </div>
</template>

<script>
export default {
  props: ['items','id'],
  computed: {
    item(){
      return this.items.filter(f => f.parentId == this.id)
    }
  },
}
</script>