let app = Vue.createApp({
    data(){
        return{
            boxValue: "",
            turn: true,
        }
    },
    methods: {
        setValue(){
            if(this.turn){
                this.boxValue = "X";
                this.turn = false;
            }else{
                this.boxValue = 'O';
            }
        }
    }
});

app.mount('#app');