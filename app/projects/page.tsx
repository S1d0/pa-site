'use client';

import {useState} from 'react';
import clsx from 'clsx';
import ImageContainer from "@/app/ui/home/imgcontainer";
import UnderlineButton from "@/app/ui/underline-button";
import {categories, PortfolioTag, projectPreviews} from "@/app/ui/home/showcase/placeholders";
import Link from "next/link";


export default function ProjectsPage() {
    const [tagSelected, setTagSelected] = useState("all");

    return (
        <main>
            <div className="container px-2 sm:mx-auto">
                <div className="flex flex-col gap-2 sm:gap-8">
                    {/* Header  */}
                    <div className="hidden flex-col gap-2 sm:mt-12 sm:flex">
                        <h2 className="text-sm uppercase text-zinc-500">
                            Poznaj nasze realizacje
                        </h2>
                        <h1 className="text-2xl font-bold tracking-wide text-zinc-800 sm:text-3xl">
                            Projekt dopasowany do Ciebie. Dla nas{' '}
                            <span className="text-indigo-500">szczegóły</span> mają znaczenie
                        </h1>
                    </div>

                    {/* Category select*/}
                    <div className="mt-4 flex flex-col sm:gap-2 sm:mt-12">
                        <h2 className="text-sm text-center sm:text-start uppercase text-zinc-500">
                            Wybierz kategorię
                        </h2>
                        <div className="flex gap-2 sm:gap-8 justify-center sm:justify-start">
                            {categories.map((category) => {
                                return (
                                    <div
                                        key={category.actionArg}
                                        className={clsx('group text-sm font-medium', {
                                            ['font-semibold text-indigo-500']:
                                            tagSelected === category.actionArg,
                                        })}
                                    >
                                        <UnderlineButton
                                            action={() => setTagSelected(category.actionArg)}
                                            name={category.name}
                                            id={category.name}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Preview */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-16 md:grid-cols-12">
                        {projectPreviews.map((preview) => {
                            return (
                                <div
                                    className={clsx('transition-all duration-500 group col-span-12 h-[300px] cursor-pointer justify-center sm:col-span-4',
                                        (tagSelected === PortfolioTag.ALL || tagSelected === preview.tag) ? "flex" : "hidden"
                                    )}
                                    key={preview.id}>
                                    <Link href={`/projects/${preview.id}`}>
                                        <ImageContainer title={preview.name} desc={preview.shortDesc}
                                                        href={preview.imgHref} key={preview.name}/>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </main>
    );
}
