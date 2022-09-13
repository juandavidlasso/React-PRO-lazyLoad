import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom'
import logo from '../logo.svg'
import { routes } from './routes'

export const Navigation = () => {

    return (
        // El fallback permite mostrar un componente o un loading mientras se carga el componente
        <Suspense fallback={ <span>Loading...</span> }>
            <Router>
                <div className='main-layout'>
                    <nav>
                        <img src={logo} alt='React Logo' />
                        <ul>
                            {routes.map( (route) => {
                                const {to, name} = route

                                return (
                                    <li key={to}>
                                        <NavLink to={to} className={ ({isActive}) => isActive ? 'nav-active' : '' }>{name}</NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>

                    <Routes>
                        {routes.map( (route) => {
                            const {path, Component} = route

                            return (
                                <Route key={path} path={path} element={ <Component /> } />
                            )
                        })}
                        
                        <Route path='*' element={ <Navigate to={ routes[0].path } replace /> } />
                    </Routes>
                </div>
            </Router>
        </Suspense>
    )
}