<script context="module">
    import "reflect-metadata";
    import { dev } from '$app/env';

    // Hydrate in dev mode for live reloads. Not required in prod mode.
	export const hydrate = dev;
</script>

<h1>Hello World</h1>
<p>Check out the <a href="/games">games</a>!</p>
