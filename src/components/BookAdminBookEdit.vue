<template>
  <div class="row">
    <div class="col">
      <form class="align-left">
        <div class="form-group">
          <label for="title">Titre</label><br />
          <input type="text" v-model="selectedBook.title" class="form-control" id="title" placeholder="Titre"><br />
          <label for="author">Auteur</label><br />
          <input type="text" v-model="selectedBook.author" class="form-control" id="author" placeholder="Autheur"><br />
          <label for="resume">Résumé</label><br />
          <textarea v-model="selectedBook.resume" id="resume" placeholder="Résumé"></textarea><br />
          <label for="coverUri">URL de la couverture</label><br />
          <input type="text" v-model="selectedBook.coverUri" class="form-control" id="coverUri" placeholder="URL de la couverture"><br />
          <label for="year">Année</label><br />
          <input type="number" v-model="selectedBook.year" class="form-control" id="year" placeholder="Année"><br />
          <label for="ebooks">Ebook ?</label><br />
          <input type="checkbox" v-model="selectedBook.ebooks" class="form-control" id="ebooks"><br />
          <label for="genre">Genre</label><br />
          <select v-model="selectedGenre">
            <option :value="genre.id" v-for="(genre, idx) in allGenres" :key="idx">{{genre.label}}</option>
          </select>
        </div>
        <button class="btn btn-warning" @click="handleButton()">{{this.onEditMode ? 'Mettre à jour' : 'Créer'}}</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

  const BOOK_API_ENDPOINT = 'http://localhost:3000/books/';
  const GENRES_API_ENDPOINT = 'http://localhost:3000/genres/';

export default {
  name: 'BookAdminBookEdit',
  props: {

  },
  data:()=>({
    selectedBook: {},
    allGenres: [],
    selectedGenre: null,
    onEditMode: false,
  }),
  methods:{
    async fetchAllgenres(){
      let allGenres = await axios.get(`${GENRES_API_ENDPOINT}`);
      let { data } = allGenres;
      this.allGenres = data;
    },
    async fetchOneBook(bookId){
      let oneBook = await axios.get(`${BOOK_API_ENDPOINT}${bookId}`);
      let { data } = oneBook;
      this.selectedGenre = data.genre.id;
      this.selectedBook = data;
    },
    async handleButton(){
      if (this.onEditMode) {
        let tryToUpdate = await this.updateBook();
        console.log(tryToUpdate);
      } else {
        let tryToCreate = await this.createBook();
        console.log(tryToCreate);
      }
      this.$router.push({ name:'adminBooks'})
    },
    async updateBook(){
      let body = {
        title: this.selectedBook.title,
        author: this.selectedBook.author,
        resume: this.selectedBook.resume,
        coverUri: this.selectedBook.coverUri,
        year: this.selectedBook.year,
        ebooks: this.selectedBook.ebooks,
        genre: {
          id: this.selectedGenre,
        }
      }
      let tryToUpdate = await axios.patch(`${BOOK_API_ENDPOINT}${this.selectedBook.id}`, body)
      return tryToUpdate;
    },
    async createBook(){
      let body = {
        title: this.selectedBook.title,
        author: this.selectedBook.author,
        resume: this.selectedBook.resume,
        coverUri: this.selectedBook.coverUri,
        year: this.selectedBook.year,
        ebooks: this.selectedBook.ebooks,
        genre: {
          id: this.selectedGenre,
        }
      }
      let tryToCreate = await axios.post(`${BOOK_API_ENDPOINT}`, body)
      return tryToCreate;
    }
  },
  async created(){
    let { bookId = false } = this.$route.params;
    if (bookId != 'new') {
      await this.fetchOneBook(bookId);
      this.onEditMode = true;
    } else {
      this.onEditMode = false;
    }
    await this.fetchAllgenres(bookId);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
