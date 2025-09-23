import Link from 'next/link'
import React from 'react'
// import vastOraLogo from '../../../public/image/mainlogo.png'

const TopSerchBar = () => {
  const navItemList=[
    {
      url: '/newlatest',
      title: 'New & Trending',
    },
    {
      url: '/player',
      title: 'Player',
    },
    {
      url: '/fan',
      title: 'Fan',
    },
    {
      url: '/retro',
      title: 'Retro'
    }
  ]
  return (
   <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <img src='image/mainlogo.png' alt="Vastora sports" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <button>
          <img src="image/logo.png" alt="Vastora sports" className='w-[70px] h-[60px]' />
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li> */}
              {/* </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li> */}
          {
            navItemList.map((item,index)=>{
              return <li key={index}>
                <Link href={item.url}>{item.title}</Link>
              </li>
            })
          }
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  )
}

export default TopSerchBar
