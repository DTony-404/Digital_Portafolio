import Nav_Bar from './NavBar'
import BannerInicial from './Welcome'
import BannerProjects from './BannerProjects'

// #212529
export default function App(){
    return(
        <div>
            <Nav_Bar />
            <BannerInicial />
            <BannerProjects />
        </div>
    )
}

