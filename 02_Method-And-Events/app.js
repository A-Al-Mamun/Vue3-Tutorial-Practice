
const app = Vue.createApp({
    data(){
        return{
           count:0,
        }
    },
    methods: {
        getTime(){
            let ct = new Date();
            return new Date();
        },
        getIncrement(){
            this.count++;
        },
        getDecrement(){
            if(this.count == 0){
                alert("Enough Decrement");
            }else{
                this.count--;
            }
        },
    }
});

app.mount("#app");