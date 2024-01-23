<template>
    <div>
        <p>{{ name }}</p>
        <p>{{ message }}</p>
        <p> <button v-on:click="incrementCount">Count</button> {{ count }}</p>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            name: 'Apple',
            message: 'I love Apple',
            count: 0
        }
    },
    methods:{
        incrementCount() {
            return this.count++;
        }
    }
}
</script>