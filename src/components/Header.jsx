import logo from '../assets/images/logo.svg'
import { Navbar } from './Navbar'

export const Header = () => {
    return (
        <header className='absolute font-barlow w-full px-6 pt-8 flex place-content-between'>
            <img src={logo} alt="logo" />
            <Navbar />
        </header>
    )
}