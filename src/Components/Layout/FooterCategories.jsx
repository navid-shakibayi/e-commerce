import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const FooterCategories = ({

}) => {

    const [categoriesData, setCategoriesData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('http://localhost:1337/api/footer-category?populate=*')
            .then(res => res.json())
            .then(data => {
                setCategoriesData(data.data.attributes)
            }).catch(err => {
                setError(err.message)
            })
    }, [])

    return <>
        {
            categoriesData && <>
                <p className="text-lg font-bold mb-2">{categoriesData.title}</p>
                {
                    categoriesData.categories.data.map(item => {
                        return <div key={item.id}>
                            <Link to={item.attributes.url}>{item.attributes.title}</Link>
                        </div>
                    })
                }
            </>
        }
    </>
}

export default FooterCategories