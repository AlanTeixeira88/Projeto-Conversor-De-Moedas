/*const button = document.querySelector('button')
const selectConvertTo = document.getElementById('select-convert-to')

const dolar = 5.2
const euro = 5.5
const bitcoin = 88374.5

const convertValue = () => {
    const inputValue = document.getElementById('input-value').value
    const convertedCurrency = document.getElementById('converted-currency-value')
    const conversionCurrency = document.getElementById('conversion-currency-value')

    //realValueText.innerHTML = inputValue
    //curencyValueText.innerHTML = inputValue / dolar

    convertedCurrency.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputValue)

    if (selectConvertTo.value === 'US$ Dólar Americano') {
        conversionCurrency.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputValue / dolar)
    }

    if (selectConvertTo.value === '€ Euro') {
        conversionCurrency.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputValue / euro)
    }

    if (selectConvertTo.value === 'Bitcoin') {
        conversionCurrency.innerHTML = (inputValue / bitcoin).toFixed(3)
    }
}

const conversionCurrencyChange = () => {

    const countryFlag = document.getElementById('conversion-country-flag')
    const conversionCurrencyName = document.getElementById('conversion-currency-name')

    if (selectConvertTo.value === 'US$ Dólar Americano') {
        countryFlag.src = "./Assets/estados-unidos.png"
        conversionCurrencyName.innerHTML = 'Dólar Americano'
    } else if (selectConvertTo.value === '€ Euro') {
        countryFlag.src = "./Assets/Euro.png"
        conversionCurrencyName.innerHTML = 'Euro'
    } else {
        countryFlag.src = "./Assets/bit-coin.png"
        conversionCurrencyName.innerHTML = 'Bitcoin'
    }

    convertValue()
}

button.addEventListener('click', convertValue)
selectConvertTo.addEventListener('change', conversionCurrencyChange)
*/
