import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeEvents = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(e =>
      e.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="container">
        <h1>Destination search</h1>

        <div className="search-div">
          <input
            className="input"
            type="search"
            placeholder="Search"
            onChange={this.onChangeEvents}
            value={searchInput}
          />
          <img
            className="img1"
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png "
            alt="search icon"
          />
        </div>
        <ul className="card">
          {searchResults.map(each => (
            <DestinationItem details={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
