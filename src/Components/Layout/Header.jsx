import { useState } from "react"
import AmericaFlag from "../Svg/AmericaFlag"
import IranFlag from "../Svg/IranFlag"
import ArrowDown from "../Svg/ArrowDown"
import Categories from "./Categories"
import Logo from "./Logo"
import Navbar from "./Navbar"
import Search from "../Svg/Search"
import User from "../Svg/User"
import Heart from "../Svg/Heart"
import Cart from "../Svg/Cart"

const Header = ({

}) => {

    const [open, setOpen] = useState(false)

    const clickHandler = () => {
        setOpen(!open)
    }

    return <>
        <section className="max-w-7xl mx-auto px-6 flex justify-between items-center mt-4">
            <div className="flex gap-4 items-center">
                <div
                    onClick={clickHandler}
                    className="flex cursor-pointer w-fit justify-center items-center"
                >
                    <div>
                        <AmericaFlag />
                        <div className={open ? "block" : "hidden"}>
                            <AmericaFlag />
                            <IranFlag />
                        </div>
                    </div>
                    <ArrowDown />
                </div>

                <div className="flex cursor-pointer w-fit justify-center items-center">
                    <div>
                        USD
                    </div>
                    <ArrowDown />
                </div>

                <Categories />
            </div>

            <Logo />

            <div className="flex gap-2">
                <Navbar />
                <Search />
                <User />
                <Heart />
                <div className="relative">
                    <Cart />
                    <span className="bg-blue-400 text-white p-0.5 rounded-full absolute -top-4 -right-4 w-7 h-7 aspect-square flex justify-center items-center">0</span>
                </div>
            </div>
        </section>
    </>
}

export default Header