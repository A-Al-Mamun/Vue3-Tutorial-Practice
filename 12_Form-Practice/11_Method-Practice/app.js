 let app = Vue.createApp({
    data(){
        return {
            itemName: null,
            itemNumber: null,
            itemList: [
                {name: "Apple", number: 5}
            ]
        }
    },
    methods: {
        addItem(){
            let item = {
                name: this.itemName,
                number: this.itemNumber
            };
            this.itemList.push(item);
            this.itemName = null;
            this.itemNumber = null;
        }
    }
});

app.mount('#app');