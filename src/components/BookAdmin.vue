<template>
  <div class="row justify-content-center">
    <div class="col-4">
      <h2>Books</h2>
      <router-link class="text-expanded headerlink" to="/admin/books/new">Ajouter</router-link><br />
      <router-link class="text-expanded headerlink" to="/admin/books">Editer & Supprimer</router-link>
    </div>
    <div class="col-4">
      <h2>Genres</h2>
      <router-link class="text-expanded headerlink" to="/admin/genres/new">Ajouter</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BookAdmin',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
