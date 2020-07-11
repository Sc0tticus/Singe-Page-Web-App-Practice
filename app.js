const main = document.querySelector('#page')
const user = { name: "Gregg Garrison"    }
const routes = {
  '/': HomePage,
  "/about": AboutPage
}

function HomePage(){
  return ( `
    <section id="home">
        <h1>Home Page</h1>
    </section>
  ` )
}

function AboutPage(){
  return ( `
    <section id="about">
        <h1>About Page</h1>
        <h2>Welcome Back ${user.name}!</h2>
    </section>
  `)
}

function router(event){
  const path = window.location.hash.split('#')[1]||"/"
  const page = routes[path]

  if(page){
    page()
    main.innerHTML = page()
  }
  else{
    main.innerHTML = `
    <section>
        <h1>404 ERROR</h1>
    </section>
  `
  }


  
}

window.addEventListener('hashchange', router)
window.addEventListener('load', router)
