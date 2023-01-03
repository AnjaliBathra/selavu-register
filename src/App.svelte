<script>
  import TransactionList from "./lib/TransactionList.svelte";
  import TransactionStats from "./lib/TransactionStats.svelte";
  import TransactionForm from "./lib/TransactionForm.svelte";
  import { TransactionStore } from "./stores";

  const deleteTransaction = (e) => {
      const id = e.detail
      // Update TransactionStore here
  }

  $: count = $TransactionStore.length;

</script>

<main>
  <TransactionForm />
  <TransactionStats {count} />
  <TransactionList transactions={$TransactionStore} on:delete-transaction={deleteTransaction} />
</main>

<style>

</style>
