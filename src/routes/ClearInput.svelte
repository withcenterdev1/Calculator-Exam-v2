<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	//My Event Dispatcher for clearing Inputs
	function clearInputs() {
        dispatch('clear',"")
	}
</script>

<button on:click={clearInputs}>C</button>