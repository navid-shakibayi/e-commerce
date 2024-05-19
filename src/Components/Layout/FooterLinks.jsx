import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const FooterLinks = ({

}) => {

    const [footerLinksData, setFooterLinksData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('http://localhost:1337/api/footer-link?populate=*')
            .then(res => res.json())
            .then(data => {
                setFooterLinksData(data.data.attributes)
            }).catch(err => {
                setError(err.message)
            })
    }, [])

    return <>
        {
            footerLinksData && <>
                <p className="text-lg font-bold mb-2">{footerLinksData.title}</p>
                {
                    footerLinksData.footer_link_items.data.map(item => {
                        return <div key={item.id}>
                            <Link to={item.attributes.url}>{item.attributes.title}</Link>
                        </div>
                    })
                }
            </>
        }
    </>
}

export default FooterLinks