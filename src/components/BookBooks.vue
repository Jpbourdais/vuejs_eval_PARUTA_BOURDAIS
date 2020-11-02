<template>
  <div class="row">
    <div class="col">
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">Couverture</th>
            <th scope="col">Titre</th>
            <th scope="col">Autheur</th>
            <th scope="col">Année</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book) in allBooks" :key='book.id'>
            <td><img :src="book.coverUri" :alt="book.title" /></td>
            <td>{{book.title}}</td>
            <td>{{book.author}}</td>
            <td>{{book.year}}</td>
            <td><button @click="goToBooksDetails(book.id)" type="button" class="btn btn-secondary btn-sm">voir</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const BOOKS_API_ENDPOINT = 'http://localhost:3000/books/';

export default {
  name: 'BookBooks',
  props: {
  },
  data:()=>({
      allBooks: [],
  }),
  methods:{
    async fetchAllBooks(){
      let allBooks = await axios.get(BOOKS_API_ENDPOINT);
      let { data } = allBooks;
      this.allBooks = data;
    },
    goToBooksDetails(bookId){
      this.$router.push({ name:'bookDetails', params:{bookId} })

    },
  },
  async created(){
    await this.fetchAllBooks();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
