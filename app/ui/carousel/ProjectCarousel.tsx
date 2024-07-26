'use client';

import React, { useCallback, useEffect, useState } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import {NextButton, PrevButton, usePrevNextButtons} from "@/app/ui/carousel/CarouselArrowButton";
import {DotButton, useDotButton} from "@/app/ui/carousel/CarouselDotButton";
import {Image} from "@nextui-org/react";
import '@/styles/embla.css'
type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [
        Autoplay({ playOnInit: true, delay: 5000 })
    ])
    const [isPlaying, setIsPlaying] = useState(true)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)


    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const onButtonAutoplayClick = useCallback(
        (callback: () => void) => {
            const autoplay = emblaApi?.plugins()?.autoplay
            if (!autoplay) return

            const resetOrStop =
                autoplay.options.stopOnInteraction === false
                    ? autoplay.reset
                    : autoplay.stop

            resetOrStop()
            callback()
        },
        [emblaApi]
    )

    const toggleAutoplay = useCallback(() => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play
        playOrStop()
    }, [emblaApi])

    useEffect(() => {
        const autoplay = emblaApi?.plugins()?.autoplay
        if (!autoplay) return

        setIsPlaying(autoplay.isPlaying())
        emblaApi
            .on('autoplay:play', () => setIsPlaying(true))
            .on('autoplay:stop', () => setIsPlaying(false))
            .on('reInit', () => setIsPlaying(autoplay.isPlaying()))
    }, [emblaApi])

    return (
        <div className="mx-auto max-w-3xl">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y mx-12" onMouseEnter={toggleAutoplay} onMouseLeave={toggleAutoplay}>
                    {slides.map((index) => (
                        <div className="flex flex-0 flex-grow-0 flex-shrink-0 w-full min-w-0 px-2" key={index}>
                            <Image
                                className="rounded-xl block w-full h-auto min-w-0"
                                src={`https://picsum.photos/600/350?v=${index}`}
                                alt="Your alt text"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-1">
                <div className="flex justify-between">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}/>
                </div>

                {/*<div className="">*/}
                {/*    {scrollSnaps.map((_, index) => (*/}
                {/*        <DotButton*/}
                {/*            key={index}*/}
                {/*            onClick={() => onDotButtonClick(index)}*/}
                {/*            className={'bg-amber-200'}*/}
                {/*        />*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default EmblaCarousel
