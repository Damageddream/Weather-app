export const changeTempFarenCelc = (() => {
    const celcius = document.querySelector('.celc')
    const farenheit = document.querySelector('.faren')

    const toggleTemp = document.querySelector('.celcfaren')

    toggleTemp.addEventListener('click', ()=>{
        celcius.classList.toggle('active')
        farenheit.classList.toggle('active')
    })
})()