let app = Vue.createApp({
    data(){
        return{
            inputName: null,
            inputEmail: null,
            inputPhone: null,
            inputGender: null,
            important: false,
            infoStore: [
                {
                    name: "Abdullah Al Mamun",
                    email: "abdullahalmamun3073@gmail.com",
                    phone: "01309068352",
                    gender: "Male",
                    important: false,

                    lname: "Name :",
                    lemail: "Email :",
                    lphone: "Phone :",
                    lgender: "Gender :",
                    limportant: "Important ?:"
                }
            ]
        }
    },
    methods: {
        showInfo(){
            let item = {
                name: this.inputName,
                email: this.inputEmail,
                gender: this.inputGender
            };
            this.infoStore.push(item);
            this.inputName = null;
            this.inputEmail = null;
            this.inputGender = null;
        }
    },
    computed: {
        check(){
            if(this.important){
                return "Yes"
            }else{
                return "No Need"
            }
        }
    }
});

app.mount('#app');