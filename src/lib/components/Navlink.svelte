<script lang="ts">
	import { removeHideAction } from "$lib/utils/domManipulation";

    export let outline: boolean = false;
    export let rounded: number = 50;
    export let width: number = 100;
	export let height: number = 7;
    export let href: string;
    export let color: string = 'var(--white-color)';
    export let backgroundColor: string = 'inherent';
    export let borderColor: string = 'inherent';
    export let hoverColor: string = 'var(--white-color)';
    export let hoverBackgroundColor: string = 'var(--tertiary-color)';
	export let border: number = 0;
	export let fontSize: string = '1rem'
    export let level: number = 1;
    export let targetElement: string = '';
    export let elementId: string = '';

    let active: string = ''
    let hide: string = ''

    $: borderStyle = border !== 0 ? 
    `border: ${border}px solid ${borderColor};` : 'border: none;'
    $: variables = `--rounded: ${rounded}rem; --width: ${width}%; --height: ${height}%; --backgroundColor: ${color}; 
	--color: ${backgroundColor}; --borderColor: ${borderColor}; --fontSize: ${fontSize};  --level: ${level}rem;`;

    $: style = outline ? 
	`${variables} --backgroundColor: ${color}; --color: ${backgroundColor}; ${borderStyle} --hoverColor: ${color}; 
    --hoverBackgroundColor: ${backgroundColor};`
	: `${variables} --backgroundColor: ${backgroundColor}; --color: ${color}; ${borderStyle} --hoverColor: ${hoverColor}; 
    --hoverBackgroundColor: ${hoverBackgroundColor};`;

    $: classToAdd = level === 1 ? 
    `nav-link ${active} ${hide}` :
    `nav-link ${active} hide`;

    function handleOnMouseEnter(node: HTMLElement) {
        removeHideAction(node, 'mouseenter');    
    }
</script>

<li  
    {style} 
    class={classToAdd}
    data-target-element={targetElement}
    data-element-id={elementId}
    use:handleOnMouseEnter >
    <a {href}><slot /></a>
</li>

<style>
    .nav-link {
        list-style: none;
        cursor: pointer;
        background-color: var(--backgroundColor);
        border-radius: var(--rounded);
        width: var(--width);
        height: var(--height);
        display: flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        transition: 0.3s;
        margin: 0.3rem 0;
        margin-left: calc(var(--level) + 1rem);
        visibility: visible;
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
    }
    .nav-link:hover a {
        color: var(--hoverColor);
        font-weight: 600;
    }
    .nav-link:hover a::after {
        content: ' ';
        display: inline-block;
        border-bottom: 3px solid var(--white-color);
        border-right: 3px solid var(--white-color);
        height: 0.6rem;
        width: 0.6rem;
        transform: rotate(-45deg);
        position: absolute;
        right: calc(var(--level) + 1.5rem);
        transition: 0.3s;
    }
    .active a {
        color: red;
    }
    .hide {
        display: none;
        visibility: hidden;
    }
</style>