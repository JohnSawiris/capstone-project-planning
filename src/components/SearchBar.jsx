import React from 'react';

// icons
import FaSearch from 'react-icons/lib/fa/search';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false
    }
    this.handleExpanding =  this.handleExpanding.bind(this);
  }

  handleExpanding() {
    let currExpand = this.state.expand;
    this.setState({
      expand: !currExpand
    })
  }

  render() {
    return(
      <div className="search-wrapper">
        <style jsx>{`
            .search-wrapper {
              align-self: center;
            }
            .search-bar {
              border: 0;
              outline: 0;
              width: 0;
              opacity: 0;
              padding: 0.5rem 0.8rem;
              font-weight: 400;
              color: #333;
              margin: 0 0.5rem;
              background-color: transparent;
              transition: all 0.5s ease-in-out;
            }
            .search-bar.expand {
              width: 200px;
              opacity: 1;
              border-bottom: 1px solid rgba(255,255,255, 0.6);
            }
            ::placeholder {
              opacity: 0.8;
            }
            .search-bar:focus {
              background-color: rgba(255,255,255, 0.05);
              color: #eee;
            }
        `}</style>
      <form>
          <FaSearch onClick={this.handleExpanding} style={searchIcon}/>
          <input className={(this.state.expand) ? "search-bar expand" : "search-bar"} placeholder="Look Up Your Exercises" type="text" />
        </form>
      </div>
    );
  }
}

const searchIcon = {
  width: '20px',
  height: '20px',
  color: 'rgba(255,255,255,0.6)',
  cursor: 'pointer'
}

export default SearchBar;
