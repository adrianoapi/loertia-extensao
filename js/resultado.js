
/**
* Declara a principal classe da API
* com todos os atributos "privados";
**/
var resultado = {
	_jogo: 0,
	_sorteio: 0,
        contador: 0,
        quantidade: function(jogo) {
            switch(jogo) {
                case '1':
                    this.contador = 5;
                    break;
                case '4':
                    this.contador = 4;
                    break;
                case '3':
                    this.contador = 6;
                    break;
                default:
                    this.contador = 3;
            }
        },
        templateHeader: function(value) {
            return '<p style="font-weight: bold;font-size: 13px; font-family: verdana;">' + value + '</p>';
        },
        template: function(value) {
          return '<p id="resultado">' + value + '</p>';
        },
        insertContent: function(array) {
            
            this.quantidade(array['jogo_id']);
            
            var pontos     = this.templateHeader('PONTOS');
            var ganhadores = this.templateHeader('GANHADORES');
            var premio     = this.templateHeader('PRÊMIO');
            
            for(var i = 1; i <= this.contador; i++){
                pontos     += this.template(i);
                ganhadores += this.template(array['ganhador_'+i]);
                premio     += this.template(array['rateio_'+i]);
            }
            
            document.getElementById('primeira').innerHTML = pontos;
            document.getElementById('segunda' ).innerHTML = ganhadores;
            document.getElementById('terceira').innerHTML = premio;
            
            
        }
};
