<script lang="ts">
    import Icon from '$lib/components/Icon.svelte';
	import Navlink from '$lib/components/Navlink.svelte';
	import Sidenav from '$lib/components/Sidenav.svelte';
</script>

<Sidenav>
    <h1 slot="header-menu">Logo</h1>
    <div slot="main-menu">
        <Navlink href="/"><Icon name="minus-square" />Home</Navlink>
        <Navlink href="/" targetElement="documentation"><Icon name="plus-square" />Documentation</Navlink>
        <Navlink href="/" level={2} elementId="documentation"><Icon name="minus-square" />Let's start</Navlink>
        <Navlink href="/" level={2} elementId="documentation"><Icon name="minus-square" />Create project</Navlink>
        <Navlink href="/" targetElement="test"><Icon name="plus-square" />Test</Navlink>
        <Navlink href="/" level={2} elementId="test"><Icon name="minus-square" />Test 1</Navlink>
        <Navlink href="/" level={2} elementId="test"><Icon name="minus-square" />Test 2</Navlink>
    </div>
    <h3 slot="footer-menu">Footer Menu</h3>
</Sidenav>

