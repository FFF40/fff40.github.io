<script>
  import Icon from "@iconify/svelte";
  import ProjectCard from "../component/ProjectCard.svelte";

  import janoargGif from "../assets/gifs/janoarg.webp"

</script>
<svelte:head>
    <title>FFF40 Studios</title>
</svelte:head>

<div id="main-container">
    <div id="main-container-inner">
        <header>
            <h1 id="wordmark">
                <img src="/index/brand/fff40.svg" alt="" />
                FFF40 Studios
            </h1>
            <p style="font-style: italic">
                We are just a bunch of people on the internet making stuff at snail speed.
            </p>
            <nav class="social-links">
                <ul>
                    <li><a rel="me" href="https://github.com/fff40">
                        <Icon icon="bi:github" aria-label="GitHub: " />
                        @FFF40
                        <Icon icon="lucide:chevron-right" class="chevron-icon" />
                    </a></li>
                    <li><a rel="me" href="https://discord.gg/vXJTPFQBHm">
                        <Icon icon="bi:discord" aria-label="Discord: " />
                        /vXJTPFQBHm
                        <Icon icon="lucide:chevron-right" class="chevron-icon" />
                    </a></li>
                    <li><a rel="me" href="https://bsky.app/profile/fff40.studio">
                        <Icon icon="bi:bluesky" aria-label="Bluesky: " />
                        @fff40.studio
                        <Icon icon="lucide:chevron-right" class="chevron-icon" />
                    </a></li>
                    <li><a rel="me" href="https://twitter.com/FFF40_Studios" class="not-twitter">
                        <Icon icon="bi:twitter" aria-label="Twitter (X): " />
                        <Icon icon="bi:twitter-x" class="not-twitter-x"/>
                        @FFF40_Studios
                        <Icon icon="lucide:chevron-right" class="chevron-icon" />
                    </a></li>
                </ul>
            </nav>
        </header>
        <main>
            <ProjectCard 
                name="JANOARG" 
                desc="A dynamic 3D rhythm game where everything moves. Playable on phones!"
                link="https://github.com/fff40/janoarg" 
                background={janoargGif} />
        </main>
    </div>
</div>

<style>
    #main-container {
        display: flex;
        position: fixed;
        inset: 0;
        align-items: center;
        justify-content: center;
    }
    #main-container-inner {
        display: flex;
        gap: 2em;
        padding: 2em;
        max-width: 100dvw;
    }

    header {
        font-size: 0.8em;
        flex: 0 0 30em;
        width: 30em;
    }
    header > :not(h1, h2, h3, h4, h5, h6) {
        letter-spacing: 0.1ch;
    }

    main {
        flex: 0 1 40em;
        width: 40em;
    }

    #wordmark {
        font-style: italic;
        font-size: 2.4em;
        margin-block-start: 0;
    }
    #wordmark > img {
        height: 0.9em;
        vertical-align: -0.07em;
        margin-inline-end: 0.15ch;
    }

    .social-links ul {
        display: flex;
        flex-flow: column;
        gap: 0.25em;
        margin: 0;
        padding: 1em 0;
    }
    .social-links li {
        list-style: none;
    }
    .social-links a {
        display: flex;
        align-items: center;
        height: 3em;
        color: #fffc;
        text-decoration: none;
        padding-inline-start: 3em;
        position: relative;
    }
    .social-links a:hover {
        color: #fff;
    }
    .social-links a > :global(svg) {
        position: absolute;
        left: 0;
        width: 2em;
        height: 2em;
    }
    .social-links a > :global(.chevron-icon) {
        left: auto;
        right: 0;
    }
    .social-links a.not-twitter > :global(svg.not-twitter-x) {
        display: none;
    }
    .social-links a.not-twitter:hover > :global(svg:first-child) {
        display: none;
    }
    .social-links a.not-twitter:hover > :global(svg.not-twitter-x) {
        display: block;
    }

    @media (max-width: 64em) {
        #main-container {
            overflow-y: auto;
        }
        #main-container-inner {
            flex-flow: column;
            align-items: stretch;
            justify-content: center;
            margin: auto;
        }
        #main-container-inner > * {
            width: auto;
            flex: 0;
        }
    }
</style>