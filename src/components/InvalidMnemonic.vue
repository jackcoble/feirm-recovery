<template>
    <div class="notification is-danger has-text-centered">
        The mnemonic you provided is not valid! Please try again.
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "InvalidMnemonic"
})
</script>