<script>
    import { v4 as uuidv4} from 'uuid';
    import { createEventDispatcher } from 'svelte';
    import Card from "./ui/Card.svelte";
    import Button from "./ui/Button.svelte";

    const dispatch = createEventDispatcher();

    let text = ''
    let amount = 0.00
    let btnDisabled = true;
    let minimum = 5;
    let message;

    // input validation for transaction description
    const handleInput = () => {
        if (text.trim().length <= minimum) {
            message = `Description must be at least ${minimum} characters.`
            btnDisabled = true
        } else {
            message = null;
            btnDisabled = false;
        }
    }

    const handleSubmit = () => {
        // input re-validation
        if (text.trim().length > minimum) {
            const newTransaction = {
                "id": uuidv4(),
                "date": new Date(), 
                "memo": text,
                amount,
                "category": null
            }

            dispatch('add-transaction', newTransaction);
        }
    }
</script>

<Card type="form">
    <h3>Enter the details of your transaction below:</h3>
    <form on:submit|preventDefault={handleSubmit}>
            <input type="text" 
                    on:input={handleInput} 
                    bind:value={text}
                    placeholder="Describe your expense..." />
            <div class="input-group">
                <label>Amount: 
                    <input type="number" bind:value={amount}/>
                </label> 
                <Button disabled={btnDisabled}>Submit</Button>
            </div>

            {#if message}
                <div class="message">
                    {message}
                </div>
            {/if}
    </form>
</Card>

<style>
    form {
        display: grid;
        row-gap: 10px;
        padding: 8px 10px;
        color: #fff;
    }

    .input-group {
        display: grid;
        grid-template-columns: 1fr auto;
        column-gap: 10px;
        justify-items: end;
        align-items: center;
    }
    input {
        border: none;
        border-radius: 8px;
        font-size: 16px;
        padding: 12px;
    }
    input:focus {
        outline: none;
    }

    input[type="number"] {
        width: 75px;
        margin-left: 5px;
    }

    label {
        color: #213547;
        font-size: 18px;
    }

    .message{
    padding-top: 10px;
    text-align: center;
    color: #646cff;
  }
  
</style>