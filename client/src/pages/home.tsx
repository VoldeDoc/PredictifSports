import Typing from '../component/typed';
import Charts from '../component/charts';
import { AccordionBody } from '../component/accordion';

export default function Home() {
    return (
        <>
            <div className="container my-40 py-16 justify-center bg-slate-100 rounded-lg hero">
                <h3 className="text-center">
                    <span className="text-red-700 font-bold">o</span> Fully Integrated Point-of-sale System
                </h3>
                <div>
                    <Typing />
                </div>
                <p className="text-center">
                    Predictivo™ assists thousands of game-loving bettors and traders
                </p>
                <p className="text-center">
                    in making smarter, data-driven betting decisions every day.
                </p>

                <div className="text-center space-x-4 pt-4 py-5">
                    <button className="py-2 px-3 bg-red-800 rounded-md text-white">Get started</button>
                    <button className="py-2 px-3 bg-white rounded-md text-blueGray-700 border-2 border-blueGray-900">
                        Learn more
                    </button>
                </div>

                <div className="flex justify-center">
                    <Charts />
                </div>

                <div className="payment flex justify-between items-center bg-white rounded-md w-72 py-3 pl-6 space-x-3">
                    <div className="flex items-center space-x-2">
                        <img src="https://img.icons8.com/?size=100&id=pIPl8tqh3igN&format=png&color=000000" alt="" className='w-5 h-5' />
                        <div>
                            <h2 className="text-sm font-semibold">
                                Payment from #1032
                            </h2>
                            <p className="text-xs text-gray-500">Jan 21, 2019 3:30pm</p>
                        </div>
                    </div>

                    <div className="text-right">
                        <p className="font-medium text-lg">+ $250,000</p>
                        <p className="text-green-500 text-sm">completed</p>
                    </div>
                </div>


            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img src="Frame 4763.png" alt="" />
                    </div>
                    <div className="col-lg-6 pt-3">
                        <h2 className="text-5xl font-bold">Enhance Shop</h2>
                        <h2 className="text-5xl font-bold">Management Smoother</h2>
                        <h2 className="text-5xl font-bold">and More Efficient</h2>

                        <p className="py-7">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <hr />
                        <div className="paid flex py-7">
                            <div>
                                <button className="bg-red-900 px-8 py-4 rounded-lg"></button>
                                <h2 className="text-3xl py-4">Smooth Payments </h2>
                                <p>Duis aute irure dolor in velit reprehenderit in voluptate</p>
                            </div>
                            <div>
                                <button className="bg-red-900 px-8 py-4 rounded-lg"></button>
                                <h2 className="text-3xl py-4">Convenient shopping </h2>
                                <p>Duis aute irure dolor in velit reprehenderit in voluptate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-6 mb-24">
                <div className="pos">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="text-5xl font-bold">Elevate your POS</h2>
                            <h2 className="text-5xl font-bold">Experience with</h2>
                            <h2 className="text-5xl font-bold">Personalized Reports</h2>
                            <p className="py-7">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo.
                            </p>
                            <hr />
                            <div className="paid flex py-10">
                                <div>
                                    <h2 className="text-6xl text-blue-400">25%</h2>
                                    <h2 className="text-3xl py-4">Smooth Payments </h2>
                                    <p>Duis aute irure dolor in velit reprehenderit in voluptate</p>
                                </div>
                                <div>
                                    <h2 className="text-6xl text-blue-400">15%</h2>
                                    <h2 className="text-3xl py-4">Convenient shopping </h2>
                                    <p>Duis aute irure dolor in velit reprehenderit in voluptate</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-gray-300 px-14 py-48" style={{marginRight:"20px"}}>
                                <Charts  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mb-20">
                <div className="text-center">
                    <h2 className="text-6xl font-bold ">A powerful betting tool to gain</h2>
                    <h2 className="text-6xl font-bold ">an edge over the bookmarks</h2>
                    <div className="py-7">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque </p>
                        <p>
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>
                </div>

                <div className="row pt-7">
                    <div className="col-lg-6 pb-4">
                        <div className="pb-48 pt-9 px-14 rounded-lg border-2 border-black hover:bg-blue-100">
                            <h1 className="text-3xl">Data driven decision making</h1>
                            <p>
                                Identify your top-selling products, track sales trends, and adjust your inventory and
                                marketing strategies accordingly.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 pb-4">
                        <div className="pb-48 pt-9 px-14 rounded-lg border-2 bg-blue-100">
                            <h1 className="text-3xl">Payment processing</h1>
                            <p>Fast and secure payment processing is essential for customer satisfaction.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row ">
                    <div className="col-lg-4 pb-4">
                        <div className="pb-48 pt-9 px-14 rounded-lg border-2 bg-blue-100">
                            <h1 className="text-3xl">Customer Loyalty</h1>
                            <p>Fast and secure payment processing is essential for customer satisfaction.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 pb-4">
                        <div className="pb-48 pt-9 px-14 rounded-lg border-1 border-black">
                            <h1 className="text-3xl">Inventory Control</h1>
                            <p>Fast and secure payment processing is essential for customer satisfaction.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 pb-4">
                        <div className="pb-48 pt-9 px-14 rounded-lg border-1 border-black">
                            <h1 className="text-3xl">Staff Management</h1>
                            <p>Fast and secure payment processing is essential for customer satisfaction.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container accordion">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="text-5xl font-bold">Get Quick Answers</h2>
                        <h2 className="text-5xl py-4 font-bold">to Your Concerns </h2>
                        <p className="pb-10">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium totam rem aperiam perspiciatis
                        </p>
                        <p>Couldn’t find what you looking for?</p>
                        <p>write to us at</p>

                        <a href="mailto:support@domain.com">
                            Support@domain.com
                            <hr />
                        </a>
                    </div>
                    <div className="col-lg-6">
                        <AccordionBody />
                    </div>
                </div>
            </div>

            <div className="container my-10">
                <div
                    id="carouselId"
                    className="carousel slide bg-blue-800 rounded-lg pt-6 pb-60 px-6"
                    data-bs-ride="carousel"
                >
                    <ol className="carousel-indicators">
                        <li
                            data-bs-target="#carouselId"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="First slide"
                        ></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="2" aria-label="Third slide"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                        <div className="carousel-item active text-center pt-20 px-20">
                          <div className="flex space-x-3">
                          <img src="https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=000000" className='w-4 h-5' alt="" />
                          <img src="https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=000000" className='w-4 h-5' alt="" />
                          <img src="https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=000000" className='w-4 h-5' alt="" /><img src="https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=000000" alt="" className='w-4 h-5' />
                          <img src="https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=000000" className='w-4 h-5' alt="" />
                          </div>
                            <p className="text-2xl text-white pb-9">
                                “Axpos has been an essential part of our restaurant’s success. It’s easy for our staff
                                to use, and the integration with our kitchen and bar systems has improved order
                                accuracy. Our customers have noticed the difference!”
                            </p>
                            <hr className="text-whote" />
                            <div>
                                <p className="text-white">Madison Lee</p>
                                <p className="text-white">Restaurant owner</p>
                            </div>
                        </div>
                        <div className="carousel-item text-center pt-20 px-20">
                        <div className="flex space-x-3">
                          <img src="https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=000000" className='w-4 h-5' alt="" />
                          <img src="https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=000000" className='w-4 h-5' alt="" />
                          <img src="https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=000000" className='w-4 h-5' alt="" /><img src="https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=000000" alt="" className='w-4 h-5' />
                          <img src="https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=000000" className='w-4 h-5' alt="" />
                          </div>
                            <p className="text-2xl text-white pb-9">
                                “Axpos has been an essential part of our restaurant’s success. It’s easy for our staff
                                to use, and the integration with our kitchen and bar systems has improved order
                                accuracy. Our customers have noticed the difference!”
                            </p>
                            <hr className="text-white" />
                            <div>
                                <p className="text-white">Madison Lee</p>
                                <p className="text-white">Restaurant owner</p>
                            </div>
                        </div>
                        <div className="carousel-item text-center pt-20 px-20">
                        <div className="flex space-x-3">
                          <img src="https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=000000" className='w-4 h-5' alt="" />
                          <img src="https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=000000" className='w-4 h-5' alt="" />
                          <img src="https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=000000" className='w-4 h-5' alt="" /><img src="https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=000000" alt="" className='w-4 h-5' />
                          <img src="https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=000000" className='w-4 h-5' alt="" />
                          </div>
                            <p className="text-2xl text-white pb-9">
                                “Axpos has been an essential part of our restaurant’s success. It’s easy for our staff
                                to use, and the integration with our kitchen and bar systems has improved order
                                accuracy. Our customers have noticed the difference!”
                            </p>
                            <hr className="text-white" />
                            <div>
                                <p className="text-white">Madison Lee</p>
                                <p className="text-white">Restaurant owner</p>
                            </div>
                        </div>
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
            </div>
        </>
    );
}