<script>
    import TransactionItem from "./TransactionItem.svelte";
    export let transactions;
</script>

{#each transactions as t (t.id)}
    <TransactionItem item={t} on:delete-transaction />
{/each}