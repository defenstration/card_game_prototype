import Image from 'next/image'



export type CardProps = {
    id: string;
    name: string;
    type: string;
    faction: string;
    cost: number;
    loyalty: number;
  
    initiative?: number;
    imageUrl?: string;
    hp?: number;
    movement?: number;
    damage?: number;
    range?: number;
  
    rank?: number;
    abilities?: string[];
    flavorText?: string;
    artist?: string;
  
    tags?: string[];
    rarity?: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
    description?: string;
    isBoss?: boolean;
  }
  



export default function Card({
    name,
    initiative = 0,
    imageUrl = '/images/placeholder.png',
    hp = 0,
    movement = 0,
    damage = 0,
    range = 0,
    type = 'Unknown',
    rank = 0,
    abilities = [],
    artist = 'Unknown',
    flavorText = 'No flavor text available',
    cost = 0,
    loyalty = 0,
    faction = 'Neutral'
}: CardProps) {
    return (
        <div className = 'card w-full'>
            <div className = 'card-header bg-gray-800 text-white p-2 rounded-t-md'>
                <h2 className = 'text-xl font-bold'>{name}</h2>
                <p className = 'text-sm'>Initiative: {initiative}</p>
            </div>
            <div className = 'card-body p-4 bg-white rounded-b-md shadow-md'>
                <Image src={imageUrl} alt={name} className = 'w-full h-auto mb-2' />
                <p className = 'text-sm'>Type: {type}</p>
                <p className = 'text-sm'>Rank: {rank}</p>
                <p className = 'text-sm'>HP: {hp}</p>
                <p className = 'text-sm'>Movement: {movement}</p>
                <p className = 'text-sm'>Damage: {damage}</p>
                <p className = 'text-sm'>Range: {range}</p>
                <p className = 'text-sm'>Cost: {cost}</p>
                <p className = 'text-sm'>Loyalty: {loyalty}</p>
                <p className = 'text-sm'>Faction: {faction}</p>
                <p className = 'text-sm'>Artist: {artist}</p>
                <ul className='list-disc pl-5'>
                    {abilities.map((ability, index) => (
                        <li key={index} className='text-sm'>{ability}</li>
                    ))}
                </ul>
                <blockquote className='italic text-gray-600'>{flavorText}</blockquote>
            </div>
        </div>
    )
}