import { useEffect, useState } from "react"
import { Card, Footer, Jumbotron, Navbar, Search } from "../../component"
import axios from "axios"

const Home = () => {
    const [listCar, setListCar] = useState([]);
    const [isClickSearch, setIsClickSearch] = useState(false)

    const reqData = async () => {
        const { data } = await axios('https://rent-cars-api.herokuapp.com/customer/car')
        setListCar(data)
        setIsClickSearch(!isClickSearch);
    }
    

    return (
        <>
            <div className="bg-emerald-50">
                <Navbar />
                <Jumbotron />
            </div>
            <div className="z-10 relative container mx-auto -top-16">
                <Search click={reqData} />
            </div>
            {
                isClickSearch ? (
                    <div className="md:container md:mx-auto relative -mt-10">
                        <div className="grid grid-cols-1 gap-6 container mx-auto sm:grid-cols-2 md:grid-cols-3 ">
                            <Card listData={listCar} />
                        </div>
                    </div>
                ) : null
            }

            <Footer />
        </>
    )
}
export default Home

