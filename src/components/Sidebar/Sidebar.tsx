'use client'
import './style/Sidebar.css'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { svg } from '@/constants/imageLinks'
import { paths, socialMedia } from '@/constants/paths'

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div id='Sidebar' className='Sidebar'>
      <h1>Sensors AI</h1>

      <ul className='links-container'>
        {paths.map((path) => (
          <li key={path.href}>
            <Link
              href={path.href}
              className={clsx('inactive', { active: pathname === path.href })}
            >
              {path.icon && (
                <Image
                  src={svg[path.icon]}
                  width={25}
                  height={25}
                  alt={`${path.label} icon`}
                />
              )}
              <span>{path.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className='social-media'>
        {socialMedia.map((socialMed, index) => (
          <Link href={socialMed.href} target='_blank' key={index}>
            <Image
              src={socialMed.icon}
              width={30}
              height={30}
              alt='social media icon'
            ></Image>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
