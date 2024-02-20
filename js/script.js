

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
            ],

            newTask: {
                text: "",
                done: "false"
            },
            
            
            

        }
    },
    methods: {
        removeTask(taskIndex){
            this.tasks.splice(taskIndex, 1);
        },

        addTask(){
            this.tasks.push({...this.newTask})

            this.newTask.text = ""

        }
        
        

    },
    
}).mount('#app');
