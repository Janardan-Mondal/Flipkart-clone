import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const EmblaCarousel = ({ slides }) => {
    const AUTOPLAY_DELAY = 3000;

    const autoplay = useRef(
        Autoplay(
            { delay: AUTOPLAY_DELAY, stopOnInteraction: false },
            (emblaRoot) => emblaRoot.parentElement
        )
    );

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        autoplay.current,
    ]);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setIsAnimating(false);
        setTimeout(() => setIsAnimating(true), 50); // retrigger animation
    }, [emblaApi]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    return (
        <section
            className="relative flex flex-col justify-center items-center w-full mt-5 mx-auto bg-white cursor-pointer "
        >
            {/* Carousel Slides */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {slides.map((item, index) => (
                        <div
                            key={index}
                            className="min-w-full min-h-2.5 bg-gray-100 flex items-center justify-center"
                        >
                            <img src={item} alt="" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Buttons        */}
            <div className="absolute top-0 left-0 justify-between lg:flex w-full h-full items-center hidden">
                <button className="embla__prev bg-white rounded-r h-[88px] w-10 flex items-center justify-center" onClick={scrollPrev}>
                    <MdKeyboardArrowLeft className="text-2xl text-gray-400" />
                </button>
                <button className="embla__next bg-white rounded-l h-[88px] w-10 flex items-center justify-center" onClick={scrollNext}>
                    <MdKeyboardArrowRight className="text-2xl text-gray-400" />
                </button>
            </div>

            {/* Horizontal Indicator Bar */}
            <div className="flex items-end gap-2 mt-2 mb-2">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        className={`relative h-1 rounded overflow-hidden ${i === selectedIndex ? "w-10" : "w-2"
                            } bg-gray-300 transition-all duration-300`}
                    >
                        {i === selectedIndex && isAnimating && (
                            <div
                                className="absolute left-0 top-0 h-full bg-black/90 animate-[var(--animate-fill-horizontal)]"
                            />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EmblaCarousel;
