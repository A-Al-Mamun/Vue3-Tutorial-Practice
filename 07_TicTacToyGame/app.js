let app = Vue.createApp({
    data(){
        return{
            red: "red",
            green: "green",
        }
    },
    methods: {
        getClick(){
            let body = document.querySelectorAll(".item");
            body.forEach(item => {
                item.addEventListener("click", () => {
                    console.log(body)
                })
            })
        }
    }
});

app.mount('#app');