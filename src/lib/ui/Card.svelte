<div class="card">
    <slot></slot>
</div>

<style>
    .card {
        width: 300px;
        display: grid;
        grid-template-areas: "date date date" 
                             "category text amt";
        align-content: center;
        background-color: #fff;
        color: #213547;
        border-radius: 15px;
        padding: 40px 50px;
        margin: 20px 0;
        position: relative;
    }
</style>