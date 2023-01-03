<script>
    export let disabled;
</script>

<button {disabled}>
    <slot></slot>
</button>

<style>
    button {
        border-radius: 8px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
    }

    button:hover {
        border-color: #646cff;
        transform: scale(0.98);
    }
    
    button:disabled {
        background-color: #ccc;
        color: #213547;
        cursor: auto;
    }

    button:disabled:hover {
        border-color: #ccc;
        transform: scale(1);
    }

</style>