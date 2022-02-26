<template>
	<div :class="`task ${task.done ? 'is-complete' : ''}`">
		<div class="content">{{ task.content }}</div>
		<div class="buttons">
			<button @click="toggleDone">{{ task.done ? 'Undo' : 'Done' }}</button>
			<button @click="removeTask" class="delete">Delete</button>
		</div>
	</div>
</template>

<script>
export default {
	props: ['task'],
	methods: {
		toggleDone() {
			this.$store.commit('TOGGLE_TASK', this.task);
            this.storeTask();
		},
		removeTask() {
			this.$store.commit('REMOVE_TASK', this.task);
            this.storeTask();
		},
        storeTask(){
      localStorage.setItem("newTasks", JSON.stringify(this.todos));
    },
	},
    mounted(){
        let data = localStorage.getItem("newTasks");
        if(data !== "" && data !== null){
            this.newTasks = JSON.parse(data);
        }
        else{
            this.newTasks = [];
        }
        
    }
}
</script>

<style>
</style>