import {EmblaOptionsType} from "embla-carousel";
import EmblaCarousel from "@/app/ui/carousel/ProjectCarousel";

export default function ExperimentalPage() {
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    const OPTIONS: EmblaOptionsType = { loop: true }

    return (
        <>
            <h1>Experimental</h1>
            <EmblaCarousel   slides={SLIDES} options={OPTIONS} />

        </>
    );
}