var g = G$('John', 'Doe');
console.log(g);
g.greet().setLang('es').greet(true).log();

$('#login').click(function(){
    var loginGrtr = G$('john' ,'Doe');
    $('#logindiv').hide();
    var lang = $('#lang').val();
    loginGrtr.setLang(lang).HTMLGreeting('#greeting',true).log();
});