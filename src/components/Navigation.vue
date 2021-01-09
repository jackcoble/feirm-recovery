<template>
  <nav
    class="navbar is-spaced is-dark"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <a href="/" class="branding"></a>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Navigation"
})
</script>

<style scoped>
.branding {
    background: url("../assets/img/navbar-logo.png") no-repeat center center;
    background-size: cover;
    width: 152px
}
</style>