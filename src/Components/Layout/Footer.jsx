import FooterAbout from "./FooterAbout"
import FooterCategories from "./FooterCategories"
import FooterContact from "./FooterContact"
import FooterLinks from "./FooterLinks"

const Footer = ({

}) => {

    return <>
        <section className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-16">
            <div>
                <FooterCategories />
            </div>
            <div>
                <FooterLinks />
            </div>
            <div>
                <FooterAbout />
            </div>
            <div>
                <FooterContact />
            </div>
        </section>
    </>
}

export default Footer