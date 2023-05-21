import React, { useEffect, useRef, useState } from 'react'
import styles from "./index.module.scss";
import Card from '@/component/elements/Card'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { youtube } from '@/component/pages/Home/dummy.api';

const MainContentReview = () => {
    const [state, setState] = useState({
        activeSlide: 0,
    });

    const { activeSlide } = state;
    const nodeRef = useRef(activeSlide);

    useEffect(() => {
        const interval = setInterval(() => {
            setState((prev) => ({
                ...prev,
                activeSlide: (prev.activeSlide + 1) % youtube.length,
                nodeRef: activeSlide,
            }));
        }, 5000);
        return () => clearInterval(interval);
    })

    const handlePrevOrNext = (isNext: boolean) => {
        if (isNext) {
            setState((prev) => ({
                ...prev,
                activeSlide: (prev.activeSlide + 1) % youtube.length,
                nodeRef: activeSlide,
            }));
        } else {
            setState((prev) => ({
                ...prev,
                activeSlide: (prev.activeSlide - 1 + youtube.length) % youtube.length,
                nodeRef: activeSlide,
            }));
        }
    };
    return (
        <section className={styles.maxContainer}>
            <div className="flex gap-[44px]">
                <h1 className={styles.title}>Konten Review Pilihan.</h1>
                <div className={styles.line}>
                    <div />
                </div>
                <div className="flex gap-6">
                    <div className={styles.dots} onClick={() => handlePrevOrNext(false)}>
                        <ArrowBackIcon sx={{ color: 'white' }} />
                    </div>
                    <div className={styles.dots} onClick={() => handlePrevOrNext(true)}>
                        <ArrowForwardIcon sx={{ color: 'white' }} />
                    </div>
                </div>
            </div>
            <div className={styles.contentReview}>
                <div className={styles.gridCardItems}>
                    {youtube.map((item, i) => (
                        <Card key={i}>
                            <div className="py-2 h-full flex flex-col p-6 gap-2 ">
                                <div
                                    className="flex-grow font-tebal text-lg items-stretch  "
                                >
                                    {item.title}
                                </div>
                                <div
                                    className="flex-grow font-tebal text-lg items-stretch  "
                                >
                                    <p className="line-clamp-3 text-justify text-xxmedium leading-[24px] font-[400] font-satoshi text-dark">
                                        {item.description}
                                    </p>
                                </div>

                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MainContentReview