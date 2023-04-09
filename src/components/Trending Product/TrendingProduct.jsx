import React from 'react';
import { TrendingCardsContainer } from '../Vartical Card Container/TrendingCardsContainer';

export const TrendingProduct = () => {

    return (
        <section className='px-4  py-14 md:py-24 lg:py-32 container relative'>
            <h2 className="text-3xl font-medium tracking-wide leading-relaxed p-1 border-2 inline-block">
                <span className="font-bold pr-1">Trending</span>
                Product
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <TrendingCardsContainer what="Fashion" whom="Women" For="For"></TrendingCardsContainer>
                <TrendingCardsContainer what="Food" whom="Health" For="For"></TrendingCardsContainer>
                <TrendingCardsContainer what="Cosmetics" whom="Winter" For="For"></TrendingCardsContainer>
            </div>

        </section>
    )
}

