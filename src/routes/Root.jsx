import { NavLink, Outlet } from 'react-router'


export default function Root() {
    return (
        <>
            
        <div className="relative min-h-screen text-white">
            <div className="inset-0">
            </div>
            <nav className="fixed z-50 w-full bg-[url('/nav.png')] bg-no-repeat bg-cover min-h-50">
                <ul className="flex text-center justify-around mt-5 text-3xl text-amber-50">
                    
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
