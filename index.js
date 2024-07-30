const express = require("express");
const { LoremIpsum } = require('lorem-ipsum');
const app = express();

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        min: 3,
        max: 7
    },
    wordsPerSentence: {
        min: 5,
        max: 15
    }
});
const textoLoremIpsum = lorem.generateParagraphs(1);
const textoLoremIpsum2 = lorem.generateParagraphs(2);


app.get("/",function(req,res){
    res.send("Pagina Inicial")
})
app.get("/lorem1",function(req,res){
    res.send(textoLoremIpsum)
})
app.get("/lorem2",function(req,res){
    res.send(textoLoremIpsum2)
})




app.listen(4000,function(erro){
    if(erro){
        console.log("ERRO CRITICO!")
    }else{console.log("Servidor servindo!")}
})