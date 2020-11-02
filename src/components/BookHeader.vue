<template>
  <section class="welcome p-t-10">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="title-4">{{checkCurrentRoute}}</h1>
                <hr class="line-seprate">
            </div>
        </div>
    </div>
  </section>
</template>

<script>
const subTitle = {
    'racine': 'Mes livres',
    'home': 'Mes livres',
    'books': 'Mes livres',
    'bookDetails': '',
    'genres': 'Les genres',
    'admin': 'Admin',
    'adminBooks': 'Admin / Livres',
    'adminBookEdit': 'Admin / Livres / Edition',
    'adminGenreEdit': 'Admin / Genres / Edition',
  }

  export default {
    name: 'BookHeader',
    props: {
    },
    data:()=>({
    }),
    computed: {
      checkCurrentRoute(){
        const { name } = this.$route
        return subTitle[name]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
