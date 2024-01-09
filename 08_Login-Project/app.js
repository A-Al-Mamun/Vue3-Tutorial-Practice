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
            <custom-input type="email" v-model="email" v-bind:label="labelEmail" />
            <custom-input type="password" v-model="password" v-bind:label="labelPassword" />

            <button>Login</button>
        </form>
    `,
    components: ['custom-input'],
    data() {
        return {
            title: "Login Form",
            email: "",
            password: "",
            labelEmail: "Email",
            labelPassword: "Password"
        }
    },
    methods: {
        handleSubmit() {
            console.log(this.email + " " + this.password)
        }
    }
});

app.component("custom-input", {
    template: `
        <label>{{ label }}
            <input type="text" v-model="inputValue" />
        </label>
    `,
    props: ["label", "modelValue"],
    computed: {
        inputValue: {
            get() {
                return this.modelValue;
            },
            set(value) {
                console.log(value)
            }
        }
    }
});

app.mount('#app');