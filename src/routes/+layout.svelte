<script lang="ts">
  import "../app.css";
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <meta name="theme-color" content="#dc4e0c" />
  <meta name="msapplication-navbutton-color" content="#dc4e0c" />
  <meta name="apple-mobile-web-app-status-bar-style" content="#dc4e0c" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow" />
  <meta name="googlebot" content="index, follow" />
</svelte:head>

{@render children?.()}
