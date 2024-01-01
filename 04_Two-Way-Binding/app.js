
const app = Vue.createApp({
    data(){
        return{
           num: "",
           result: ""
        }
    },
    methods: {
        getNumber(e) {
            this.num = e.target.value;
        },
        getDouble() {
            this.result = this.num * 2;
        },
        getSquare() {
            this.result = this.num * this.num;
        },
        getAddTen() {
            this.result = this.num + 10;
        },
        getReset() {
            this.num = "";
            this.result = "";
        },
    }
});

app.mount("#app");