

console.log(app);

library.requisicaoHttp = 'vars';
console.log(library.requisicaoHttp);

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