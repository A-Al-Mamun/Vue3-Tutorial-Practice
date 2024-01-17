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
        }
    }
});

app.mount('#app');