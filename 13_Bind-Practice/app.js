let app = Vue.createApp({
    data(){
        return{
            name: null,
            email: null,
            phone: null,
            gender: null,
            infoStore: [
                {
                    name: "Abdullah Al Mamun",
                    email: "abdullahalmamun3073@gmail.com",
                    phone: "01309068352",
                    gender: "Male",
                },
                {
                    lname: "Name :",
                    lemail: "Email :",
                    lphone: "Phone :",
                    lgender: "Gender :",
                }
            ]
        }
    },
    methods: {
        showInfo(){

        }
    }
});

app.mount('#app');