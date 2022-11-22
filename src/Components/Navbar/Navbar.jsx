import React, { Component } from 'react'
import Home from '../Home/Home'

export class Navbar extends Component {
    render() {
        return (
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">

                    <div className="w-full navbar bg-base-300">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 font-bold">Shaggy Belco Sambo <sub className='ml-5 font-normal'>FullStack developer</sub></div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                            {/* desktop */}
                                <li><a>Home</a></li>
                                <li><a>About</a></li>
                                <li><a>Resume</a></li>
                                <li><a>Portfolio</a></li>
                                <li><a>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Content */}
                    <div><Home></Home></div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100">
                    {/* Mobile */}
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Resume</a></li>
                        <li><a>Portfolio</a></li>
                        <li><a>Contact</a></li>

                    </ul>

                </div>
            </div>
        )
    }
}

export default Navbar