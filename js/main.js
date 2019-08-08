
app.url     = "http://www.maniadeganhar.com.br/api/ultimo-resultado";

document.getElementById("select-jogo").addEventListener("click", submitArticle);

document.getElementById("next").addEventListener("click", function(){
    document.getElementById("flg").value = 1;
    var sorteio = document.getElementById("numero-concurso").value;
    document.getElementById("numero-concurso").value = parseInt(sorteio) + 1;
    submitArticle();
});

document.getElementById("previous").addEventListener("click", function(){
    document.getElementById("flg").value = 1;
    var sorteio = document.getElementById("numero-concurso").value;
    document.getElementById("numero-concurso").value = parseInt(sorteio) - 1;
    submitArticle();
});

submitArticle();
function submitArticle() {
    var flg = document.getElementById("flg").value;
    if(flg <= 0){
        document.getElementById("numero-concurso").value = '';
        app.sorteio = '';
    }
    var e = document.getElementById("select-jogo");
    var selectJogo = e.options[e.selectedIndex].value;
    if(selectJogo <= 0){
        selectJogo = 2;
    }
    
    app.sorteio     = document.getElementById('numero-concurso').value;
    app.jogo_imagem = selectJogo;
    app.jogo_cor    = selectJogo;
    app.jogo        = selectJogo;
    
    xhr = library.requisicaoHttp();
    var data = "jogo=" + app.jogo + "&sorteio=" + app.sorteio;
    xhr.open('POST', app.url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(data);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                objArray = JSON.parse(this.responseText);
                
                if(objArray.length <= 0){
                    document.getElementById("numero-concurso").value = 0;
                    return false;
                }
                
                app.alimentSorteio(objArray[0]);
                document.getElementById("flg").value = 0;
        
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