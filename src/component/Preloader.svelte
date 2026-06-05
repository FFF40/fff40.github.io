<script lang="ts">
  import { onMount } from "svelte";

	onMount(() => {
		window.addEventListener("load", () => {
			document.getElementById("preloader")!.classList.add("hidden", "animated");
		})
	})
</script>

<div id="preloader" class="hidden">
	<div class="spinner-center">
		<div class="preloader-border"></div>
		<div class="preloader-spinner"></div>
		<img class="preloader-logo" src="/index/brand/fff40-wireframe.svg" alt="Loading...">
	</div>
	<script>
		document.getElementById("preloader").classList.remove("hidden");
	</script>
</div>

<style>
	#preloader {
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		inset: 0;
		background: black;
        z-index: 200000000000000000;
	}

	#preloader .spinner-center {
		position: relative;
		width: 0;
		height: 0;
	}

	#preloader .preloader-border {
		position: absolute;
		inset: -12vmin;
		width: 24vmin;
		height: 24vmin;
		box-shadow: 0 0 8vmin -1vmin #fff3;
		border-radius: 50%;
	}

	#preloader .preloader-spinner {
		position: absolute;
		inset: -11vmin;
		width: 22vmin;
		height: 22vmin;
		border-top: 0.25vmin solid white;
		border-left: 0.25vmin solid white;
		border-radius: 50%;
		animation: 0.3s linear infinite preloader-spin;
	}

	#preloader .preloader-logo {
		position: absolute;
		inset: -5.6vmin;
		width: 12vmin;
		height: 12vmin;
	}

	#preloader.hidden {
		opacity: 0;
		pointer-events: none;
	}

	#preloader.hidden .preloader-border {
		transform: scale(4);
	}

	#preloader.hidden .preloader-spinner {
		opacity: 0;
		animation: none;
		border: 0.25vmin solid white;
		background: white;
	}

	#preloader.hidden .preloader-logo {
		opacity: 0;
	}

    #preloader:global(.animated), #preloader:global(.animated) * {
		transition: 0.6s all cubic-bezier(0.19, 1, 0.22, 1);
    }

    #preloader:global(.animated) .preloader-border {
		transition: 0.6s all ease-out;
    }

    #preloader:global(.animated) .preloader-border {
		transition: 0.6s all ease-out;
    }

	@keyframes preloader-spin {
		from {
			transform: rotate(0);
		} to {
			transform: rotate(1turn);
		}
	}
</style>