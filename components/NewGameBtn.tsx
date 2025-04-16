import Link from 'next/link'

export default function NewGameBtn() {
    return (
        <Link
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            href="/game">
            New Game
        </Link>
    )
}