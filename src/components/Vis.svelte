<script>
    import {onMount} from "svelte"
    import ParallelBundling from "../EdgeBundling"

    export let data;

    let w,h;
    let div, svg;
    
    onMount(() => {
        let eb = new ParallelBundling(div, {width:w, height:h});
        eb.data(data);
        eb.redraw();
    })
</script>

<div bind:clientHeight={h} bind:clientWidth={w} bind:this={div}>
    <!-- <svg width=100% height=100%  bind:this={svg}> </svg> -->
</div>


<style>
    div {
        width: 95vw;
        height: 90vh;
    }

    :global(path.data) {
        fill: none;
        stroke-width: .5;
    }

    :global(text.column_label) {
        font-size: 14px;
        cursor: pointer;
    }
</style>
