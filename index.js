
function makeRockImgShow(){
    document.getElementById("rockID").style.visibility = 'visible'
    document.getElementById("paperID").style.visibility = 'hidden'
    document.getElementById("scissorID").style.visibility = 'hidden'
}
function makePaperImgShow(){
    document.getElementById("rockID").style.visibility = 'hidden'
    document.getElementById("paperID").style.visibility = 'visible'
    document.getElementById("scissorID").style.visibility = 'hidden'
}
function makeScissorImgShow(){
    document.getElementById("rockID").style.visibility = 'hidden'
    document.getElementById("paperID").style.visibility ='hidden'
    document.getElementById("scissorID").style.visibility = 'visible'
}
