import Image from "next/image";
import NewGameBtn from "@/components/NewGameBtn";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Card Game</h1>
      <p className="text-lg">This is a card game prototype using React and Next.js.</p>
      <div className="flex gap-4">
        {/* <Image
          src="/card.png"
          alt="Card"
          width={100}
          height={150}
        />
        <Image
          src="/deck.png"
          alt="Deck"
          width={100}
          height={150}
        /> */}
      </div>

      <Card id="1" name="Ace of Spades" type="Spade" faction="Neutral" damage={3} cost={3} loyalty={3} />
      <nav className="flex gap-4">
      <NewGameBtn />
      <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded">
        View Rules
      </button>
      <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded">
        Deckbuilder
      </button>
      </nav>
    </main>
  )}