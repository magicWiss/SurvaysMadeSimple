const express= require('express');    //importo della libreria express

const app=express();        //creazione app express
                            //app-->utilizzato per la configurazione dell'app
                            //tutti gli handlers sono inseriti nell' app indicata


app.get('/',(req,res)=>{
  res.send({hi:'there wuz up'});

});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
