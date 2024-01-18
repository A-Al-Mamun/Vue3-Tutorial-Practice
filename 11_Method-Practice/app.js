 let app = Vue.createApp({
    data(){
        return {
            foodName: "Food",
            singleImage: "img/coffee.svg",
            foods: [
                {name: "Pizza", url: "img/pizza.svg"},
                {name: "Coffee", url: "img/coffee.svg"},
                {name: "Fast Food", url: "img/fast-food.svg"},
                {name: "Fruits", url: "img/fruit-basket.svg"},
            ],
            xPos: 0,
            yPos: 0,

            count: 0,

            tiger: 0,
            lion: 0,
            elephant: 0,
            hayna: 0,
        }
    },
    methods: {
        imagePos(event){
            this.xPos = event.offsetX;
            this.yPos = event.offsetY;
        },
        bgColor(e){
            this.xPos = e.target.value;
        },
        addCount(number){
            this.count = this.count + number;
        },
        animalCount(e,num){
            if(e.target.parentElement.id === "tiger"){
                this.tiger += num;
            }else if(e.target.parentElement.id === "lion"){
                this.lion += num;
            }else if(e.target.parentElement.id === "elephant"){
                this.elephant += num;
            }else{
                this.hayna += num;
            }
        
        }
    }
});

app.mount('#app');