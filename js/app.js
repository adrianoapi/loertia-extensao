
/**
* Declara a principal classe da API
* com todos os atributos "privados";
**/
var app = {                        /////////////////////////////////
	_jogo: 0,                      // integer                     //
	_jogo_id: 0,                   // integer                     //
	_data_sorteio: '',             // date                        //
	_url: '',                      // string                      //
	get jogo() {				   /////////////////////////////////
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

console.log(app._url);

app.url = "http://www.maniadeganhar.com.br/api/ultimo-resultado";
app.jogo = 2;
app.jogo_id = 2146;


submitArticle();
function submitArticle() {
    xhr = new ajaxValue();
    function ajaxValue() {
        try {
            xhr = new XMLHttpRequest();
        } catch (e) {
            try {
                var xhr = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                try {
                    var xhr = new ActiveXObject("Msxml2.XMLHTTP");
                } catch (e) {
                    alert("Your Browser is not Supported");

                }
            }
        }
        return xhr;
    }

    var data = "jogo=" + app.jogo + "&jogo_id=" + 2;
    xhr.open('POST', app.url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(data);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                objArray = JSON.parse(this.responseText);
                alimentSorteio(objArray[0]);
            } else {
                alert("status " + this.status);
            }
        } else {
            //alert("status " + this.status);
            //alert("readyState " + this.readyState);
        }
    }
    return false;
}

var ultimo_concurso = null;

function alimentSorteio(array) {

    app.data_sorteio = array['data_sorteio'];

    document.getElementById('numero-concurso').innerHTML = array['concurso'];
    document.getElementById('data-sorteio'   ).innerHTML = app.data_sorteio;
    var arrNumeros  = converteArray(array['numeros']);
    ultimo_concurso = array['concurso'];
    
    var htmlSpanNumeros = "";
    for(var i = 0; i < arrNumeros.length; i++){
        htmlSpanNumeros += '<li class="example-item example-megasena zoom">' + arrNumeros[i] + '</li>';
    }
    
    htmlSpanNumeros = '<ul class="example-mega">' + htmlSpanNumeros + '</ul>';
    document.getElementById('dezenas').innerHTML = htmlSpanNumeros;
}

function converteArray(string)
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
}

function converteData(string)
{
    var data = string.split('-');
    return data[2]+"/"+data[1]+"/"+data[0];
}

function createLink()
{
    
}