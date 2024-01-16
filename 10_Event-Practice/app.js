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
            ]
        }
    },
    methods: {

    }
});

app.mount('#app');