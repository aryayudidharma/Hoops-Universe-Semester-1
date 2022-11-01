const form = document.getElementById("myForm")

function handleSubmit(e){
    const formData = new FormData(form)

    const name = formData.get('nameTxt')
    const gender = formData.get('gender')
    const email = formData.get('emailTxt')
    const date = formData.get('date')
    const num = formData.get('numTxt')
    const addr = formData.get('addrTxt')
    const postal = formData.get('postalTxt')
    const detail = formData.get('detailTxt')
    const method = formData.get('Payment')
    const cardnum = formData.get('cardnumTxt')

    let error = []

    if(!name){
        error.push("Name must be filled!")
    }

    if(!gender){
        error.push("Gender must be selected!")
    }

    if(!email){
        error.push("Email must be filled!")
    }

    if(!emailValidation(email)){
        error.push("Email not valid!")
    }

    if(date >= '2004-01-01'){
        error.push("You must be at least 18 year old!")
    }

    if(!num){
        error.push("Phone number must be filled!")
    }

    if(!numValidation(num)){
        error.push("Phone number must only be filled with numbers!")
    }

    if(num.length <= 9){
        error.push("Phone number must be longer than 9 numbers.")
    }

    if(!addr){
        error.push("Address must be filled!")
    }

    if(!postal){
        error.push("Postal code must be filled!")   
    }

    if(postal.length < 5 || postal.length > 5){
        error.push("Postal code must be 5 numbers.")
    }

    if(!detail){
        error.push("Product detail must be filled!")   
    }

    if(!method){
        error.push("Pick a payment method!")   
    }

    if(!cardnum){
        error.push("Card number must be filled!")   
    }

    if(!cardValidation(cardnum)){
        error.push("Invalid card number!")
    }

    if(error.length > 0){
        alert(error.join("\n"))
        errorMessage.innerHTML = error.join("</br>")
        e.preventDefault()
    }
    else{
        if(!confirm("Are you sure?")){
            e.preventDefault()
        }
    }
}

form.addEventListener('submit', handleSubmit)

function numValidation(num){
    for(let i = 0; i < num.length; i++){
        if(num[i] < "0" || num[i] > "9"){
            return false;
        }
    }
    return true;
}

function emailValidation(email){
    if(email[0] == '@') 
        return false

    var i = 1
    var len = email.length

    for(i; i < len; i++){
        if(email[i] == '@'){
            var hasAt = true
            i++
            break
        }
    }
    
    if(email[i] == '.') return false
    for(i; i < len; i++){
        if(email[i] == '@'){
            return false
        } 
    }

    if(hasAt)
    return true

    else return false
}

function cardValidation(cardnum){
    if(cardnum.length!=16) return false

        for(let j = 0; j < cardnum.length; j++){
            if(cardnum[j] < "0" || cardnum[j] > "9"){
                return false;
            }
        }
    return true;
}