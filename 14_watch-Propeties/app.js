 let app = Vue.createApp({
    data(){
        return {
            email: '',
            passwordCheck: '',
            checkText: '',
            emailLabel: 'Email ',
            passLabel: 'Password ',
            msg: "Special Character Add '@ # $ &'",
            msg1: "Add ''",
            myClass: 'inValid'
        }
    },
    watch: {
        passwordCheck(newVal, oldVal){
            if(!newVal.includes('@') && !newVal.includes('#') && !newVal.includes('$') && !newVal.includes('&')){
                this.checkText = this.msg;
            }else if(!oldVal.includes('@') && newVal.includes('@')){
                this.checkText = "Add '@'";
                this.myClass = 'valid';
            }else if(!oldVal.includes('#') && newVal.includes('#')){
                this.checkText = "Add '#'";
                this.myClass = 'valid';
            }else if(!oldVal.includes('$') && newVal.includes('$')){
                this.checkText = "Add '$'";
                this.myClass = 'valid';
            }else if(!oldVal.includes('&') && newVal.includes('&')){
                this.checkText = "Add '&'";
                this.myClass = 'valid';
            }else {
                this.checkText = "Done the requirement";
            }
        }
    }
});

app.mount('#app');