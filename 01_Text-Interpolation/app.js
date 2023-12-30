
const app = Vue.createApp({
    data(){
        return{
            text: "String Interpolation",
            vueLogo: "./logo.png",
            user:{
                name: ["Mamun", "mn"],
                email: ["mamun@gmail.com", "mn@gmail.com"],
                phone: ["1234545", "3456346"],
                gitLink: ["https://github.com/A-Al-Mamun"]
            },
        }
    }
});
app.mount('#app');