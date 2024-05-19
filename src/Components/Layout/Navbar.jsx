import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Navbar = ({

}) => {

    const [navbarData, setNavbarData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('http://localhost:1337/api/navbars')
            .then(res => res.json())
            .then(data => {
                setNavbarData(data.data)
            }).catch(err => {
                setError(err.message)
            })
    })

    return <>
        <div className="flex items-center gap-4">
            {
                navbarData && navbarData.map(item => {
                    return <div key={item.id}>
                        <Link to={item.attributes.url} className="font-semibold">{item.attributes.title}</Link>
                    </div>
                })
            }
        </div>
    </>
}

export default Navbar