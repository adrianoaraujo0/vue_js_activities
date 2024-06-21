
const todosApp = {

    data(){
        return {
            todos: [],
            newTodo: {
                done: false
            }
        }
    },
    methods:{
        addTask:function(){
            console.log("teste")
            if(this.newTodo.text){
                this.todos.push(this.newTodo)
                this.newTodo = {done: false}
                localStorage.setItem("todos", JSON.stringify(this.todos))
            }else{
                alert('Text required')
            }
        },
        editDone: function(index){
            this.todos[index].done = !this.todos[index].done
            this.updated()
        },
        updated() {
            localStorage.setItem("todos", JSON.stringify(this.todos))
        },
        
    },
    computed:{
        
    },
    updated() {
        console.log("UPDATE")
    },
    created(){
        console.log("create")
        jsonTodos = localStorage.getItem("todos")
        todosArray = JSON.parse(jsonTodos)
        this.todos = todosArray
    }

}


Vue.createApp(todosApp).mount('#app');