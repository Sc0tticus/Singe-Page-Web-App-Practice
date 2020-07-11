import HomePage from './Pages/home.js'
import AboutPage from './Pages/about.js'
import Error404 from './Pages/error404.js'

const main = document.querySelector('#page')
const user = { name: "Gregg Garrison"    }
const routes = {
  '/': HomePage,
  "/about": AboutPage
}

function router(event){
  const path = window.location.hash.split('#')[1]||"/"
  const page = routes[path]

  if(page){
    main.innerHTML = page(user)
  }
  else{
    main.innerHTML = Error404()
  }
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)
