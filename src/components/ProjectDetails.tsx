import { useParams, Link } from "react-router-dom";
import { projects } from "./data.js"

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find((p) => p.id === id);

    if (!project) return <h2 className="text-center text-red-600">Project not found</h2>;

    return (
        <section className="py-16 max-w-5xl mx-auto px-4 ">
            <Link to="/#projects" className="text-blue-600 underline mb-4 inline-block mt-20">
                ← Back to Projects
            </Link>

            <h1 className="text-4xl font-bold text-blue-900 mb-6">{project.title}</h1>
            <p className="text-gray-600 mb-8">{project.details}</p>

            {/* Gallery */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.gallery.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`${project.title} gallery ${idx + 1}`}
                        className="rounded-lg shadow-md"
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectDetails;
