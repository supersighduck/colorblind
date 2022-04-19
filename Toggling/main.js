document.getElementById('deuter').addEventListener('click', deuterToggle)
document.getElementById('protano').addEventListener('click', protanoToggle)
document.getElementById('tritano').addEventListener('click', tritanoToggle)

function deuterToggle(){
    document.getElementById('deuter1').classList.toggle('hidden')
    document.getElementById('protano2').classList.add('hidden')
    document.getElementById('tritano3').classList.add('hidden')
}

function protanoToggle(){
    document.getElementById('deuter1').classList.add('hidden')
    document.getElementById('protano2').classList.toggle('hidden')
    document.getElementById('tritano3').classList.add('hidden')
}

function tritanoToggle(){
    document.getElementById('deuter1').classList.add('hidden')
    document.getElementById('protano2').classList.add('hidden')
    document.getElementById('tritano3').classList.toggle('hidden')
}