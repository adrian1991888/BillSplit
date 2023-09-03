var inputPrice = document.querySelector('.price')
var inputPeople= document.querySelector('.people')
var inputSelect= document.querySelector('select')
var result= document.querySelector('.btn-count')
const endText= document.querySelector('.end-text')


function inputP() {
    let price = inputPrice.value
    let people = inputPeople.value
    let bonus = inputSelect.value

    if (inputPrice.value == "" || inputPeople.value == "" || inputSelect.value == "") {
        endText.textContent = 'Uzupełnij wszystkie pola'
        endText.style.color = 'brown'
    }
    else if(inputPrice.value == 0 || inputPeople.value == 0 || inputSelect.value == 0){
        endText.textContent = 'Wartości nie mogą być równe 0'
        endText.style.color = 'brown'
    }
    else{
        let x = (price/people) + ((bonus*price)/people)
        endText.textContent = `Powinniście się złożyć po ${x}`
    }

inputPrice.addEventListener('keyup', inputP)
inputPeople.addEventListener('keyup', inputP)
inputSelect.addEventListener('change', inputP)
}


result.addEventListener('click', inputP)
