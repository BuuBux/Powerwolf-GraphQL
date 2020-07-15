<template>
  <div class="wrapper">
    <header class="header">
      <div class="layout">
        <g-link class="c-header__title" to="/">{{ $static.metadata.siteName }}</g-link>
      </div>
    </header>
    <div class="layout">
      <slot/>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
  *{
    box-sizing: border-box;
  }
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  min-height: 100vh;
  background: url('../assets/slice1.jpg') 50% 20% / cover no-repeat;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.c-header__title {
  padding: 3rem;
  font-family: 'Rock Salt', cursive;
  color: #fff;
  font-size: 42px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 0;
  display: inline-block;
  text-decoration: none;
}

.c-header__title:hover {
  background: rgba(255, 255, 255, 0.5);
  transform: translateY(-4px);
}

.header {
  margin: 5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
