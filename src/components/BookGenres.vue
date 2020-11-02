<template>
  <div class="row">
    <div class="col">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Label</th>
            <th scope="col">icon</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(genre) in allGenres" :key='genre.id'>
            <td>{{genre.id}}</td>
            <td>{{genre.label}}</td>
            <td>{{genre.icon}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const GENRES_API_ENDPOINT = 'http://localhost:3000/genres/';

export default {
  name: 'BookGenres',
  props: {
  },
  data:()=>({
      allGenres: [],
  }),
  methods:{
    async fetchAllGenres(){
      let allGenres = await axios.get(GENRES_API_ENDPOINT);
      let { data } = allGenres;
      this.allGenres = data;
    },
    goToBooksDetails(bookId){
      this.$router.push({ name:'bookDetails', params:{bookId} })

    },
  },
  async created(){
    await this.fetchAllGenres();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
