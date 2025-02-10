import {Component} from 'react'
import {Monster} from '../../types/types'
import './card.styles.css'


interface CardProps {
    monster: Monster;
}

class Card extends Component<CardProps> {
    render() {
        const {name, id, email} = this.props.monster;
        return (
            <div key={id} className="card-container">
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        )
        
    }
}

export default Card;