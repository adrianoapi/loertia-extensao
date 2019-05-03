
var library = {
	_tipo: null,
	_url: null,
	_assinc: null,
	_requisicaoHttp: null,
	get requisicaoHttp() {
		return this._requisicaoHttp;
	},
	set requisicaoHttp(value) {
		this._requisicaoHttp = 'hello minhas ' + value;
	},
};
