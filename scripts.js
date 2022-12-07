const convertButton = document.getElementById("convert-button")
const selectConvertFrom = document.getElementById("select-convert-from")
const selectConvertTo = document.getElementById("select-convert-to")
const inverterPositionButton = document.getElementById("inverter-position-button")

const convertValues = () => {

    const inputValue = document.getElementById("input-value")
    const convertedCurrencyValue = document.getElementById("converted-currency-value")
    const conversionCurrencyValue = document.getElementById("conversion-currency-value")

    const realDolar = 5.2
    const realEuro = 5.5
    const realBitcoin = 88506.9
    const dolarEuro = 0.95
    const dolarBitcoin = 16957.3
    const euroBitcoin = 16092.5

    if (selectConvertFrom.value === "R$ Real Brasileiro" &&
        selectConvertTo.value === "US$ Dólar Americano") {

        convertedCurrencyValue.innerHTML = new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BRL' }
        ).format(inputValue.value)

        conversionCurrencyValue.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputValue.value / realDolar)

    } else if (selectConvertFrom.value === "US$ Dólar Americano" &&
        selectConvertTo.value === "R$ Real Brasileiro") {

        convertedCurrencyValue.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputValue.value)

        conversionCurrencyValue.innerHTML = new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BRL' }
        ).format(inputValue.value * realDolar)
    }


    if (selectConvertFrom.value === "R$ Real Brasileiro" &&
        selectConvertTo.value === "€ Euro") {

        convertedCurrencyValue.innerHTML = new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BRL' }
        ).format(inputValue.value)

        conversionCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputValue.value / realEuro)

    } else if (selectConvertFrom.value === "€ Euro" &&
        selectConvertTo.value === "R$ Real Brasileiro") {

        convertedCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputValue.value)

        conversionCurrencyValue.innerHTML = new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BRL' }
        ).format(inputValue.value * realEuro)
    }


    if (selectConvertFrom.value === "R$ Real Brasileiro" &&
        selectConvertTo.value === "Bitcoin") {

        convertedCurrencyValue.innerHTML = new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BRL' }
        ).format(inputValue.value)

        conversionCurrencyValue.innerHTML = (inputValue.value / realBitcoin).toFixed(3)

    } else if (selectConvertFrom.value === "Bitcoin" &&
        selectConvertTo.value === "R$ Real Brasileiro") {

        convertedCurrencyValue.innerHTML = (inputValue.value * 1).toFixed(3)

        conversionCurrencyValue.innerHTML = new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BRL' }
        ).format(inputValue.value * realBitcoin)
    }


    if (selectConvertFrom.value === "US$ Dólar Americano" &&
        selectConvertTo.value === "€ Euro") {

        convertedCurrencyValue.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputValue.value)

        conversionCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputValue.value * dolarEuro)

    } else if (selectConvertFrom.value === "€ Euro" &&
        selectConvertTo.value === "US$ Dólar Americano") {

        convertedCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputValue.value)

        conversionCurrencyValue.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputValue.value / dolarEuro)
    }


    if (selectConvertFrom.value === "US$ Dólar Americano" &&
        selectConvertTo.value === "Bitcoin") {

        convertedCurrencyValue.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputValue.value)

        conversionCurrencyValue.innerHTML = (inputValue.value / dolarBitcoin).toFixed(3)

    } else if (selectConvertFrom.value === "Bitcoin" &&
        selectConvertTo.value === "US$ Dólar Americano") {

        convertedCurrencyValue.innerHTML = (inputValue.value * 1).toFixed(3)

        conversionCurrencyValue.innerHTML = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputValue.value * dolarBitcoin)
    }


    if (selectConvertFrom.value === "€ Euro" &&
        selectConvertTo.value === "Bitcoin") {

        convertedCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputValue.value)

        conversionCurrencyValue.innerHTML = (inputValue.value / euroBitcoin).toFixed(3)

    } else if (selectConvertFrom.value === "Bitcoin" &&
        selectConvertTo.value === "€ Euro") {

        convertedCurrencyValue.innerHTML = (inputValue.value * 1).toFixed(3)

        conversionCurrencyValue.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputValue.value * euroBitcoin)
    }
}


const changeSelect = () => {

    const convertedCountryFlag = document.getElementById("converted-country-flag")
    const convertedCurrencyName = document.getElementById("converted-currency-name")
    const conversionCountryFlag = document.getElementById("conversion-country-flag")
    const conversionCurrencyName = document.getElementById("conversion-currency-name")

    if (selectConvertFrom.value === "R$ Real Brasileiro" &&
        selectConvertTo.value === "US$ Dólar Americano") {

        convertedCountryFlag.src = "./Assets/brasil.png"
        convertedCurrencyName.innerHTML = "Real"

        conversionCountryFlag.src = "./Assets/estados-unidos.png"
        conversionCurrencyName.innerHTML = "Dólar Americano"

    } else if (selectConvertFrom.value === "US$ Dólar Americano" &&
        selectConvertTo.value === "R$ Real Brasileiro") {

        convertedCountryFlag.src = "./Assets/estados-unidos.png"
        convertedCurrencyName.innerHTML = "Dólar Americano"

        conversionCountryFlag.src = "./Assets/brasil.png"
        conversionCurrencyName.innerHTML = "Real"
    }


    if (selectConvertFrom.value === "R$ Real Brasileiro" &&
        selectConvertTo.value === "€ Euro") {

        convertedCountryFlag.src = "./Assets/brasil.png"
        convertedCurrencyName.innerHTML = "Real"

        conversionCountryFlag.src = "./Assets/Euro.png"
        conversionCurrencyName.innerHTML = "Euro"

    } else if (selectConvertFrom.value === "€ Euro" &&
        selectConvertTo.value === "R$ Real Brasileiro") {

        convertedCountryFlag.src = "./Assets/Euro.png"
        convertedCurrencyName.innerHTML = "Euro"

        conversionCountryFlag.src = "./Assets/brasil.png"
        conversionCurrencyName.innerHTML = "Real"
    }


    if (selectConvertFrom.value === "R$ Real Brasileiro" &&
        selectConvertTo.value === "Bitcoin") {

        convertedCountryFlag.src = "./Assets/brasil.png"
        convertedCurrencyName.innerHTML = "Real"

        conversionCountryFlag.src = "./Assets/bit-coin.png"
        conversionCurrencyName.innerHTML = "Bitcoin"

    } else if (selectConvertFrom.value === "Bitcoin" &&
        selectConvertTo.value === "R$ Real Brasileiro") {

        convertedCountryFlag.src = "./Assets/bit-coin.png"
        convertedCurrencyName.innerHTML = "Bitcoin"

        conversionCountryFlag.src = "./Assets/brasil.png"
        conversionCurrencyName.innerHTML = "Real"
    }


    if (selectConvertFrom.value === "US$ Dólar Americano" &&
        selectConvertTo.value === "€ Euro") {

        convertedCountryFlag.src = "./Assets/estados-unidos.png"
        convertedCurrencyName.innerHTML = "Dólar Americano"

        conversionCountryFlag.src = "./Assets/Euro.png"
        conversionCurrencyName.innerHTML = "Euro"

    } else if (selectConvertFrom.value === "€ Euro" &&
        selectConvertTo.value === "US$ Dólar Americano") {

        convertedCountryFlag.src = "./Assets/Euro.png"
        convertedCurrencyName.innerHTML = "Euro"

        conversionCountryFlag.src = "./Assets/estados-unidos.png"
        conversionCurrencyName.innerHTML = "Dólar Americano"
    }


    if (selectConvertFrom.value === "US$ Dólar Americano" &&
        selectConvertTo.value === "Bitcoin") {

        convertedCountryFlag.src = "./Assets/estados-unidos.png"
        convertedCurrencyName.innerHTML = "Dólar Americano"

        conversionCountryFlag.src = "./Assets/bit-coin.png"
        conversionCurrencyName.innerHTML = "Bitcoin"

    } else if (selectConvertFrom.value === "Bitcoin" &&
        selectConvertTo.value === "US$ Dólar Americano") {

        convertedCountryFlag.src = "./Assets/bit-coin.png"
        convertedCurrencyName.innerHTML = "Bitcoin"

        conversionCountryFlag.src = "./Assets/estados-unidos.png"
        conversionCurrencyName.innerHTML = "Dólar Americano"
    }


    if (selectConvertFrom.value === "€ Euro" &&
        selectConvertTo.value === "Bitcoin") {

        convertedCountryFlag.src = "./Assets/Euro.png"
        convertedCurrencyName.innerHTML = "Euro"

        conversionCountryFlag.src = "./Assets/bit-coin.png"
        conversionCurrencyName.innerHTML = "Bitcoin"

    } else if (selectConvertFrom.value === "Bitcoin" &&
        selectConvertTo.value === "€ Euro") {

        convertedCountryFlag.src = "./Assets/bit-coin.png"
        convertedCurrencyName.innerHTML = "Bitcoin"

        conversionCountryFlag.src = "./Assets/Euro.png"
        conversionCurrencyName.innerHTML = "Euro"
    }

    convertValues()
    equalValueAlert()
}

const invertSelectPosition = () => {

    let convertFromValue = selectConvertFrom.value
    selectConvertFrom.value = selectConvertTo.value  
    selectConvertTo.value = convertFromValue

    convertValues()
    changeSelect()
}

const equalValueAlert = () => {

    if (selectConvertFrom.value === selectConvertTo.value) {
        alert("Escolha valores diferentes")
    }
}


convertButton.addEventListener("click", convertValues)
selectConvertTo.addEventListener("change", changeSelect)
selectConvertFrom.addEventListener("change", changeSelect)
inverterPositionButton.addEventListener("click", invertSelectPosition)