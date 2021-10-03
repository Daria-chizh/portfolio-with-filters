import React from 'react';
import PropTypes from 'prop-types';

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

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({ img: PropTypes.string, category: PropTypes.string })).isRequired,
};

export default ProjectList;
