<script lang="ts">
    export let backgroundColor: string = "var(--primary-color)";
    export let color: string = "var(--white-color)";
    export let width: number = 30;
	export let height: number = 0;
    export let position: string = "fixed";
    export let top: number = 0;
    export let left: number = 0;
    export let bottom: number = 0;
    export let right: number = 0;

    $: position = `position: ${position}; top: ${top}rem; left: ${left}rem; bottom: ${bottom}rem; right: ${right}rem`;
    $: variables = `--backgroundColor: ${backgroundColor}; color: ${color}; --width: ${width}%; --height: ${height}%;`
    $: style =  `${variables} ${position}`;
</script>

<div class="sidenav" {style}>
    <div class="header-menu">
        <slot name="header-menu"/>
    </div>
    <div class="main-menu">
        <slot name="main-menu" />
    </div>
    <div class="footer-menu">
        <slot name="footer-menu" />
    </div>
</div>

<style>
    .sidenav {
        background-color: var(--backgroundColor);
        width: var(--width);
        min-width: 13rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 1rem 0;
        overflow-x: hidden;
    }
    .header-menu {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem 0;
        border-bottom: 2px solid var(--white-color);
        width: 100%;
    }
    .main-menu {
        margin: 1rem;
        width: 100%;
        height: 100%;
    }
    .footer-menu {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem 0;
        border-top: 2px solid var(--white-color);
        width: 100%;
    }
</style>