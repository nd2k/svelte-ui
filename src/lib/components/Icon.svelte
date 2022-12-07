<script lang="ts">
	import type { FeatherAttributes } from "feather-icons";
	import type { FeatherIconNames } from "feather-icons";
  import feather from "feather-icons";
  
  export const directions = ["n", "ne", "e", "se", "s", "sw", "w", "nw"];
  export let name: FeatherIconNames;
  export let direction: string = "n";
  export let strokeWidth: string = "1.5px"
  export let stroke: string = "var(--white-color)";
  export let width: string | number = 16;
  export let height: string | number = 16;
  let attrs: FeatherAttributes;
    
    $: icon = feather.icons[name];
    $: rotation = directions.indexOf(direction) * 45;
    $: if (icon) {
      if (stroke) icon.attrs["stroke"] = stroke;
      if (strokeWidth) icon.attrs["stroke-width"] = strokeWidth;
      icon.attrs["height"]= height;
      icon.attrs["width"] = width;
    }
    $: svg = icon.toSvg(attrs)
  </script>
  
  {#if icon}
    <div class="icon" style="transform: rotate({rotation}deg);">
      {@html svg}
    </div>
  {/if}
  
  <style>
    .icon {
      overflow: visible;
      transform-origin: 50% 50%;
      cursor: pointer;
      margin: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  </style>