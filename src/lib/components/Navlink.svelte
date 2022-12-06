<script lang="ts">
    export let outline: boolean = false;
    export let rounded: number = 50;
    export let width: number = 8;
	export let height: number = 2;
    export let href: string;
    export let color: string = 'white';
    export let backgroundColor: string = 'blue';
    export let borderColor: string = 'blue';
	export let border: number = 2;
	export let fontSize: string = '1rem'

    $: style = outline ? 
	`--rounded: ${rounded}rem; --width: ${width}rem; --height: ${height}rem; --backgroundColor: ${color}; 
	--color: ${backgroundColor}; --borderColor: ${borderColor}; --border: 1px;
	--hoverColor: ${backgroundColor}; --hoverBackgroundColor: ${color}; --fontSize: ${fontSize}`
	: `--rounded: ${rounded}rem; --width: ${width}rem; --height: ${height}rem; --backgroundColor: ${backgroundColor}; 
	--color: ${color}; --borderColor: ${borderColor}; --border: ${border}px; --hoverColor: ${backgroundColor}; 
	--hoverBackgroundColor: ${color}; --fontSize: ${fontSize}`;
</script>

<li class="nav-link" {style}>
    <a {href}><slot /></a>
</li>

<style>
    .nav-link {
        list-style: none;
        cursor: pointer;
        padding: 0.5rem;
        background-color: var(--backgroundColor);
        border-radius: var(--rounded);
        width: var(--width);
        height: var(--height);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        
    }
    a {
        text-decoration: none;
        color: var(--color);
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .nav-link:hover {
        background-color: var(--hoverBackgroundColor);
        border: var(--border) solid var(--borderColor);
    }
    .nav-link:hover a {
        color: var(--hoverColor);
    }
</style>