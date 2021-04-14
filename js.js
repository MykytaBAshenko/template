






let inputT = document.getElementById("input-text")
let inputR = document.getElementById("range-input")
if(inputT)
inputT.oninput = function(e) {
    if(e.target.value < 21 && e.target.value >1 ) {
        inputT.value=parseInt(e.target.value)
        inputR.value=parseInt(e.target.value)
    }
    else if(
        e.target.value > 20
    ) {
        inputT.value=parseInt(20)
        inputR.value=parseInt(20)
    }
    else {
        inputT.value=parseInt(2)
        inputR.value=parseInt(2)
    }

}
if(inputR)
inputR.oninput = function(e) {
    if(e.target.value < 21 && e.target.value >1 ) {
        inputT.value=parseInt(e.target.value)
        inputR.value=parseInt(e.target.value)
    }
    else if(
        e.target.value > 20
    ) {
        inputT.value=parseInt(20)
        inputR.value=parseInt(20)
    }
    else {
        inputT.value=parseInt(2)
        inputR.value=parseInt(2)
    }
}



var els = document.getElementsByClassName("make-oredr-stage-chooser");
if(els)
for (let y = 0; y < els.length; y++) {
    els[y].firstElementChild.onclick = function () {
        for (let y = 0; y < els.length; y++) {
            els[y].className = "make-oredr-stage-chooser"
        }
        els[y].className = "make-oredr-stage-chooser not-none"
        

    }
}