"use client"

export default function error({ error, reset }) {
  return (
    <main className="text-center">
      <h2 className="text-4xl">Oh No!</h2>
      <p>{error.message}</p>
      <button 
        onClick={reset} 
        className="btn-primary mx-auto my-4"
      >
        Maybe try again?
      </button>
    </main>
  )
}