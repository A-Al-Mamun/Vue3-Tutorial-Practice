 let app = Vue.createApp({
    data(){
        return {
            email: '',
            passwordCheck: '',
            checkText: '',
            emailLabel: 'Email ',
            passLabel: 'Password ',
            msg: "Special Character add '@ # $ &'"
        }
    },
    watch: {
        passwordCheck(newVal, oldVal){
            if(!newVal.includes('@') && !newVal.includes('#') && !newVal.includes('$') && !newVal.includes('&')){
                this.checkText = this.msg;
            }else if(!oldVal.includes('@') && newVal.includes('@')){
                this.checkText = "Perfectly add '@'";
            }else if(!oldVal.includes('#') && newVal.includes('#')){
                this.checkText = "Perfectly add '#'";
            }else if(!oldVal.includes('$') && newVal.includes('$')){
                this.checkText = "Perfectly add '$'";
            }else if(!oldVal.includes('&') && newVal.includes('&')){
                this.checkText = "Perfectly add '&'";
            }else {
                this.checkText = "Done the requirement";
            }
        }
    }
});

app.mount('#app');