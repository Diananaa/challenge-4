import { Link } from 'react-router-dom'
import { Btn } from '../..'
import { ICCalender, ICSetting, ICUsers } from '../../../assets'
const Card = ({ listData }) => {
    const rupiah = (number)=>{
        return new Intl.NumberFormat("id-ID",{
            style: "currency",
            currency: "IDR"
        }).format(number)
    }

    return (
        <>
            {
                listData.map((data) => (
                    <div key={data.id} className=" w-auto h-auto border py-6 px-4 ">
                        <div className='p-8'>
                            <img src={data.image} className="w-full h-full" />
                        </div>
                        <div className='space-y-2 mb-4'>
                            <p>{data.name}</p>
                            <p className='font-bold'>{rupiah(data.price)} / hari</p>
                            <p className='font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className="space-y-4">
                            <div className='flex '>
                                <img src={ICUsers} className="w-6 h-6" />
                                <p className='pl-3  text-sm font-light '>4 orang</p>
                            </div>
                            <div className='flex '>
                                <img src={ICSetting} className="w-6 h-6" />
                                <p className='pl-3 text-sm font-light '>Manual</p>
                            </div>
                            <div className='flex '>
                                <img src={ICCalender} className="w-6 h-6" />
                                <p className='pl-3 text-sm font-light '>Tahun 2020</p>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <Link to={`/${data.id}`}>
                                <Btn title={'Pilih Mobil'} />
                            </Link>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
export default Card