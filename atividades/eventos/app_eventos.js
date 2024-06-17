new Vue({
    el:'#desafio',
    data:{
        valor: ''
    },
    methods:{
        alerta(){
            alert("ALERTA!!!");
        },
        teclado(event){
            this.valor = event.target.value;
        }
    }
})