
const app = Vue.createApp({
    data(){
        return{
           name: "",
        //    keyDownValue: ""
        }
    },
    methods: {
        handleKeyup(e){
            // console.log(e.target.value);
            this.name = e.target.value;
            // this.keyDownValue = e.key;
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