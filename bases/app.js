const app = Vue.createApp({
    // template: `
    //     <h1>Hola mundo</h1>
    //     <p>{{undefined}}</p>
    // `
   data(){
        return{
            quote: "I'm batman",
            author: 'Brush wane'
        }
    },
    methods:{
        changeQuote( event ){
            console.log("hola mundo de nuevo")
            this.author = 'Daniel'
            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#myApp')