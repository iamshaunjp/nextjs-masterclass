"use client"
import { useTransition } from 'react'
import { deleteTicket } from '../actions'

// icons & UI
import { TiDelete } from 'react-icons/ti'

export default function DeleteIcon({ id }) {
  let [isPending, startTransition] = useTransition()

  return (
    <button 
      className="btn-primary" 
      onClick={() => startTransition(() => deleteTicket(id))}
      disabled={isPending}
    >
      {isPending && (
        <>
          <TiDelete />
          Deleting....
        </>
      )}
      {!isPending && (
        <>
          <TiDelete />
          Delete Ticket
        </>
      )}
    </button>
  )
}