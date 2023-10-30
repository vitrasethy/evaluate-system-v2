import MobileProjForm from "@/components/form/mobile/project";
import ProjectsForm from "@/components/form/pc/project/ProjectsForm";
import Link from "next/link";

export default function page() {
    return (
        <div>
            <h1 className="my-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                List of Projects
            </h1>
            <p className="mb-6 text-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                Information of Technology <br />
                Generation 8 <br />
                Year 3
            </p>

            <div className="hidden lg:block">
                <ProjectsForm />
            </div>
            <div className="lg:hidden">
                    <MobileProjForm />
            </div>
        </div>
    );
}