<template>
    <div>
        <p>{{ foodName }} <img src="/img_quality.svg" v-show='isFavorite'></p>
        <p>{{ foodDescricption }}</p>
        <p> <button v-on:click="incrementCount">Count</button> {{ count }}</p>
        
    </div>
</template>
<script>
export default {
    props: {
        // 'foodName',
        // 'foodDescricption',
        // 'isFavorite'
        foodName: {
            type: String,
            required: true
        },
        foodDescricption: {
            type: String,
            required: false,
            default: 'Change the description',
            // validator: function(value) {
            //     if( 20<value.length && value.length<50 ) {
            //         return true;
            //     }
            //     else {
            //         return false;
            //     }
            // }
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false
        },
    },
    data(){
        return{
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