let app = Vue.createApp({
    data(){
        return{
            activeMenu: "Receptionist",
            inputValue: "",
        }
    },
    methods: {
        setMenu(setClass){
            this.activeMenu = setClass;
        },
        inValue(setValue){
            this.inputValue = setValue.target.value;
        }
    }
});

app.mount('#app');