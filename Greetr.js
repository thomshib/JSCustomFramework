//function that takes a global object and Jquery object
;(function(global,$){

    //greetr object
    //a function that generates an object
    var Greetr = function(firstname,lastname,language){
        return new Greetr.init(firstname,lastname,language);
    }
    var supportedLangs = ['en','es'];

    var greetings = {
        en: 'Hello',
        es: 'Hola'
    };
    var formalGreetings ={
        en:'Greetings',
        es:'Saludos'
    };
    var logMessage ={
        en:'Logged in',
        es:'Inicio sesion'
    };


    Greetr.prototype = {
        fullName: function(){
            return this.firstname + ' ' + this .lastname;
        },
        valdiate: function(){
            if(supportedLangs.indexOf(this.language) === -1){
                throw 'Invalid Language';
            }
        },
        greeting: function(){
            return greetings[this.language] + ' ' + this.firstname + '!';
        },
        formalGreetings: function(){
            return formalGreetings[this.language] + ', ' + this.fullName();
        },
        greet: function(formal){
            var msg;
            //if undefined / null it will be coerced  to 'false'
            if(formal){
                msg = this.formalGreetings();
            }else{
                msg = this.greeting();
            }

            if(console){
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },
        log: function(){
            if(console){
                console.log(logMessage[this.language] + ': ' + this.fullName());
            }
            return this; // to make this chainable
        }, 
        setLang: function(lang){
            this.language = lang;
            this.valdiate();
            return this; // to make this chainable
        },

        //jQuery selector function
        HTMLGreeting: function(selector,formal){
            if(!$){
                throw 'jQuery not loaded';
            }
            if(!selector){
                throw 'Missing jQuery Selector';
            }
            var msg;
            
            if(formal){
                msg = this.formalGreetings();
            }else{
                msg = this.greeting();
            }
            $(selector).html(msg);
            return this;

        }

    };

    Greetr.init = function(firstname,lastname,language){
        var self = this;
        this.firstname = firstname || '';
        this.lastname = lastname || '';
        this.language = language || 'en';
        self.valdiate();
    }
    Greetr.init.prototype = Greetr.prototype;
    global.Greetr = global.G$ = Greetr;

}(window,jQuery));