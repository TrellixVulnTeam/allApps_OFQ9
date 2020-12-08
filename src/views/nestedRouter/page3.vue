<template>
  <div>
    <header class="mb-4 d-flex justify-content-center">
      <b-button variant="danger" @click="$router.back()">back</b-button>
    </header>
    <hr>
    <h3 class="ml-4"> page 3 </h3>
  </div>
</template>

<script>
export default {
  name: 'page3',
}
</script>