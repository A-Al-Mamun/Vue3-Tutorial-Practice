let app = Vue.createApp({
    data(){
        return{
            activeMenu: "Receptionist",
            inputName: "",
            inputPhone: "",
            inputPass: "",
            rCheck: "",

            db: {
                user: ["recep", "admin", "doctor"],
                pass: ["recep", "admin", "doctor"]
            }
        }
    },
    methods: {
        setMenu(setClass){
            this.activeMenu = setClass;
        },
        inName(setName){
            this.inputName = setName.target.value;  
        },
        inPhone(setPhone){
            this.inputPhone = setPhone.target.value;  
        },
        resultCheck(){
            if(this.inputPass.target.value == this.db.user[0]){
                this.rCheck = "Correct";
            }else{
                this.rCheck = "Incorrect";
            }
        },
    }
});

app.mount('#app');