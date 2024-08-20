import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import './Products.css'
import data from '../../utils/slider.json'
import { sliderSettings } from '../../utils/common'

const Products = () => {

    const SliderButtons = () => {
        const swiper = useSwiper();
        return (
            <div className='flexCenter p-buttons'>
                <button onClick={() => swiper.slidePrev()}>&lt;</button>
                <button onClick={() => swiper.slideNext()}>&gt;</button>
            </div>
        )
    }
  return (
    <section className='p-wrapper'>
        <div className='flexCenter paddings innerWidth p-container'>
            <div className='p-head flexColStart'>
                <span className='primaryText'> Highlighted Products</span>
            </div>

            <Swiper {...sliderSettings } >
                    <SliderButtons/>
                {
                    data.map((card,i) => (
                        <SwiperSlide key={i}>
                            <div className='flexColStart p-card'>
                                
                                    <img src={card.image} alt='product'/>

                                    <span className='primaryText'>{card.name}</span>
                                
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
            
    </section>

  )
}

export default Products

