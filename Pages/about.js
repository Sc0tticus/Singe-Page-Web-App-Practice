export default function AboutPage(user){
  return ( `
    <section id="about">
        <h1>About Page</h1>
        <h2>Welcome Back ${user.name}!</h2>
    </section>
  `)
}