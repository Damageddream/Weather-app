export const errorHandler = (()=>{
    const errorMessageDiv = document.querySelector('.invalid')


    const wrongCity = ()=>{
        errorMessageDiv.innerText = 'There is no such City'
        errorMessageDiv.style.display = 'grid'
    }

    const otherErrors = ()=>{
        errorMessageDiv.innerText = error
        errorMessageDiv.style.display = 'grid'
    }

    return{wrongCity, otherErrors}
})()