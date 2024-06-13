new Vue({

    el:'#app',
    data: {
        jogadorProgresso: 500,
        monstroProgresso: 500,
        log: [],
        iniciarGame: false,
        vencerJogo: null,
        progresso: {
            height: 30
        },
        stylebuttons:{
            padding: 10,
            marginLeft: 10,
            borderRadius: '5%',
            border: 'none'
        },
        styleLog:{
            textAlign: 'center',
            padding: '5px',
            color: 'white'
        }
    },
    watch:{
        vencerJogo(a,b){
            if(a != null){
                this.log = []
            }
        }
    },
    methods:{
        progressoCor(progressoAtual){
            return progressoAtual < 100 ? 'red' : 'green' 
        },
        desistir(){
            this.iniciarGame = false,
            this.jogadorProgresso = 500,
            this.monstroProgresso = 500
        },
        curar(){
            this.curarJogador()
            this.ataqueDoMonstro(50)
        },
        curarJogador(){
            cura = + this.gerarAtaqueOuCura(45)
            progressoAtual = this.jogadorProgresso + cura
            if(progressoAtual <= 500){
                this.jogadorProgresso = progressoAtual 
                this.log.push("O JOGADOR RECEBEU UMA CURA DE "+ cura)
            }
        },
        ataqueEspecial(){
            this.ataqueDoJogador(65)
            this.ataqueDoMonstro(50)
        },
        ataque(){
            this.ataqueDoJogador(35)
            this.ataqueDoMonstro(50)
            console.log(this.log)
        },
        ataqueDoJogador(maxPoder){
            dano = this.gerarAtaqueOuCura(maxPoder);
            progressoAtual = this.monstroProgresso - dano
            if(progressoAtual >= 0) {
                this.monstroProgresso = progressoAtual
                this.log.push("JOGADOR ATINGIU MONSTRO COM " + dano)
            }else{
                this.vencerJogo = true
                this.monstroProgresso = 0
            }
            },
            ataqueDoMonstro(maxPoder){
            dano = this.gerarAtaqueOuCura(maxPoder)
            progressoAtual = this.jogadorProgresso - dano
            if(progressoAtual >= 0) {
                this.jogadorProgresso = progressoAtual
                this.log.push("MONSTRO ATINGIU JOGADOR COM " + dano)
            }else{
                this.vencerJogo = false
                this.jogadorProgresso = 0
            }
        },
        gerarAtaqueOuCura(maxPoder){
            valor = Math.floor(Math.random() * maxPoder)
            return valor
        },
        porcentagemDaBarraDeProgresso(progressoAtual){
            total = (100 * progressoAtual)/500
            return total
        }
    }

})