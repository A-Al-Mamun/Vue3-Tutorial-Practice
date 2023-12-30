
const app = Vue.createApp({
    data(){
        return{
           
        }
    },
    methods: {
        handleKeyup(e){
            console.log(e)
        }
    }
});

app.mount("#app");