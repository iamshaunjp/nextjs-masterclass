"use client"

import { experimental_useFormStatus as useFormStatus } from 'react-dom'
export default function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button disabled={pending} className='btn-primary'>
      {pending && <span>Submitting...</span>}
      {!pending && <span>Submit</span>}
    </button>
  )
}