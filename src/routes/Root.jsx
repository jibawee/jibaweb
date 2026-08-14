import { NavLink, Outlet } from 'react-router'


export default function Root() {
    return (
        <>
            
        <div className="relative min-h-screen text-white">
            <div className="inset-0">
            </div>
            <nav className="fixed z-50 w-full bg-[url('/nav.png')] bg-no-repeat bg-cover h-full">
                <ul className="flex items-center justify-around p-6 text-3xl text-amber-50">
                    
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
