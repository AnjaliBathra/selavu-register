<script>
    import Card from "./ui/Card.svelte";
    export let item
</script>

<Card>
    <div class="date">
        {item.date}
    </div>
    <div class="category">
        {item.category}
    </div>
    <div class="text">
        {item.memo}
    </div>
    <div class="amt">
        {item.amount}
    </div>
    <div class="close">X</div>
</Card>

<style>
    .date {
        grid-area: date;
        font-weight: 600;
    }
    .category {
        grid-area: category;
        justify-self: center;
        text-transform: uppercase;
    }

    .text {
        grid-area: text;
    }

    .amt {
        grid-area: amt;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 15px;
        font-weight: 600;
        cursor: pointer;
    }
</style>