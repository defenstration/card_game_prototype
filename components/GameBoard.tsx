'use client'

import { useGameStore } from "@/lib/useGameStore";

export default function GameBoard() {
    const board = useGameStore(state => state.board)
    const selectCard = useGameStore(state => state.selectCard)

    return (
        <div className = 'grid grid-cols-6 w-fit mx-auto items-center justify-center gap-1 p-1 bg-green-700'>
            {board.flatMap((row, rowIndex) =>
                row.map((card, colIndex) => (
                    <div
                        key={`${rowIndex}-${colIndex}`}
                        className="w-32 h-32 border flex items-center justify-center bg-white rounded-md shadow-md cursor-pointer hover:shadow-lg hover:bg-amber-100 transition-shadow duration-200"
                        onClick = {() => card && selectCard(card)}>
                    {card?.name || ''}
                    </div>
                )))}
        </div>
    )
}