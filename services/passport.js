const passport = require ('passport');    //importo libreria per autentificazione generica PASSPORT
const GoogleStrategy = require ('passport-google-oauth20').Strategy;    //importo della libreria specifica per goolge autentificazione

const keys = require ('../config/keys.js');  //acquisizione dell' istanza nel path './config/keys.js' per acquisire clientID e googleClientSecret
                                            //memorizzati in esso

passport.use(new GoogleStrategy({                  //definizione dell'utilizzo di google Strategy a PASSPORT
                                                  //si crea una nuova istanza di GoogleStategy(...)
                                                   //argomenti passati-->
                                                   //#1 oggetto contentente i campi

    clientID : keys.googleClientID,                   //clientID-->per memorizzare le info clientID importate nella variabile keys
    clientSecret : keys.googleClientSecret,           //clientSecret--->per memoriazzare la info clientSecret memorizzata nella var keys
    callbackURL : '/auth/google/callback'             //callbackURL--->per memorizzare l'URL dove verrà reindirizzato l'utente dopo aver acconsetito
  },                                                                  //alla nostra app di accedere alle sue info google

                                                //#2 funzione =>utilizzata per l'acquisizione delle info richieste a google,
                                                  //relative all'utente.
                                                  //la funzione ci permette quindi di memorizzare le info dell'utente nel nostro DB

    (accessToken,refreshToken,profile,done)=>{
      console.log('accessToken: ',accessToken);
      console.log('refreshToken:', refreshToken);
      console.log('profile: ', profile);

    }
  )
);
