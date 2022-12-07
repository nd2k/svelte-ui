<script lang="ts">
    import '../styles/main.css';

</script>

<div id="main-layout">
    <slot />
</div>

<style>
    #main-layout {
        min-width: 100vw;
        min-height: 100vh;
        background-color: var(--background-color);
    }
</style>