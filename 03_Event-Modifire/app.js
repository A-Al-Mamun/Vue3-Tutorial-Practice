
const app = Vue.createApp({
    data(){
        return{
           name: "",
        }
    },
    methods: {
        handleKeyup(e){
            // console.log(e.target.value);
            this.name = e.target.value;
        },
        handleSubmitHere(e){
            console.log(e)
        },
        handleViewClick(){
            console.log("View Event")
        },
        handleClick(){
            console.log("Click Event");
        }
    }
});

app.mount("#app");