import {fetchProject} from "@/app/lib/project/actions";
import {Project} from "@/app/lib/definitions";
import {Image} from "@nextui-org/react";
import UnderlineLink from "@/app/ui/underlined-link";
import {IoArrowRedoSharp} from "react-icons/io5";

export default async function Page({params}: { params: { id: string } }) {
    const id = params.id;
    const project: Project = await fetchProject(id)
    return (
        <main>
            <div className="container mx-auto">
                <div className="flex flex-col ">
                    <section id="main">
                        <div className="hidden flex-col gap-2 sm:mt-12 sm:flex sm:mb-12">
                            <h2 className="text-sm uppercase text-zinc-500">
                                {project.designer}
                            </h2>
                            <h1 className="text-2xl font-bold tracking-wide text-zinc-800 sm:text-3xl">
                                {project.name}. Zrealizowaliśmy go w <span
                                className="text-indigo-500"> {project.workTime}</span>.
                            </h1>
                        </div>
                        <div className="flex gap-2 relative">
                            <div
                                className="flex flex-col h-96 w-1/3 items-center justify-center sticky top-1/3 gap-4 px-8">
                                <div className="flex flex-col gap-4">
                                    <h1 className="text-2xl sm:text-4xl font-bold">{project.name}</h1>
                                    <p className="tracking-wider">{project.description}</p>
                                    <p><span
                                        className="font-semibold">Powierzchnia inwestycji: </span>{project.areaInfo}</p>
                                    <p><span className="font-semibold">Czas realizacji: </span>{project.workTime}</p>
                                </div>
                            </div>
                            <div className="flex flex-col w-2/3 gap-2">
                                {project.imgUrls.map((imgUrl, index) => {
                                    return (
                                        <div className="flex items-center align-middle justify-center" key={index}>
                                            <Image
                                                removeWrapper
                                                alt="Card background"
                                                width={740}
                                                height={740}
                                                className="object-cover items-center sm:my-2 rounded-md shadow-2xl"
                                                src={imgUrl}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="group hidden flex-col gap-2 sm:mt-24 sm:mb-36 sm:flex items-center">
                            <h1 className="text-2xl font-bold tracking-wide text-zinc-800 sm:text-3xl">
                                <UnderlineLink href={"/projects"}>
                                    <div className="flex gap-2">
                                        <p>Poznaj więcej naszych <span
                                            className="group-hover:text-indigo-500">realizacji</span>
                                        </p>
                                        <IoArrowRedoSharp/>
                                    </div>
                                </UnderlineLink>
                            </h1>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}