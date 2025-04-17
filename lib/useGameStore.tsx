import {create} from 'zustand';


type Position = {
  x: number;
  y: number;
}

export type Card = {
    id: string;
    name: string;
    type: string;
    faction: string;
    cost: number;
    loyalty: number;
  
    initiative?: number;
    imageUrl?: string;
    imageWidth?: number;
    imageHeight?: number;
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

    position: Position | null; // Position on the board (x, y)
    isSelected: boolean; // Whether the card is selected
}

type GameState = {
    board: (Card | null)[][];
    selectedCard: Card | null;
    deck: Card[]; // Player's deck of cards
    hand: Card[]; // Player's hand of cards
    selectCard: (card: Card) => void;
    moveCard: (cardId: string, position: Position) => void;
    playCard: (cardId: string, position: Position) => void; // Play a card from hand to board
    drawCard: () => void; // Draw a card from the deck to hand
    endTurn: () => void;
}

export const useGameStore = create<GameState>((set, get) => ({
    board: Array(6).fill(null).map(() => Array(6).fill(null)), // 6x6 board
    selectedCard: null,
    deck: [
        {
            id: '1',
            name: 'Knight',
            type: 'unit',
            faction: 'neutral',
            cost: 3,
            loyalty: 1,
            hp: 10,
            damage: 3,
            range: 1,
            movement: 2,
            position: null,
            isSelected: false,
          },
          {
            id: '2',
            name: 'Archer',
            type: 'unit',
            faction: 'neutral',
            cost: 2,
            loyalty: 1,
            hp: 6,
            damage: 2,
            range: 3,
            movement: 1,
            position: null,
            isSelected: false,
          },
          {
            id: '3',
            name: 'Mage',
            type: 'unit',
            faction: 'neutral',
            cost: 4,
            loyalty: 2,
            hp: 5,
            damage: 4,
            range: 2,
            movement: 1,
            position: null,
            isSelected: false,
          },
    ],
    hand: [],
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

    playCard: (cardId, position) => {
        const board = get().board.map(row=>row.slice())
        const hand = [...get().hand]
        const cardIndex = hand.findIndex(c => c.id === cardId)
        if (cardIndex === -1) return

        const card = {...hand[cardIndex], position}
        const {x, y} = position 
        board[y][x] = card
        hand.splice(cardIndex, 1) 
        set({board, hand})
    },

    drawCard: () => {
        const deck = [...get().deck]
        const hand = [...get().hand]
        if (deck.length === 0) return // no cards to draw
        const card = deck.shift()
        if (card) hand.push(card)

        set({deck, hand})
    },

    endTurn: () => set({ selectedCard: null }),

}))