<template>
  <div>
		<header class="mb-4 d-flex justify-content-center">
      <router-link :to="{ path : '/page1/page2' }" tag="b-button" class="mx-2">page 2</router-link>
			<b-button variant="danger" @click="$router.back()">back</b-button>
		</header>
		<hr>
		<h3 class="ml-4"> page 1 </h3>
	</div>
</template>

<script>
export default {
  name: 'page1',
}
</script>
