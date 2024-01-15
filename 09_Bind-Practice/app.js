let app = Vue.createApp({
    data(){
        return{
            boxValue: "",
            inTurm: null,
            classBox: 'box',
            boxes: [
                {item: 'O', sel: false},
                {item: 'O', sel: false},
                {item: 'O', sel: false},
                {item: 'O', sel: false},
                {item: 'O', sel: false},
                {item: 'O', sel: false},
                {item: 'O', sel: false},
                {item: 'O', sel: false},
                {item: 'O', sel: false},
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