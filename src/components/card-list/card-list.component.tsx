import { Component } from 'react'
import { Monster } from '../../types/types'
import './card-list.styles.css'
import Card from '../card/card.component'

interface CardListProps {
    monsters: Monster[];
}

class CardList extends Component<CardListProps, {}> {
    render() {
        const { monsters } = this.props;
        return (
            <div className='card-list'> 
            {
                monsters.map((monster) => {
                    return (
                        <Card key={monster.id} monster={monster} />
                    )
                })
            }
            </div>
        )
    }
}

export default CardList;