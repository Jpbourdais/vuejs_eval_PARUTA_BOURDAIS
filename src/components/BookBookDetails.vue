<template>
  <div class="row">
    <div class="col">
      <div >
          <section class="page-section">
            <div class="container">
              <div class="about-heading-content">
                <div class="row">
                  <div class="col-xl-9 col-lg-10 mx-auto">
                    <div class="bg-faded rounded p-5">
                        <div class="media">
                          <div class="media-body text-left ml-3">
                            <img :src="book.coverUri" :alt="book.title" />
                            <h3 class="mt-0">{{selectedBook.title}}</h3>
                            <h3 class="mt-0">{{selectedBook.author}}</h3>
                            <h3 class="mt-0">{{selectedBook.year}}</h3>
                                {{selectedBook.resume}}
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  const BOOKS_API_ENDPOINT = 'http://localhost:3000/books/';

  export default {
    name: 'bookDetails',
    props: {
    },
    data:()=>({
        allBooks: [],
        selectedBook:{}
    }),
    methods:{
      async fetchAllBooks(){
        let allBooks = await axios.get(BOOKS_API_ENDPOINT);
        let { data } = allBooks;
        this.allBooks = data;
      },
    },
    async created(){
      let { bookId }    = this.$route.params;
      this.selectedBook = this.book.find(book => book.id==bookId);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
