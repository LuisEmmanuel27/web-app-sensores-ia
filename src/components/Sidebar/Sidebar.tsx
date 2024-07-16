import Link from 'next/link'
import './style/Sidebar.css'
import Image from 'next/image'
import { svg } from '@/imageLinks'

const Sidebar = () => {
  return (
    <div id='Sidebar' className='Sidebar'>
      <h1>Sensors AI</h1>

      <ul>
        <li>
          <Link href='/'>Inicio</Link>
        </li>
        <li>
          <Link href='/Graficos'>Gráficos</Link>
        </li>
        <li>
          <Link href='/Reportes'>Reportes</Link>
        </li>
        <li>
          <Link href='/Configuracion'>Configuración</Link>
        </li>
        <li>
          <Link href='/Acerca_de'>Acerca de</Link>
        </li>
      </ul>

      <div>
        <Link href='#'>
          <Image src={svg.github} width={20} height={20} alt='lol'></Image>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
