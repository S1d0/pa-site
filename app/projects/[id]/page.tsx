import {Project} from "@/app/lib/project/definitions";
import {fetchProject} from "@/app/lib/project/actions";
import ProjectDetails from "@/app/ui/projects/project-details";
import { Suspense } from "react";


export default async function Page({params}: { params: { id: string } }) {
    const id = params.id;
    const project: Project | null = await fetchProject(id)
   
    // TODO Create Not Found page
    if (!project) {
        return <div>Project not found</div>;
    }

    return (
        <Suspense fallback="Jeszcze chwilka">
          <ProjectDetails project={project} />
        </Suspense>
    );
}