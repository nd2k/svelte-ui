<script lang="ts">
    import Icon from '$lib/components/Icon.svelte';
	import Navlink from '$lib/components/Navlink.svelte';
	import Sidenav from '$lib/components/Sidenav.svelte';
</script>

<Icon name="alert-circle" />
<Navlink href="/">Home</Navlink>

<Sidenav>
    <Navlink href="/"><Icon name="alert-circle" />Home</Navlink>
    <Navlink href="/">About</Navlink>
</Sidenav>