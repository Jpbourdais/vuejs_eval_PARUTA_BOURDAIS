<template>
  <div class="row">
    <div class="col">
      <form class="align-left">
        <div class="form-group">
          <label for="label">Label</label><br />
          <input type="text" required v-model="label" class="form-control" id="label" placeholder="Label"><br />
          <label for="icon">Icon</label><br />
          <input type="text" v-model="icon" class="form-control" id="icon" placeholder="Icon"><br />
          <button class="btn btn-warning" @click="createGenre()">Créer</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

  const GENRES_API_ENDPOINT = 'http://localhost:3000/genres/';

export default {
  name: 'BookAdminGenreEdit',
  props: {

  },
  data:()=>({
    label: null,
    icon: null,
  }),
  methods:{
    async createGenre(){
      let body = {
        label: this.label,
        icon: this.icon
      }
      let tryToCreate = await axios.post(`${GENRES_API_ENDPOINT}`, body)
      console.log(tryToCreate);
      this.$router.push({ name:'admin'});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
