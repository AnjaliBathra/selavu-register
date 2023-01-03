<script>
    import { TransactionStore } from "../stores";
    import TransactionItem from "./TransactionItem.svelte";

    const deleteTransaction = (e) => {
        const id = e.detail
        // Update TransactionStore here
    }
</script>

{#each $TransactionStore as t (t.id)}
    <TransactionItem item={t} on:delete-transaction={deleteTransaction} />
{/each}