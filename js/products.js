let quants;
function getTotal(quant1,quant2, quant3,quant4,quant5,quant6){
    quant1= (document.getElementById("quant1").value);
    quant2= (document.getElementById("quant2").value);
    quant3= (document.getElementById("quant3").value);
    quant4= (document.getElementById("quant4").value);
    quant5= (document.getElementById("quant5").value);
    quant6= (document.getElementById("quant6").value);

    quants = quant1*1500 + quant2*1000 +quant3*500 +quant4*400 +quant5*300 +quant6*200;
    document.getElementById("tots1").innerHTML = quants;

}

$(document).ready(function(){
$('#bt').click(function(){
    $('.edittext').show();
    $('#bt').hide();
});
});
