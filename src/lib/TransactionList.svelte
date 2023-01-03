<script>
    import { TransactionStore } from "../stores";
    import TransactionItem from "./TransactionItem.svelte";
</script>

{#each $TransactionStore as t (t.id)}
    <TransactionItem item={t} on:delete-transaction />
{/each}