<template>
  <div class="row">
    <div class="col">
      <router-link class="btn btn-success" to="/admin/book/new">Ajouter un nouveau livre</router-link>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Couverture</th>
            <th scope="col">Titre</th>
            <th scope="col">Autheur</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book) in allBooks" :key='book.id'>
            <th>{{book.id}}</th>
            <td><img :src="book.coverUri" :alt="book.title" /></td>
            <td>{{book.title}}</td>
            <td>{{book.author}}</td>
            <td>
              <button class="btn btn-warning" @click="goToBookEdit(book.id)">Modifier</button>
              <button class="btn btn-danger" @click="deleteBook(book.id)">Supprimer</button>
            </td>
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
  name: 'BookAdminBooks',
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
    goToBookEdit(bookId){
      this.$router.push({ name:'adminBookEdit', params:{bookId} })
    },
    async deleteBook(bookId){
      let tryToDeleteBook = await axios.delete(`${BOOKS_API_ENDPOINT}${bookId}`);
      if (tryToDeleteBook.status == 200) {
        await this.fetchAllBooks();
      }
    }
  },
  async created(){
    await this.fetchAllBooks();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
