
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
	}
};
