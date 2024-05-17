'use client';

import {Carousel} from "react-responsive-carousel";
import {projectPreviews} from "@/app/lib/placeholder";
import {ProjectPreview} from "@/app/lib/definitions";

export default function ProjectDetails() {
const previews: ProjectPreview[] = projectPreviews
    return (
        <Carousel
        >
            <div>
                <img src="/portfolio/flat/ap1.jpg"/>
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="/portfolio/flat/ap1.jpg"/>
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="/portfolio/flat/ap1.jpg"/>
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
}