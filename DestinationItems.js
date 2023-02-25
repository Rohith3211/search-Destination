import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {details} = this.props
    const {name, imgUrl} = details

    return (
      <li className="cards">
        <img className="image" src={imgUrl} alt={name} />
        <p>{name}</p>
      </li>
    )
  }
}

export default DestinationItem

