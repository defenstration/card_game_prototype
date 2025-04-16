import {create} from 'zustand';


type Position = {
  x: number;
  y: number;
}

type Card = {
  id: string;
  name: string;
  imageUrl: string;
  position: Position;
  hp: number;
  damage: number;
  movement: number;
  range: number;
}

type GameState = {
    board: (Card | null)[][];
    selectedCard: Card | null;
    selectCard: (card: Card) => void;
    moveCard: (cardId: string, position: Position) => void;
    endTurn: () => void;
}

export const useGameStore = create<GameState>((set, get) => ({
    board: Array(6).fill(null).map(() => Array(6).fill(null)), // 6x6 board
    selectedCard: null,

    selectCard: (card) => set({ selectedCard: card }),

    moveCard: (cardId, position) => {
        const board = get().board.map(row=>row.slice())
        let movedCard: Card | null = null;

        //remove card from its current position
        for (let y=0; y < board.length; y++) {
            for (let x = 0; x < board[y].length; x++) {
                const card = board[y][x]
                if (card?.id === cardId) {
                    movedCard = {...card, position }
                    board[y][x] = null; // remove card from old position
                }
            }
        }
        if (movedCard) {
            const {x, y} = position;
            board[y][x] = movedCard; // place card in new position
        }

        set({board, selectedCard: null}) // reset selected card

    },

    endTurn: () => set({ selectedCard: null }),

}))