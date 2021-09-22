import React from 'react';

class ProjectList extends React.Component {
  render() {
    const { projects } = this.props;

    return (
      <div className="main-content">
        <div className="project">
          {
            projects.map((project, idx) => <img className="picture" src={project.img} key={idx} />)
          }
        </div>
      </div>
    );
  }
}
export default ProjectList;
