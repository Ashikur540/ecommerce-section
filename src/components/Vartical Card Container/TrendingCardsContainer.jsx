import React from 'react';
import Slider from 'react-slick';
import { trendings } from '../../utils/data';
import { HorizontalCard } from '../cards/HorizontalCard';

export const TrendingCardsContainer = ({ what, For, whom }) => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        cssEase: "linear",
        nextArrow: <LeftArrow />,
        prevArrow: <RightArrow />,

    };
    return (
        <div className='my-4 p-2 '>
            <h3 className="text-left text-lg font-medium  py-4 pl-2">
                <span className="font-bold pr-2">{what}</span>
                {For} {whom}
            </h3>
            <Slider {...settings}>
                {trendings.map((img, i) => <HorizontalCard key={i} img={img} />)
                }
            </Slider>
            <div className="flex justify-end p-5 pt-0">
                <button className="group inline-flex items-center justify-center w-full h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded bg-dark text-white hover:bg-primary hover:text-white">
                    <span>See more</span>
                </button>
            </div>
        </div>
    )
}



export const LeftArrow = ({ onClick }) => {
    return (

        <button className="bg-dark h-7 w-7 rounded-full  justify-center items-center absolute -top-[10%] right-2 z-30 grid" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white text-center place-items-center">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>

        </button>

    )
}
export const RightArrow = ({ onClick }) => {
    return (
        <button className="bg-dark h-7 w-7 rounded-full flex justify-center items-center absolute -top-[10%] right-[10%] z-30" onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white text-center place-items-center">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75 " />
            </svg>


        </button>
    )
}