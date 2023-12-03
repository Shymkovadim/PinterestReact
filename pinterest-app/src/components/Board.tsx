/* eslint-disable jsx-a11y/alt-text */
import { BoardsProps } from "../types"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { NavLink } from "react-router-dom";

export const Board: React.FC<BoardsProps> = ({ boards }) => (
    <Swiper
        spaceBetween={30}
        slidesPerView={3.5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper: any) => console.log(swiper)}
    >

        {boards.map(board => {
            return <SwiperSlide><NavLink to="/MyBoard">
                <div className="board__slide">
                    <h3>{board.name}</h3>
                </div></NavLink>
            </SwiperSlide>
        })}



    </Swiper >
);