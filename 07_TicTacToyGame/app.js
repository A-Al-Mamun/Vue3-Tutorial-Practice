let app = Vue.createApp({
    data(){
        return{
            boxValue: "",
            turn: true,
            checkTurm: [
                [0,1,2],
                [0,4,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [2,4,6],
                [3,4,5],
                [6,7,8],
            ]
        }
    },
    methods: {
        setValue(){
            let boxes = document.querySelectorAll('.box');
            boxes.forEach(item => {
                item.addEventListener('click', () => {
                    if(this.turn){
                        this.boxValue = "X";
                        this.turn = false;
                    }else{
                        this.boxValue = 'O';
                    }
                })
            })

            
        }
    }
});

app.mount('#app');