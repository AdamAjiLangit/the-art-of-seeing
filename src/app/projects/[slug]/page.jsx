import React from 'react';
import projects from '@/projects';
import ProjectClient from './project-client';

const ProjectPage = async ({ params }) => {
    const {slug} = params;
    const project = projects.find((project) => project.slug === slug);

    const currentIndex = projects.findIndex((project) => project.slug === slug);
    const nextIndex = (currentIndex + 1) % projects.length;
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;

    const nextProject = projects[nextIndex];
    const prevProject = projects[prevIndex];

    return (
        <ProjectClient
        project={project}
        nextProject={nextProject}
        prevProject={prevProject}
        />
    )
}

export default ProjectPage