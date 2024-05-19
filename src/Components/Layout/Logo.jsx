import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Logo = ({

}) => {

    const [logoData, setLogoData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('http://localhost:1337/api/branding')
            .then(res => res.json())
            .then(data => {
                setLogoData(data.data.attributes)
            }).catch(err => {
                setError(err.message)
            })
    }, [])

    return <>
        {
            logoData && <>
                <Link to={logoData.url} className="uppercase text-2xl font-semibold">{logoData.logoTitle}</Link>
            </>
        }
    </>
}

export default Logo