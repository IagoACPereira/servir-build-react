import { Link } from "react-router-dom"

export default function Header() {
  const ul = {
    display: 'flex',
    listStyle: 'none',
    gap: '2vh 2vw',
    paddingLeft: '0',
  }
  
  return (
    <div className="header">
      <h1>Teste React DOM</h1>

      <nav>
        <ul style={ul}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About us</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}