import { NavLink, Outlet } from 'react-router'


export default function Root() {
    return (
        <>
            
        <div className="relative min-h-screen text-white">
            <div className="fixed inset-0 z-0">
            </div>
            <nav className="relative z-10 w-full border-b-2 border-white bg-[url('worm.jpg')] bg-cover bg-size-100%-20%">
                <ul className="flex items-center justify-around px-3 py-5 text-3xl">
                    
                    <li>
                        <NavLink to='/' className="flex items-center gap-2 text-white">
                            jibaweb
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/projects'>
                            projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/art'>
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
