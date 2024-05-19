import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Categories = ({

}) => {

    const [categoriesData, setCategoriesData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('http://localhost:1337/api/categories')
            .then(res => res.json())
            .then(data => {
                setCategoriesData(data.data)
            }).catch(err => {
                setError(err.message)
            })
    }, [])

    return <>
        {
            categoriesData && categoriesData.map(item => {
                return <div key={item.id}>
                    <Link to={item.attributes.url} className="font-semibold">{item.attributes.title}</Link>
                </div>
            })
        }
    </>
}

export default Categories