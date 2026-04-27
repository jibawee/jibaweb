import { NavLink, Outlet } from 'react-router'


export default function Root() {
    return (
        <>
            
        <div>
            <nav className="fixed w-full bg-[url('/teeth2.jpg')] bg-fill bg-bottom-right bg-size-100%-20% fixed z-1000 t-0 l-0">
                <ul className="flex items-center text-center justify-around px-3 py-5 text-3xl text-black">
                    
                    <li>
                        <NavLink to='/' className="">
                            jibaweb
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/projects' className="">
                            projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/art' className="">
                            art
                        </NavLink>
                    </li>
                </ul>
            </nav>
            

            <main className="relative z-10">
                <Outlet />
            </main>
        </div>
        </>
    )
}
