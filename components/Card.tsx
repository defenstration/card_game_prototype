import Image from 'next/image'
import type {Card} from '@/lib/useGameStore'


type CardProps = {
    card: Card
  }

export default function Card({ card } : CardProps) {

    console.log(card)
    if (!card) return null
    return (
        <div className = 'card w-32 h-48'>
            <div className = 'card-header bg-gray-800 text-white p-2 rounded-t-md'>
                <h2 className = 'text-xl font-bold'>{card.name}</h2>
                <p className = 'text-sm'>Initiative: {card.initiative}</p>
            </div>
            <div className = 'card-body p-4 bg-white rounded-b-md shadow-md'>
                <Image src={card.imageUrl} alt={card.name} width = {card.imageWidth} height = {card.imageHeight} className = 'w-full h-auto mb-2' />
                <p className = 'text-sm'>Type: {card.type}</p>
                <p className = 'text-sm'>Rank: {card.rank}</p>
                <p className = 'text-sm'>HP: {card.hp}</p>
                <p className = 'text-sm'>Movement: {card.movement}</p>
                <p className = 'text-sm'>Damage: {card.damage}</p>
                <p className = 'text-sm'>Range: {card.range}</p>
                <p className = 'text-sm'>Cost: {card.cost}</p>
                <p className = 'text-sm'>Loyalty: {card.loyalty}</p>
                <p className = 'text-sm'>Faction: {card.faction}</p>
                <p className = 'text-sm'>Artist: {card.artist}</p>
                <ul className='list-disc pl-5'>
                    {card.abilities && card.abilities.map((ability, index) => (
                        <li key={index} className='text-sm'>{ability}</li>
                    ))}
                </ul>
                <blockquote className='italic text-gray-600'>{card.flavorText}</blockquote>
            </div>
        </div>
    )
}