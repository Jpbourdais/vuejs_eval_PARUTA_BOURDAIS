<template>
  <div id="app">
    <div class="page-wrapper">
        <BookNav />
        <div class="page-content--bgf7">
            <BookHeader />
            <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
import BookNav from './components/BookNav.vue'
import BookHeader from './components/BookHeader.vue'

export default {
  name: 'App',
  components: {
      BookNav,
      BookHeader
  }
}
</script>

<style>
</style>