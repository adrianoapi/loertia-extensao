

console.log(app);

library.requisicaoHttp = 'vars';
console.log(library.requisicaoHttp);

app.url = "http://www.maniadeganhar.com.br/api/ultimo-resultado";
app.jogo = 2;
app.jogo_id = 2146;


submitArticle(app.jogo);
function submitArticle(value) {
    console.log(value.valueOf());
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
                app.alimentSorteio(objArray[0]);
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