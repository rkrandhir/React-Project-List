import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
class Projects extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    if(this.props.projects) {
      projectItems = this.props.projects.map(
        project => {
          //console.log(projects)
          return (
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
          );
        });
    }
    return (
      <div class="list-group">
        <h3>List of projects</h3>
        <ul className="projects">
          {projectItems}
        </ul>
      </div>
    );
  }
}

export default Projects;
