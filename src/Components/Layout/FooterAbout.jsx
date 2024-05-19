import { useEffect, useState } from "react"

const FooterAbout = ({

}) => {

    const [aboutData, setAboutData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('http://localhost:1337/api/about')
            .then(res => res.json())
            .then(data => {
                setAboutData(data.data.attributes)
            }).catch(err => {
                setError(err.message)
            })
    }, [])

    return <>
        {
            aboutData && <>
                <p className="text-lg font-bold mb-2">{aboutData.title}</p>
                <p className="text-sm text-justify">{aboutData.body}</p>
            </>
        }
    </>
}

export default FooterAbout