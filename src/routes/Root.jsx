import { NavLink, Outlet } from 'react-router'


export default function Root() {
    return (
        <>
            
        <div className="relative min-h-screen text-white">
            <div className="fixed inset-0 z-0">
            </div>
            <nav className="relative z-10 w-full  bg-[url('teeth2.jpg')] bg-fill bg-bottom-right bg-size-100%-20%">
                <ul className="flex items-center justify-around px-3 py-5 text-3xl text-black">
                    
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
