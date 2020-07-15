<template>
  <Layout>
    <nav class="c-album__wrapper">
      <g-link
              :key="index"
              v-for="(album, index) in $page.graphCMS.albums"
              class="c-album__item"
              :to="`/album/${album.id}`">
        <h3 class="c-album__title"> {{album.title}} </h3>
      </g-link>
    </nav>
  </Layout>
</template>

<page-query>
  query {
    graphCMS {
      albums {
        id
        title
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Main page'
  }
}
</script>

<style scoped>
  .c-album__wrapper {
    margin: 5rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .c-album__item {
    background: teal;
    color: white;
    text-decoration: none;
    flex: 0 0 45%;
    max-width: 45%;
    width: 100%;
    text-align: center;
    margin-top: 1rem;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  }
  .c-album__item:hover {
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    transform: translateY(-4px);
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.25);
  }
</style>
