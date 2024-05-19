import { useEffect, useState } from "react"

const FooterContact = ({

}) => {

    const [contactData, setContactData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('http://localhost:1337/api/footer-contact')
            .then(res => res.json())
            .then(data => {
                setContactData(data.data.attributes)
            }).catch(err => {
                setError(err.message)
            })
    }, [])

    return <>
        {
            contactData && <>
                <p className="text-lg font-bold mb-2">{contactData.title}</p>
                <p className="text-sm text-justify">{contactData.body}</p>
            </>
        }
    </>
}

export default FooterContact