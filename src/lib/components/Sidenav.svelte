<script lang="ts">
    export let backgroundColor: string = "blue";
    export let color: string = "white";
    export let width: number = 40;
	export let height: number = 0;

    $: style = `--backgroundColor: ${backgroundColor}; color: ${color};
    --width: ${width}%; --height: ${height}%;`;
</script>

<div class="sidenav" {style}>
    <slot />
</div>

<style>
    .sidenav {
        position: fixed;
        top: 1rem;
        bottom: 1rem;
        background-color: var(--backgroundColor);
        width: var(--width);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>