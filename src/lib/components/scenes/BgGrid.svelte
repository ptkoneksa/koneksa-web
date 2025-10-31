<script lang="ts">
  let { children, isBottomMask = false, isTopMask = false } = $props();
</script>

<div
  class="scene__container {isBottomMask ? 'mask-b-from-25%' : ''} {isTopMask
    ? 'mask-t-from-25%'
    : ''}"
>
  {@render children?.()}
</div>

<!-- Convert style using @apply tailwindcss -->
<style>
  .scene__container {
    width: 100%;
    height: 100%;
    background-color: var(--color-white);
    background-image: linear-gradient(
        0deg,
        transparent 24%,
        var(--color-accent) 25%,
        var(--color-accent) 26%,
        transparent 27%,
        transparent 74%,
        var(--color-accent) 75%,
        var(--color-accent) 76%,
        transparent 77%,
        transparent
      ),
      linear-gradient(
        90deg,
        transparent 24%,
        var(--color-accent) 25%,
        var(--color-accent) 26%,
        transparent 27%,
        transparent 74%,
        var(--color-accent) 75%,
        var(--color-accent) 76%,
        transparent 77%,
        transparent
      );
    background-size: 100px 100px;
    background-position: center;
  }
</style>
