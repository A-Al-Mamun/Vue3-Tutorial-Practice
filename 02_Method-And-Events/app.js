
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

        // With parameter of function worked
        getInc10(evt,amount){
            this.count = this.count + amount;
            console.log(evt)
        },
        getDec10(amount){
            if(this.count <= 0){
                alert("Enough Decrement");
            }else{
                this.count = this.count - amount;
            }
        },
        test(ev){
            console.log(ev);
        }
    }
});

app.mount("#app");