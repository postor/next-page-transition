import Link from 'next/link'

const About = () => (<div style={{
  position: 'absolute',
  backgroundColor: 'hsl(158, 50%, 80%)',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
}}>
  <p>about page</p>
  <Link href="/"><a>home</a></Link>
  <style jsx global>{`html,body{margin:0;padding:0;}`}</style>
</div>)

export default About