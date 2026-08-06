<script lang="ts">
    import Icon from "@iconify/svelte";
  import type { Snippet } from "svelte";

    let {
        children
    }: {
        children: Snippet
    } = $props();
</script>

<div class="project-links">
    {@render children()}
</div>

<style>
    .project-links {
        display: flex;
        flex-wrap: wrap;
        justify-content: end;
        gap: 0.25em;
        margin-block: 0.25em 0.5em;
        font-size: 0.85em;
        letter-spacing: 0.1ch;
    }

    .project-links > :global(*) {
        width: 18em;
    }

    @media (max-width: 64em) {
        .project-links {
            flex-flow: column;
            align-items: stretch;
        }

        .project-links > :global(*) {
            width: auto;
        }
    }
</style>