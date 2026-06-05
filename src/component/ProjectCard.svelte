<script lang="ts">
    import Icon from "@iconify/svelte";

    let {
        name, 
        link, 
        background,
        desc,
    }: {
        name: string,
        link: string,
        background: string,
        desc: string,
    } = $props();
</script>

<a href="https://github.com/fff40/janoarg">
    <section>
        <img src={background} alt="" class="background-image">
        <div class="background-overlay"></div>
        <div class="flex">
            <h2>JANOARG</h2>
            <Icon icon="lucide:chevron-right" class="chevron-icon" />
        </div>
        <p>{desc}</p>
    </section>
</a>

<style>
    a {
        display: contents;
        color: inherit;
    }

    .flex {
        display: flex;
        align-items: center;
    }

    section {
        display: flex;
        flex-flow: column;
        align-items: stretch;
        justify-content: end;
        position: relative;

        border: 2px solid white;
        padding: 1em;
        gap: 0.5em;
        image-rendering: pixelated;

        transition: 0.1s all;

        height: 10em;
    }

    .background-image {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        image-rendering: pixelated;
        object-fit: cover;
    }

    .background-overlay {
        position: absolute;
        inset: 0;
        z-index: -1;
        background: linear-gradient(#000a, #000c);
    }

    a:hover section {
        transform: translateY(-2px);
        box-shadow: 0 1px 2px white;
    }

    h2 {
        margin: 0;
    }

    p {
        margin: 0;
        font-size: 0.8em;
        letter-spacing: 0.1ch;
        font-style: italic;
    }

    a :global(.chevron-icon) {
        margin-inline-start: auto;
        font-size: 1.5em;
    }
</style>