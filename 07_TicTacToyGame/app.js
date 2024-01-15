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
            ],
            classBox: 'box',
            
        }
    },
    methods: {

        setValue(){
            let boxes = document.querySelectorAll('.box');
            console.log(boxes);
            boxes.forEach(item => {
                if(!this.turn){
                    item = "O";
                    this.boxValue = item;
                    this.turn = true;
                }else{
                    this.boxValue = 'X';
                    this.turn = false;
                }
            })
            
        }

    }
});

app.mount('#app');