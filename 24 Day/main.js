let mass = 0
let powerTaj = 0
let massFormula = mass * powerTaj 
const massInput = document.getElementById('mass')
const planetSelect = document.getElementsByTagName('select')
const description = document.getElementsByClassName('description')
const image = document.getElementsByClassName('image')
const button = document.querySelector('button')
const flexContainer = document.getElementsByClassName('flex-container')
button.addEventListener('click', e => {
    const imgElem = document.createElement('img')
    const text = document.createElement('p')
    const massDiv = document.createElement('div')
    massDiv.className = 'mass-number'
    text.className = 'descr-text'
    if (massInput.value == '' ){
        image[0].innerHTML = ''
        description[0].innerHTML =''
        flexContainer[0].style.justifyContent = 'center'
        const textMessage = document.createElement('div')
        description[0].style.display = 'flex'
        textMessage.textContent = 'Mass is required'
        textMessage.style.backgroundColor = 'grey'
        textMessage.style.color = 'white'
        textMessage.style.padding = '25px'
        textMessage.style.fontSize = '40px'
        textMessage.style.borderRadius = '10px'
        description[0].appendChild(textMessage)
    }
    else {
        switch (planetSelect[0].value){
            case 'none':
                description[0].innerHTML = ''
                description[0].style.display = 'flex'
                flexContainer[0].style.justifyContent = 'center'
                const textMessage = document.createElement('div')
                textMessage.textContent = 'You did not choose planet yet'
                textMessage.style.backgroundColor = 'grey'
                textMessage.style.color = 'white'
                textMessage.style.padding = '25px'
                textMessage.style.fontSize = '40px'
                textMessage.style.borderRadius = '10px'
                image[0].innerHTML = ''
                description[0].appendChild(textMessage)
                break;
            case 'MERCURY':
                flexContainer[0].style.justifyContent = 'space-between'
                description[0].innerHTML = ''
                image[0].innerHTML = ''
                description[0].style.display = 'flex'
                text.textContent = `The weight of the object on ${planetSelect[0].value}`
                text.style.color = 'white'
                text.style.fontSize = '25px'
                text.style.fontWeight = '400'
                text.style.textAlign = 'center'
                massDiv.textContent = `${(massInput.value * 3.7).toFixed(2)} N`
                massDiv.style.borderRadius = '50%'
                massDiv.style.padding = '15px'
                massDiv.style.color = 'white'
                massDiv.style.backgroundColor ='rgba(97, 97, 97, 0.5)'
                massDiv.style.height = '100px'
                massDiv.style.width = '100px'
                massDiv.style.textAlign = 'center'
                massDiv.style.alignContent = 'center'
                massDiv.style.fontFamily = 'Montserrat;'
                massDiv.style.fontSize = '20px'
                massDiv.style.fontWeight = '500'
                imgElem.src = './images/mercury.gif'
                image[0].appendChild(imgElem)
                description[0].appendChild(text)
                description[0].appendChild(massDiv)
                break;
            case 'VENUS':
                flexContainer[0].style.justifyContent = 'space-between'
                description[0].innerHTML = ''
                image[0].innerHTML = ''
                description[0].style.display = 'flex'
                text.textContent = `The weight of the object on ${planetSelect[0].value}`
                text.style.color = 'white'
                text.style.fontSize = '25px'
                text.style.fontWeight = '400'
                text.style.textAlign = 'center'
                massDiv.textContent = `${(massInput.value * 8.87).toFixed(2)} N`
                massDiv.style.borderRadius = '50%'
                massDiv.style.padding = '15px'
                massDiv.style.color = 'white'
                massDiv.style.backgroundColor ='rgba(97, 97, 97, 0.5)'
                massDiv.style.height = '100px'
                massDiv.style.width = '100px'
                massDiv.style.textAlign = 'center'
                massDiv.style.alignContent = 'center'
                massDiv.style.fontFamily = 'Montserrat;'
                massDiv.style.fontSize = '20px'
                massDiv.style.fontWeight = '400'
                imgElem.src = './images/venus.gif'
                image[0].appendChild(imgElem)
                description[0].appendChild(text)
                description[0].appendChild(massDiv)
                break;
            case 'EARTH':
                flexContainer[0].style.justifyContent = 'space-between'
                description[0].innerHTML = ''
                image[0].innerHTML = ''
                description[0].style.display = 'flex'
                text.textContent = `The weight of the object on ${planetSelect[0].value}`
                text.style.color = 'white'
                text.style.fontSize = '25px'
                text.style.fontWeight = '400'
                text.style.textAlign = 'center'
                massDiv.textContent = `${(massInput.value * 9.8).toFixed(2)} N`
                massDiv.style.borderRadius = '50%'
                massDiv.style.padding = '15px'
                massDiv.style.color = 'white'
                massDiv.style.backgroundColor ='rgba(97, 97, 97, 0.5)'
                massDiv.style.height = '100px'
                massDiv.style.width = '100px'
                massDiv.style.textAlign = 'center'
                massDiv.style.alignContent = 'center'
                massDiv.style.fontFamily = 'Montserrat;'
                massDiv.style.fontSize = '20px'
                massDiv.style.fontWeight = '400'
                imgElem.src = './images/earth.gif'
                image[0].appendChild(imgElem)
                description[0].appendChild(text)
                description[0].appendChild(massDiv)
                break;
                case 'MOON':
                    flexContainer[0].style.justifyContent = 'space-between'
                    description[0].innerHTML = ''
                    image[0].innerHTML = ''
                    description[0].style.display = 'flex'
                    text.textContent = `The weight of the object on ${planetSelect[0].value}`
                    text.style.color = 'white'
                    text.style.fontSize = '25px'
                    text.style.fontWeight = '400'
                    text.style.textAlign = 'center'
                    massDiv.textContent = `${(massInput.value * 1.62).toFixed(2)} N`
                    massDiv.style.borderRadius = '50%'
                    massDiv.style.padding = '15px'
                    massDiv.style.color = 'white'
                    massDiv.style.backgroundColor ='rgba(97, 97, 97, 0.5)'
                    massDiv.style.height = '100px'
                    massDiv.style.width = '100px'
                    massDiv.style.textAlign = 'center'
                    massDiv.style.alignContent = 'center'
                    massDiv.style.fontFamily = 'Montserrat;'
                    massDiv.style.fontSize = '20px'
                    massDiv.style.fontWeight = '400'
                    imgElem.src = './images/moon.gif'
                    image[0].appendChild(imgElem)
                    description[0].appendChild(text)
                    description[0].appendChild(massDiv)
                    break;
                    case 'MARS':
                        flexContainer[0].style.justifyContent = 'space-between'
                        description[0].innerHTML = ''
                        image[0].innerHTML = ''
                        description[0].style.display = 'flex'
                        text.textContent = `The weight of the object on ${planetSelect[0].value}`
                        text.style.color = 'white'
                        text.style.fontSize = '25px'
                        text.style.fontWeight = '400'
                        text.style.textAlign = 'center'
                        massDiv.textContent = `${(massInput.value * 3.7).toFixed(2)} N`
                        massDiv.style.borderRadius = '50%'
                        massDiv.style.padding = '15px'
                        massDiv.style.color = 'white'
                        massDiv.style.backgroundColor ='rgba(97, 97, 97, 0.5)'
                        massDiv.style.height = '100px'
                        massDiv.style.width = '100px'
                        massDiv.style.textAlign = 'center'
                        massDiv.style.alignContent = 'center'
                        massDiv.style.fontFamily = 'Montserrat;'
                        massDiv.style.fontSize = '20px'
                        massDiv.style.fontWeight = '400'
                        imgElem.src = './images/mars.gif'
                        image[0].appendChild(imgElem)
                        description[0].appendChild(text)
                        description[0].appendChild(massDiv)
                        break;
                    case 'JUPITER':
                        flexContainer[0].style.justifyContent = 'space-between'
                        description[0].innerHTML = ''
                        image[0].innerHTML = ''
                        description[0].style.display = 'flex'
                        text.textContent = `The weight of the object on ${planetSelect[0].value}`
                        text.style.color = 'white'
                        text.style.fontSize = '25px'
                        text.style.fontWeight = '400'
                        text.style.textAlign = 'center'
                        massDiv.textContent = `${(massInput.value * 24.8).toFixed(2)} N`
                        massDiv.style.borderRadius = '50%'
                        massDiv.style.padding = '15px'
                        massDiv.style.color = 'white'
                        massDiv.style.backgroundColor ='rgba(97, 97, 97, 0.5)'
                        massDiv.style.height = '100px'
                        massDiv.style.width = '100px'
                        massDiv.style.textAlign = 'center'
                        massDiv.style.alignContent = 'center'
                        massDiv.style.fontFamily = 'Montserrat;'
                        massDiv.style.fontSize = '20px'
                        massDiv.style.fontWeight = '400'
                        imgElem.src = './images/jupiter.gif'
                        image[0].appendChild(imgElem)
                        description[0].appendChild(text)
                        description[0].appendChild(massDiv)
                        break;
                        case 'SATURN':
                            flexContainer[0].style.justifyContent = 'space-between'
                            description[0].innerHTML = ''
                            image[0].innerHTML = ''
                            description[0].style.display = 'flex'
                            text.textContent = `The weight of the object on ${planetSelect[0].value}`
                            text.style.color = 'white'
                            text.style.fontSize = '25px'
                            text.style.fontWeight = '400'
                            text.style.textAlign = 'center'
                            massDiv.textContent = `${(massInput.value * 10.4).toFixed(2)} N`
                            massDiv.style.borderRadius = '50%'
                            massDiv.style.padding = '15px'
                            massDiv.style.color = 'white'
                            massDiv.style.backgroundColor ='rgba(97, 97, 97, 0.5)'
                            massDiv.style.height = '100px'
                            massDiv.style.width = '100px'
                            massDiv.style.textAlign = 'center'
                            massDiv.style.alignContent = 'center'
                            massDiv.style.fontFamily = 'Montserrat;'
                            massDiv.style.fontSize = '20px'
                            massDiv.style.fontWeight = '400'
                            imgElem.src = './images/saturn.gif'
                            image[0].appendChild(imgElem)
                            description[0].appendChild(text)
                            description[0].appendChild(massDiv)
                            break;
                        case 'URANUS':
                            flexContainer[0].style.justifyContent = 'space-between'
                            description[0].innerHTML = ''
                            image[0].innerHTML = ''
                            description[0].style.display = 'flex'
                            text.textContent = `The weight of the object on ${planetSelect[0].value}`
                            text.style.color = 'white'
                            text.style.fontSize = '25px'
                            text.style.fontWeight = '400'
                            text.style.textAlign = 'center'
                            massDiv.textContent = `${(massInput.value * 8.87).toFixed(2)} N`
                            massDiv.style.borderRadius = '50%'
                            massDiv.style.padding = '15px'
                            massDiv.style.color = 'white'
                            massDiv.style.backgroundColor ='rgba(97, 97, 97, 0.5)'
                            massDiv.style.height = '100px'
                            massDiv.style.width = '100px'
                            massDiv.style.textAlign = 'center'
                            massDiv.style.alignContent = 'center'
                            massDiv.style.fontFamily = 'Montserrat;'
                            massDiv.style.fontSize = '20px'
                            massDiv.style.fontWeight = '400'
                            imgElem.src = './images/uranus.gif'
                            image[0].appendChild(imgElem)
                            description[0].appendChild(text)
                            description[0].appendChild(massDiv)
                            break;
                        case 'NEPTUNE':
                            flexContainer[0].style.justifyContent = 'space-between'
                            description[0].innerHTML = ''
                            image[0].innerHTML = ''
                            description[0].style.display = 'flex'
                            text.textContent = `The weight of the object on ${planetSelect[0].value}`
                            text.style.color = 'white'
                            text.style.fontSize = '25px'
                            text.style.fontWeight = '400'
                            text.style.textAlign = 'center'
                            massDiv.textContent = `${(massInput.value * 10.15).toFixed(2)} N`
                            massDiv.style.borderRadius = '50%'
                            massDiv.style.padding = '15px'
                            massDiv.style.color = 'white'
                            massDiv.style.backgroundColor ='rgba(97, 97, 97, 0.5)'
                            massDiv.style.height = '100px'
                            massDiv.style.width = '100px'
                            massDiv.style.textAlign = 'center'
                            massDiv.style.alignContent = 'center'
                            massDiv.style.fontFamily = 'Montserrat;'
                            massDiv.style.fontSize = '20px'
                            massDiv.style.fontWeight = '400'
                            imgElem.src = './images/neptune.gif'
                            image[0].appendChild(imgElem)
                            description[0].appendChild(text)
                            description[0].appendChild(massDiv)
                            break;
                        case 'PLUTO':
                            flexContainer[0].style.justifyContent = 'space-between'
                            description[0].innerHTML = ''
                            image[0].innerHTML = ''
                            description[0].style.display = 'flex'
                            text.textContent = `The weight of the object on ${planetSelect[0].value}`
                            text.style.color = 'white'
                            text.style.fontSize = '25px'
                            text.style.fontWeight = '400'
                            text.style.textAlign = 'center'
                            massDiv.textContent = `${(massInput.value * 0.66).toFixed(2)} N`
                            massDiv.style.borderRadius = '50%'
                            massDiv.style.padding = '15px'
                            massDiv.style.color = 'white'
                            massDiv.style.backgroundColor ='rgba(97, 97, 97, 0.5)'
                            massDiv.style.height = '100px'
                            massDiv.style.width = '100px'
                            massDiv.style.textAlign = 'center'
                            massDiv.style.alignContent = 'center'
                            massDiv.style.fontFamily = 'Montserrat;'
                            massDiv.style.fontSize = '20px'
                            massDiv.style.fontWeight = '400'
                            imgElem.src = './images/pluto.gif'
                            image[0].appendChild(imgElem)
                            description[0].appendChild(text)
                            description[0].appendChild(massDiv)
                            break;
        }
    }
})