'use client'

import { useGameStore } from "@/lib/useGameStore";
import { useEffect } from "react";

export default function GameBoard() {
    const board = useGameStore(state => state.board)
    const hand = useGameStore(state => state.hand)
    const selectCard = useGameStore(state => state.selectCard)
    const drawCard = useGameStore(state => state.drawCard)
    const playCard = useGameStore(state => state.playCard)

    useEffect(()=>{
        drawCard()
        drawCard()
    }, [])

    function handlePositionClick(x: number, y: number) {
        if (hand.length > 0 && !board[y][x]) {
            playCard(hand[0].id, {x, y})
        }
    }
    return (
        <div className = 'grid grid-cols-6 w-fit mx-auto items-center justify-center gap-1 p-1 bg-green-700'>
            {board.flatMap((row, rowIndex) =>
                row.map((card, colIndex) => (
                    <div
                        key={`${rowIndex}-${colIndex}`}
                        className={`w-32 h-32 border flex items-center justify-center rounded-md shadow-md cursor-pointer hover:shadow-lg hover:bg-amber-100 transition-shadow duration-200 ${rowIndex < 3 ? 'bg-red-200' : 'bg-blue-200'}`}
                        onClick = {() => handlePositionClick(colIndex,rowIndex)}>
                    {card?.name || ''}
                    </div>
                )))}
        </div>
    )
}