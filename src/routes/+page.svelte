<script lang="ts">
    import { Inputs } from "../stores/Inputs"; 
    import Calculator from "../components/Calculator.svelte";
    import ClearInput from "./ClearInput.svelte";

    //Assigning Inputs so there would be a Reactivity
    function addInputs(addInput:string){
        $Inputs += addInput;
    }

    async function calculate() {
        const response = await fetch('http://localhost:5173/', {
            method: 'POST',
            body: JSON.stringify({inputs:$Inputs }),
            headers: {
                'content-type': 'application/json'
            }
        });
        const result = await response.json();
        $Inputs = result;
    }

</script>

<h1>Calculator</h1>
<Calculator >
    <!-- //Binding Values to Inputs -->
    <input type="text" bind:value={$Inputs}>
    <div class="keypads">
        <button on:click={() => {addInputs("7")}}>7</button>
        <button on:click={() => {addInputs("8")}}>8</button>
        <button on:click={() => {addInputs("9")}}>9</button>
        <button on:click={() => {addInputs("/")}}>÷</button>
        <button on:click={() => {addInputs("4")}}>4</button>
        <button on:click={() => {addInputs("5")}}>5</button>
        <button on:click={() => {addInputs("6")}}>6</button>
        <button on:click={() => {addInputs("*")}}>x</button>
        <button on:click={() => {addInputs("1")}}>1</button>
        <button on:click={() => {addInputs("2")}}>2</button>
        <button on:click={() => {addInputs("3")}}>3</button>
        <button on:click={() => {addInputs("-")}}>-</button>
        <ClearInput on:clear={(e) => {$Inputs = e.detail}}/> 
        <button on:click={() => {addInputs("0")}}>0</button>
        <button on:click={() => {calculate()}}>=</button>
        <button on:click={() => {addInputs("+")}}>+</button>
    </div>
</Calculator>


<style>
    h1{
        text-align: center;
    }
    input{
        margin-left: 8px;
        width: 90%;
        text-align: end;
        margin-bottom: 10px;
        padding: 5px 10px 5px 10px;
    }
    .keypads{
        display: grid;
        grid-template-columns: 65px 60px 60px 60px;
        row-gap: 10px;
        column-gap: 10px;
        margin-left: 3%;
    }
</style>