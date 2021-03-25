const data = require('./modules/data');
console.log(data);

fetch('http://honbabzone.com/').then( async (reponse) =>{
    if(reponse.ok){
        const data = await reponse.text();
        console.log(data);
    }
})