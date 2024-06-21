<template>

  <ScoareBoard :winCount="this.winCount" :loseCount="this.loseCount" />
  
  <br>
  <div>
    <h1 v-html="this.question"></h1 >
  </div>
  
  <template v-if="this.question">
    <template v-for="answer in this.answers" :key="answer">
      <input 
        type="radio" 
        :value="answer" 
        name="options"
        :disabled="this.answer_submitted"
        v-model="chosen_answer">
      <label v-html="answer"></label> <br>
    </template>
    

    <button 
      type="button" 
      class="send" 
      @click="submitAnswer"
      v-if="!this.answer_submitted"> Send </button>
    <button
      class="send"
      type="button"
      @click="this.getQuestion"
      v-else>
      Next Question </button>


      <section 
        class="result"
        v-if="this.answer_submitted">

        <h1 v-if="this.chosen_answer == this.correctAnswer">Correct answer</h1>
        <h1 v-else>Incorrect answer</h1>

      </section>
  

  </template>





</template>

<script>
import ScoareBoard from './components/ScoareBoard.vue';

export default {

  components:{
    ScoareBoard
  },
  name: 'App',
  data(){
    return {
      question: undefined,
      incorrectAnswers: undefined,
      correctAnswer: undefined,
      chosen_answer: undefined,
      answer_submitted: false,
      winCount: 0,
      loseCount: 0
    }
  },
  computed: {
    answers(){
      console.log("2")
      // console.log(this.incorrectAnswers)
      // var answers = JSON.parse(JSON.stringify(this.incorrectAnswers));
      var answers = [...this.incorrectAnswers]
      var numberRandom = Math.round(Math.random() * answers.length);
      answers.splice(numberRandom, 0, this.correctAnswer)
      return answers;
    },
  },
  methods:{
    submitAnswer(){
      if(!this.chosen_answer){
        alert('Pick one of the options')
      }else if(this.chosen_answer == this.correctAnswer){

        this.answer_submitted = true
        this.winCount++
      }else{
        this.answer_submitted = true
        this.loseCount++
      }
    },
    getQuestion(){
        this.axios
        .get("https://opentdb.com/api.php?amount=5")
        .then((response) => {
          this.question = response.data.results[0].question
          this.incorrectAnswers = response.data.results[0].incorrect_answers
          this.correctAnswer = response.data.results[0].correct_answer
      })

      if(this.answer_submitted){
        this.answer_submitted = false
      }
    }
  },
    created(){
      this.getQuestion()
  }
}

// 
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  max-width: 960px;

  input[type=radio]{
    margin: 10px;
  }

 button.send {
    margin-top: 12px;
    height: 40px;
    min-width: 120px;
    padding: 0 16px;
    color: #fff;
    background-color: #1867c0;
    border: 1px solid #1867c0;
    cursor: pointer;
  }

}



</style>
