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
                            <img :src="selectedBook.coverUri" :alt="selectedBook.title" />
                            <h3 class="mt-0">{{selectedBook.title}}</h3>
                            <h4 class="mt-0">{{selectedBook.author}}</h4>
                            <h4 class="mt-0">{{selectedBook.year}}</h4>
                            <div class="description">{{selectedBook.resume}}</div>
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
        selectedBook: {}
    }),
    methods:{
      async fetchOneBook(bookId){
        let oneBook = await axios.get(`${BOOKS_API_ENDPOINT}${bookId}`);
        let { data } = oneBook;
        this.selectedBook = data;
        console.log(this.selectedBook)
      },
    },
    async created(){
      let { bookId } = this.$route.params;
      this.fetchOneBook(bookId);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
