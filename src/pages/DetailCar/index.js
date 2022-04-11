import { Car, ICCalender, ICSetting, ICUsers } from "../../assets"
import { Btn, Navbar, Search, Jumbotron } from "../../component"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"



const DetailCar = () => {
    const { idCar } = useParams()
    const [dataCarDetail, setDataCarDetail] = useState([])

    useEffect(() => {
        axios.get(`https://rent-cars-api.herokuapp.com/customer/car/${idCar}`)
            .then(res => {
                setDataCarDetail(res.data)
            }).catch(err => console.log(err))
    }, [])

    const rupiah = (number)=>{
        return new Intl.NumberFormat("id-ID",{
            style: "currency",
            currency: "IDR"
        }).format(number)
    }

    return (
        <>
            <div className="bg-emerald-50">
                <Navbar />
                <Jumbotron />
            </div>
            <div className="z-10 relative container mx-auto -top-16">
                <Search />
            </div>
            <div className="md:container md:mx-auto relative -mt-10">
                <div className="space-y-8 lg:space-y-0 lg:flex lg:space-x-8">
                    <div className="p-8" style={{ boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.15)' }}>
                        <div >
                            <div>
                                <p className="font-bold ">Tentang Paket</p>
                                <div className="font-light mt-6">
                                    <p>Include</p>
                                    <ul className="list-disc space-y-2">
                                        <li> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </li>
                                        <li> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </li>
                                        <li> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </li>
                                    </ul>
                                </div>
                                <div className="font-light mt-6">
                                    <p>Include</p>
                                    <ul className="list-disc space-y-2">
                                        <li> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </li>
                                        <li> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </li>
                                        <li> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </li>
                                    </ul>
                                </div>
                                <p className="font-bold mt-6">Tentang Paket</p>
                                <div className="font-light mt-6">
                                    <p>Include</p>
                                    <ul className="list-disc space-y-2">
                                        <li> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </li>
                                        <li> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </li>
                                        <li> is simply dummy text of the printiis simply dummy text of the printiis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </li>
                                    </ul>
                                </div>
                                <div className=" flex justify-end">
                                    <div className="w-[178px]">
                                        <Btn title={'Lanjutkan Pembayaran'} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div className="w-[405px] border p-6">
                            <div className="py-7 flex justify-center ">
                                <img src={Car} className="w-[270px] h-[160px]" />
                            </div>
                            <p className="text-sm">{dataCarDetail.name}</p>
                            <div className="space-x-4 flex mt-2">
                                <div className="flex items-center ">
                                    <img className="w-[12px] h-[12px]" src={ICUsers} />
                                    <p className="ml-1 text-[10px] font-light text-[#8A8A8A]">4 orang</p>
                                </div>
                                <div className="flex items-center ">
                                    <img className="w-[12px] h-[12px]" src={ICSetting} />
                                    <p className="ml-1 text-[10px] font-light text-[#8A8A8A]">Manual</p>
                                </div>
                                <div className="flex items-center ">
                                    <img className="w-[12px] h-[12px]" src={ICCalender} />
                                    <p className="ml-1 text-[10px] font-light text-[#8A8A8A]">Tahun 2020</p>
                                </div>
                            </div>
                            <div className="flex justify-between mt-[49px] mb-6">
                                <p className="text-sm font-light">Total</p>
                                <p className="font-bold text-sm">{rupiah(dataCarDetail.price)}</p>
                            </div>
                            <Btn title={'Lanjutkan Pembayaran'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DetailCar 