
app.url     = "http://www.maniadeganhar.com.br/api/ultimo-resultado";
app.jogo    = 2;
app.sorteio = 2146;


submitArticle();
function submitArticle() {

    xhr = library.requisicaoHttp();
    var data = "jogo=2&sorteio=" + 2;
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