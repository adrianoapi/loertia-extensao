
/**
* Declara a principal classe da API
* com todos os atributos "privados";
**/
var app = {
	_jogo: 0,
	_jogo_id: 0,
	_data_sorteio: '',
	_url: '',
	get jogo() {
		return this._jogo;
	},
	set jogo(value) {
		this._jogo = value;
	},
	get jogo_id() {
		return this._jogo_id;
	},
	set jogo_id(value) {
		this._jogo_id = value;
	},
	get data_sorteio() {
		return this._data_sorteio;
	},
	set data_sorteio(value) {
		var data = value.split('-');
		this._data_sorteio = data[2]+"/"+data[1]+"/"+data[0];
	},
	get url() {
		return this._url;
	},
	set url(value) {
		this._url = value;
	},
        converteArray: function(string)
        {
            var patt = /[0-9]/g;
            var array = string.match(patt);
            var string = "";
            var newArr = [];

            var j = "";
            for (var i = 0; i < array.length; i++) {
                j += array[i];
                if (j.length > 1) {
                    newArr.push(j);
                    j = "";
                }
            }

            return newArr;
        },
        alimentSorteio: function(array) {

            app.concurso     = array['concurso'    ];
            app.data_sorteio = array['data_sorteio'];

            document.getElementById('numero-concurso').innerHTML = app.concurso;
            document.getElementById('data-sorteio'   ).innerHTML = app.data_sorteio;
            var arrNumeros  = app.converteArray(array['numeros']);
            ultimo_concurso = array['concurso'];

            var htmlSpanNumeros = "";
            for(var i = 0; i < arrNumeros.length; i++){
                htmlSpanNumeros += '<li class="example-item example-megasena zoom">' + arrNumeros[i] + '</li>';
            }

            htmlSpanNumeros = '<ul class="example-mega">' + htmlSpanNumeros + '</ul>';
            document.getElementById('dezenas').innerHTML = htmlSpanNumeros;
        }
};
