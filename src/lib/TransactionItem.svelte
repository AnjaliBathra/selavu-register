<script>
    import { createEventDispatcher } from 'svelte';
    import GiTShirt from 'svelte-icons/gi/GiTShirt.svelte';
    import GiPhone from 'svelte-icons/gi/GiPhone.svelte';
    import FaShoppingBasket from 'svelte-icons/fa/FaShoppingBasket.svelte';
    import FaGift from 'svelte-icons/fa/FaGift.svelte';
    import Card from "./ui/Card.svelte";
    import Icon from './ui/Icon.svelte';
    export let item

    const dispatch = createEventDispatcher()

    const handleDelete = (id) => {
        dispatch('delete-transaction', id)
    }
</script>

<Card>
    <div class="date">
        {item.date}
    </div>
    <Icon>
        {#if item.category === 'gift'}
            <FaGift />
        {:else if item.category === 'clothing'}
            <GiTShirt />
        {:else if item.category === 'grocery'}
            <FaShoppingBasket />
        {:else if item.category === 'phone'}
            <GiPhone />
        {:else}
            {null}
        {/if}
    </Icon>
    <div class="text">
        {item.memo}
    </div>
    <div class="amt">
        ₹{item.amount}
    </div>
    <button class="close" on:click={() => handleDelete(item.id)}>X</button>
</Card>

<style>
    .date {
        grid-area: date;
        font-weight: 600;
    }

    .text {
        grid-area: text;
    }

    .amt {
        grid-area: amt;
        font-size: 16px;
        font-weight: 600;
        justify-self: right;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 15px;
        height: 10px;
        width: 10px;
        font-weight: 600;
        color: #213547;
        cursor: pointer;
        background: none;
        border: none;
        outline: none;
    }

</style>