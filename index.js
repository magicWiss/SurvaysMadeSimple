const express= require('express');    //importo della libreria express

require ('./services/passport.js');   //import del file ./services/passport.js dove sono definite
                                                            //le configurazioni di utilizzo di passport e GoogleStategy



const app=express();        //creazione app express
                            //app-->utilizzato per la configurazione dell'app
                            //tutti gli handlers sono inseriti nell' app indicata

require('./routes/authRoutes.js')(app);   //importo della funzione definirta nel file ./routes/authRoutes.js e invocazione di essa
                                          //con attributo la variabile app



const PORT = process.env.PORT || 5000;
app.listen(PORT);
