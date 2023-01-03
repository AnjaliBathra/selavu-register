<script>
  import TransactionList from "./lib/TransactionList.svelte";
  import TransactionStats from "./lib/TransactionStats.svelte";
  import TransactionForm from "./lib/TransactionForm.svelte";
  import { TransactionStore } from "./stores";

  const addTransaction = (e) => {
    const newTransaction = e.detail;
    TransactionStore.update((current) => {
      return [...current, newTransaction]
    })
  }

  const deleteTransaction = (e) => {
      const id = e.detail
      TransactionStore.update((current) => {
        return current.filter((item) => item.id != id)
      })
  }
  

  $: count = $TransactionStore.length;

</script>

<main>
  <h1>செலவு பதிவு </h1>
  <TransactionForm on:add-transaction={addTransaction} />
  <TransactionStats {count} />
  <TransactionList transactions={$TransactionStore} on:delete-transaction={deleteTransaction} />
</main>

<style>
  h1 { 
    text-align: center;
  }
</style>
