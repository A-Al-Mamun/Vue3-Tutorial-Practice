
const app = Vue.createApp({
    data(){
        return{
           activeClass: "red",

        //    For Style binding
           textColor: "black",
           bgColor: "green"
        }
    },
    methods: {
        setClass(className) {
            this.activeClass = className;
        }
    }
});

app.mount("#app");