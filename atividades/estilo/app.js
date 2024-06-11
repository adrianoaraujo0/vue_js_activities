new Vue({
	el: '#desafio',
	data: {
        classe1: 'destaque',
        perigo: true,
        classe3: '',
        cor5: 'red',
        estilo5: {
            width: 100,
            height: 100
        },
        
        progresso:{
            height: 50,
            backgroundColor: 'red'
        },
        cor: 'red',
        widthProgresso: '0%'
	},
    computed:{
        styleEfeito(){
            return {
                destaque: this.mudarEfeito,
                encolher: !this.mudarEfeito
            }
        },
        classeCSS(){
            return {
                'background-color': 'gray'
            }
        },
        classeCSS2(){
            return {
                width: 100,
                height: 100
            }
        },
    },
	methods: {
		iniciarEfeito() {
            setInterval(()=> {
                this.classe1 = this.classe1 == 'destaque' ? 'encolher' : 'destaque'                
            }, 1000)
		},
        pararEfeito(){
           clearInterval(nInterval)
        },
		iniciarProgresso() {
            let count = 0

           idInterval = setInterval(()=>{
                count += 10
                this.widthProgresso = `${count}%`
                if(count == 100){
                    clearInterval(idInterval)
                }

            }, 1000)
                
		}, 
        setPerigo(event){
            if( event.target.value == "true"){
                this.perigo = true
            }else if(event.target.value == "false"){
                this.perigo = false
            }
        }
	}
})
