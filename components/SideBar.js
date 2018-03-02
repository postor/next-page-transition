import Link from 'next/link'

export default () => (<ul style={{
  position: 'absolute',
  left: 0,
  top: '50%',
  transform: 'translate(0,-50%)',
  backgroundColor: 'hsl(16, 50%, 80%)',
  padding: '40px',
  lineHeight: '40px',
}}>
  <li><Link href="/"><a>Home</a></Link></li>
  <li><Link href="/about"><a>About</a></Link></li>
</ul>)