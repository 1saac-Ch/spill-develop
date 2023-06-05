import React, { useState, useRef, useEffect } from 'react';
import NextLink from 'next/link'
import styles from "./index.module.scss";
import { hotriview } from '@/component/pages/Home/dummy.api';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import clsx from 'clsx';
import Card from "@/component/elements/Card";
import RatingStar from '@/component/elements/RatingStar';
import ProductCard from '@/component/catalogue/ProductCard';
import ComputerImage from '@/assets/images/computer.jpg'

const MainRecomendationProduct = () => {
    const [state, setState] = useState({
        activeSlide: 0,
    });

    const { activeSlide } = state;
    const nodeRef = useRef(activeSlide);
    const [slide, setSlide] = useState<string>();

    useEffect(() => {
        const interval = setInterval(() => {
            setState((prev) => ({
                ...prev,
                activeSlide: (prev.activeSlide + 1) % hotriview.length,
                nodeRef: activeSlide,
            }));
        }, 5000);
        return () => clearInterval(interval);
    })

    const handleChangeSlide = (index: number) => {
        if (index > activeSlide) {
            setSlide('')
        } else {
            setSlide('-')
        }
        setState((prev) => ({
            ...prev,
            activeSlide: index,
            nodeRef: activeSlide,
        }));
    };

    const handlePrevOrNext = (isNext: boolean) => {
        if (isNext) {
            setState((prev) => ({
                ...prev,
                activeSlide: (prev.activeSlide + 1) % hotriview.length,
                nodeRef: activeSlide,
            }));
        } else {
            setState((prev) => ({
                ...prev,
                activeSlide: (prev.activeSlide - 1 + hotriview.length) % hotriview.length,
                nodeRef: activeSlide,
            }));
        }
    };



    return (
        <div className="relative flex justify-center w-screen pb-10 ">
            <div className={styles.maxContainer}>
                <div className="flex gap-[44px] justify-between">
                    <h1 className={styles.title}>Rekomendasi Produk</h1>
                    <div className={styles.line}>
                        <div />
                    </div>
                    <div className="flex gap-[23px]">
                        <div className={styles.dots} onClick={() => handlePrevOrNext(false)}>
                            <ArrowBackIcon sx={{ color: 'white' }} />
                        </div>
                        <div className={styles.dots} onClick={() => handlePrevOrNext(true)}>
                            <ArrowForwardIcon sx={{ color: 'white' }} />
                        </div>
                    </div>
                </div>
                <SwitchTransition mode="out-in">
                    <CSSTransition
                        key={activeSlide}
                        classNames={{
                            enter: `opacity-0 translate-x-[${slide}50%] transition-all duration-500 ease-in-out`,
                            enterActive: `opacity-100 translate-x-[${slide}0] transition-all duration-500 ease-in-out`,
                            exit: 'opacity-100 transform scale-100 transition-all duration-500 ease-in-out',
                            exitActive: 'opacity-0 transform scale-90 transition-all duration-500 ease-in-out',
                        }}
                        timeout={500}
                    >
                        <div className={styles.gridCardItems}>
                            {hotriview[activeSlide].card.map((item, i) => (
                                <React.Fragment key={i}>
                                    <NextLink href="/detail-product" passHref>
                                        <ProductCard
                                            image={ComputerImage}
                                            title="Sony VM-1000x Wireless Headphone Bluetooth"
                                            review="32"
                                            rate={4.8}
                                            production="Sony"
                                            minPrize="Rp.1.000.000"
                                            maxPrize="Rp.1.430.000"
                                        />
                                    </NextLink>
                                </React.Fragment>
                            ))}
                        </div>
                    </CSSTransition>
                </SwitchTransition>
                <div className={styles.indicator}>
                    {hotriview.map((_, index) => (
                        <button key={index} className={clsx(styles.dot, { [styles.active]: index === activeSlide })} onClick={() => handleChangeSlide(index)} />
                    ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MainRecomendationProduct