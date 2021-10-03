import React from 'react';
import PropTypes from 'prop-types';

import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFilter: 'All',
    };
  }

  render() {
    const { filters, projects } = this.props;
    const { selectedFilter } = this.state;

    const filteredProjects = selectedFilter === 'All' ? projects : projects.filter((project) => project.category === selectedFilter);

    // onSelectFilter would be called when someone clicks on filter
    return (
      <>
        <Toolbar filters={filters} selected={selectedFilter} onSelectFilter={(filterName) => this.setState({ selectedFilter: filterName })}/>
        <ProjectList projects={filteredProjects} />
      </>
    )
  }
}

Portfolio.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({ img: PropTypes.string, category: PropTypes.string })).isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Portfolio;
