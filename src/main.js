import './scss/main.scss'
import { createHeader } from './components/Header/index.js'
import { createFooter } from './components/Footer/index.js'
import { createProductPage } from './components/ProductPage/index.js'

const appContainer = document.querySelector('#app')
appContainer.innerHTML = ''


const header = createHeader()
const productPage = createProductPage()
const footer = createFooter()

appContainer.appendChild(header)
appContainer.appendChild(productPage)
appContainer.appendChild(footer)