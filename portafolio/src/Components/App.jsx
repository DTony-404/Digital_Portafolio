import Nav_Bar from './NavBar'
import BannerInicial from './Welcome'
import BannerProjects from './BannerProjects'
import BannerServicios from './BannerServicios'
import BannerImg from './BannerImg'
import BannerContacto from './BannerContacto'
import Footer from './Footer'


// #212529
export default function App(){
    return(
        <div>
            <Nav_Bar />
            <BannerInicial  />
            <BannerProjects />
            <BannerServicios />
            <BannerImg />
            <BannerContacto />
            <Footer />
        </div>
    )
}