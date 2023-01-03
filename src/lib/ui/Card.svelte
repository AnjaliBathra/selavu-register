<div class="card">
    <slot></slot>
</div>

<style>
    .card {
        width: 300px;
        display: grid;
        grid-template-columns: 60px auto 50px;
        grid-template-areas: "icon date date" 
                             "icon text amt";
        align-items: center;
        background-color: #fff;
        color: #213547;
        border-radius: 15px;
        padding: 30px;
        margin: 20px 0;
        position: relative;
    }
</style>