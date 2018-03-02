import Link from 'next/link'

export default () => (<ul style={{
  position: 'absolute',
  left: 0,
  top: '50%',
  transform: 'translate(0,50%)',
}}>
  <li><Link href="/"><a>Home</a></Link></li>
  <li><Link href="/about"><a>About</a></Link></li>
</ul>)