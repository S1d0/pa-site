import {Divider} from "@nextui-org/react";
import {SectionHeader} from "@/app/lib/definitions";

export default function SectionHeader(props: SectionHeader) {
    return (
        <div className="flex flex-col items-center gap-2">
            <h2 className="text-sm sm:text-medium uppercase text-zinc-500">
                {props.description}
            </h2>
            <Divider className="my-2"/>
            <h1 className="text-xl sm:text-2xl font-semibold text-zinc-800">
                {props.title}
            </h1>
        </div>
    );
}