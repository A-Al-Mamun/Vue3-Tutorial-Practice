let app = Vue.createApp({
    data(){
        return{
            boxValue: "",
            inTurm: null,
            // classBox: 'box',
            boxes: [
                {sel: false},
                {sel: false},
                {sel: false},
                {sel: false},
                {sel: false},
                {sel: false},
                {sel: false},
                {sel: false},
                {sel: false},
            ]
        }
    },
    methods: {
        setValue(select){
            this.boxes[select].sel = !this.boxes[select].sel;
        }
    }
});

app.mount('#app');