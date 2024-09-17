import { cardData } from './card'

export default function CarouselHolder() {
   return(
    <>
    <div id="carouselId" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner" role="listbox">
            {cardData.map((data, index) => {
                return(
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={data.image} className='carousel-image'/>
                <div className="card-image bg-white shadow-lg ring-slate-600 rounded-lg  px-4 pb-4 space-y-3  max-w-sm ">
            <button className='bg-blue-400 font-medium py-1 px-1 border my-4 space-x-4 text-white rounded-md hover:bg-blue-700 focus:ring-2'>
                {data.topic}
            </button>
            <h1 className="home-text font-bold text-wrap text-2xl text-blueGray-900">
                {data.title}
            </h1>
            <div className="details flex  items-center space-x-4  ">
                <img src={data.image} alt="blogger image" className='w-10 h-10 rounded-full ' />
                <span className='name font-medium text-slate-500'>{data.author}</span>
                <span className='date font-medium text-zinc-600'>{data.date}</span>
            </div>
            </div>
        </div>
                )
            })}
        </div>
        <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="prev"
        >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="next"
        >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    </>
   )
}