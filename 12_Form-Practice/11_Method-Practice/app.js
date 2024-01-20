 let app = Vue.createApp({
    data(){
        return {
            itemName: null,
            itemNumber: null,
            itemImportant:false,
            itemList: [
                {
                    name: "Apple", 
                    number: 5, 
                    important: false
                }
            ]
        }
    },
    methods: {
        addItem(){
            let item = {
                name: this.itemName,
                number: this.itemNumber,
                important: this.itemImportant
            };
            this.itemList.push(item);
            this.itemName = null;
            this.itemNumber = null;
            this.itemImportant = false;
        }
    }
});

app.mount('#app');