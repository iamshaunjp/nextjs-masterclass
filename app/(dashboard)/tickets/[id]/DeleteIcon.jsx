"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation'

// icons & UI
import { TiDelete } from 'react-icons/ti'

export default function DeleteIcon({ id }) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleClick = async () => {
    setIsLoading(true)
    
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      method: 'DELETE'
    })
    const json = await res.json()

    if (json.error) {
      console.log(error)
      setIsLoading(false)
    }
    if (!json.error) {
      router.refresh()
      router.push('/tickets')
    }
  }

  return (
    <button 
      className="btn-primary" 
      onClick={handleClick}
      disabled={isLoading}
    >
      {isLoading && (
        <>
          <TiDelete />
          Deleting....
        </>
      )}
      {!isLoading && (
        <>
          <TiDelete />
          Delete Ticket
        </>
      )}
    </button>
  )
}