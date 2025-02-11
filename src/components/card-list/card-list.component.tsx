import { Monster } from '../../types/types'
import './card-list.styles.css'
import Card from '../card/card.component'

interface CardListProps {
    monsters: Monster[];
}

const CardList  = ({monsters}: CardListProps) => (
            <div className='card-list'> 
           {monsters.map((monster) => (
            <Card key={monster.id} monster={monster} />
        ))}
            </div>
    )

export default CardList;