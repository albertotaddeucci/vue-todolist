

const { createApp } = Vue


createApp({
    data() {
        return {
            tasks:[
                {
                    text: "Fare la spesa",
                    done: true
                },
                {
                    text: "Chiamare il meccanico",
                    done: false
                },
                {
                    text: "Andare in palestra",
                    done: false
                },
                {
                    text: "Fare la lavatrice",
                    done: true
                },
                {
                    text: "Aggiustare il comodino",
                    done: false
                },
            ]
            
            
            

        }
    },
    methods: {
        
        

    },
    
}).mount('#app');
