<script>
    import { fade, scale } from "svelte/transition";
    import TransactionItem from "./TransactionItem.svelte";
    export let transactions;
</script>

{#each transactions.reverse() as t (t.id)}
    <div in:scale out:fade={{ duration: 500 }}>
        <TransactionItem item={t} on:delete-transaction />
    </div>
{/each}