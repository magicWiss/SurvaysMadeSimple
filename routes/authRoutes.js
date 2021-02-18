
const passport=require ('passport');

module.exports= app=>{
  
    app.get('/auth/google',passport.authenticate('google', {      //route handler per le richieste get http relative all url '/auth/google'
                                                                  //viene passato-->il route di attivazione
                                                                  //un metodo passport.authenticate dove vengono passati la stringa goolge
                                                                  //ed un array -->scope
            scope: ['profile','email']                            //nell' array sono memorizzate le info google del cliente a cui si vuole accedere
                                                                  //in questo caso si stanno richiedendo info di profilo ed email
                                                                  //si possono chiedere altre info
                                                                  //i nomi utilizzati sono standard e non inventati
          })
    );

    app.get('/auth/google/callback', passport.authenticate('google'));  //rout handler per il rindirizzamento del client da google [callback]
                                                                  //si definisce le azioni da fare nel momento in cui il client è
                                                                    //reindirizzato da google verso il nostro server, dopo aver acconsentito all'
                                                                    //utilizzo dei suoi dati
                                                                    //Lo scambio di code tra server e google è definito in automatico dal metodo
};
