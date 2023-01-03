<script>
    import { createEventDispatcher } from 'svelte';
    export let name;
    export let options;
    
    const dispatch = createEventDispatcher();

    let selected = '';

</script>

<select bind:value={selected} on:change={() => dispatch('select-option', selected)}>
    <option value="" disabled selected hidden>{name}</option>
    {#each options as opt}
        <option value={opt} placeholder="Category">{opt}</option>
    {/each}
</select>

<style>
    select {
        border: none;
        border-radius: 8px;
        font-size: 14px;
        text-align: center;
    }

    select:focus {
        outline: none;
    }

</style>