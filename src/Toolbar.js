import React from 'react';
import PropTypes from 'prop-types';

class Toolbar extends React.Component {
  handleClick = (filterName) => {
    this.props.onSelectFilter(filterName);
  };

  render() {
    const { filters, selected } = this.props;

    return (
      <div className="main-content">
        <div className="filter-list">
          {
            filters.map((filterName, idx) => {
              const className = selected === filterName ? 'border-link active' : 'border-link';

              return (
                <div className={className} key={idx}>
                  <a href="#" className="link" onClick={() => this.handleClick(filterName)}>{filterName}</a>
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
};

export default Toolbar;
