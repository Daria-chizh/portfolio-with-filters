import React from 'react';
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
 export default Portfolio;
