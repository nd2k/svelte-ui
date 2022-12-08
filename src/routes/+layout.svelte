<script lang="ts">
    import '../styles/main.css';

    import Icon from '$lib/components/Icon.svelte';
	import Navlink from '$lib/components/Navlink.svelte';
	import Sidenav from '$lib/components/Sidenav.svelte';
	import { addHide, outsideAction } from '$lib/utils/domManipulation';

    function handleOutsideAction(element: HTMLElement, elementId: string) {      
        outsideAction(element, 'mousemove', addHide, `.nav-link[data-element-id=${elementId}]`);
    }
</script>

<div id="main-layout">
    <Sidenav position="relative">
        <h1 slot="header-menu">Logo</h1>
        <div slot="main-menu">
            <Navlink href="/"><Icon name="minus-square" />Home</Navlink>
            <div use:handleOutsideAction={'documentation'}>
                <Navlink href="/" targetElement="documentation" ><Icon name="plus-square" />Documentation</Navlink>
                <Navlink href="/" level={2} elementId="documentation"><Icon name="minus-square" />Let's start</Navlink>
                <Navlink href="/" level={2} elementId="documentation"><Icon name="minus-square" />Create project</Navlink>
            </div>
            <div use:handleOutsideAction={'test'}>
                <Navlink href="/" targetElement="test"><Icon name="plus-square" />Test</Navlink>
                <Navlink href="/" level={2} elementId="test"><Icon name="minus-square" />Test 1</Navlink>
                <Navlink href="/" level={2} elementId="test"><Icon name="minus-square" />Test 2</Navlink>
            </div>
        </div>
        <h3 slot="footer-menu">Footer Menu</h3>
    </Sidenav>
    <slot />
</div>

<style>
    #main-layout {
        min-width: 100vw;
        min-height: 100vh;
        background-color: var(--background-color);
        display: flex;
        flex-direction: row;
    }
</style>