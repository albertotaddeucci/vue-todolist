

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
                done: false
            },
            
            
            

        }
    },
    methods: {
        //rimozione task
        removeTask(taskIndex){
            this.tasks.splice(taskIndex, 1);
        },

        //aggiunta task
        addTask(){
            
            //controllo se campo di testo vuoto
            if(this.newTask.text == ""){
                alert ("Non hai inserito nulla!")
            } else {     
                //inserimento task           
                this.tasks.push({...this.newTask})
            }


            //reset campo input
            this.newTask.text = ""

        },
        completed(currenTask){

            if (currenTask.done == false){
                currenTask.done = true
            } else {
                currenTask.done = false
            }
        }
       
        

    },
    
}).mount('#app');
