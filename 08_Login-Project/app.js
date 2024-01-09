let app = Vue.createApp({
    data(){
        return{
           
        }
    },
    methods: {
        
    }
});

app.component("login-form", {
    template: `
        <form @submit.prevent="handleSubmit">
            <h1>{{ title }}</h1>
            <input type="email" v-model="labelEmail" />
            <input type="password" v-model="labelPassword" />

            <button>Login</button>
        </form>
    `,
    data() {
        return {
            title: "Login Form",
            labelEmail: "",
            labelPassword: "",
        }
    },
    methods: {
        handleSubmit() {
            console.log(this.labelEmail + " " + this.labelPassword)
        }
    }
});

app.mount('#app');