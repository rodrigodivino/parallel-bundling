<script>
  import { csvParse, autoType } from "d3-dsv";
  import Vis from "../components/Vis.svelte"

  let files;
  $: loadedFile = files && files[0];
  let click;

  let ok = false;

  const parseFile = async (file) => {
    const text = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = fileLoadedEvent => {
        const text = fileLoadedEvent.target.result;
        resolve(text);
      };
      reader.readAsText(file, "UTF-8");
    });

    const data = await csvParse(text, autoType);
    console.log('2', data);
    return data;
  };

  const handleStart = () => {
    if (loadedFile) {
      ok = true;
    } else {
      alert("Please specify data");
    }
  };
</script>

<style>

</style>

<svelte:head>
  <title>Edge Bundling</title>
</svelte:head>

{#if ok}
  {#await parseFile(loadedFile)}
    <p>...parsing data</p>
  {:then data}
    <Vis {data}/>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
{:else}
  <form>

    <div>
      <label for="example">Upload Data</label>
      <input type="file" bind:files />
    </div>

    <div>
      <button type="button" on:click={handleStart}>Start</button>
    </div>

  </form>

{/if}
