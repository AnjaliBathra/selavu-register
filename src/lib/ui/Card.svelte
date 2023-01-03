<script>
    export let type;
</script>

<div class="card {type}">
    <slot></slot>
</div>

<style>
    .card {
        width: 400px;
        display: grid;
        align-items: center;
        background-color: #fff;
        color: #213547;
        border-radius: 15px;
        padding: 30px;
        margin: 20px 0;
        position: relative;
    }

    .list-item {
        grid-template-columns: 60px auto 50px;
        grid-template-areas: "icon date date" 
                             "icon text amt";
    }

</style>