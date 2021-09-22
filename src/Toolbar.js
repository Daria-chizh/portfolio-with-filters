import React from 'react';

class Toolbar extends React.Component {
  handleClick = (filterName) => {
    this.props.onSelectFilter(filterName);
  };

  render() {
    const { filters, selected } = this.props;

    return (
      <div className="main-content">
        <div className="filterList">
          {
            filters.map((filterName, idx) => {
              const className = selected === filterName ? 'borderLink active' : 'borderLink';

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
export default Toolbar;
