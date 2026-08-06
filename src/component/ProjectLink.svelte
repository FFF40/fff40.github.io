<script lang="ts">
    import Icon from "@iconify/svelte";
  import type { Snippet } from "svelte";

    let {
        name,
        link,
        icon,
    }: {
        name: string,
        link: string,
        icon: string,
    } = $props();
</script>

<a class="project-link" href={link}>
    <Icon icon={icon} class="icon" />
    <Icon icon="lucide:chevron-right" class="chevron-icon" />
    {name}
</a>

<style>
    .project-link {
        display: block;
        position: relative;
        overflow: hidden;
        padding: 1em 1.5em;

        font-size: 12px;
        text-decoration: none;

        display: flex;
        align-items: center;
        justify-content: start;

        background: white;
        color: black;

        transition: 0.1s all;
    }

    .project-link :global(.icon) {
        position: absolute;
        width: 4em;
        height: 4em;
        left: 0;
        bottom: 0;
        opacity: 0.2;
    }

    .project-link :global(.chevron-icon) {
        position: absolute;
        width: 2em;
        height: 2em;
        right: 0.5em;
    }

    .project-link:hover {
        transform: translateY(-2px);
        box-shadow: 0 1px 2px white;
    }
</style>