"use client"

// components
import AuthForm from "../AuthForm"

export default function Login() {

  const handleSubmit = async (e, email, password) => {
    e.preventDefault()

    console.log(email, password)
  }
[]
  return (
    <main>
      <h2 className="text-center">Login</h2>

      <AuthForm handleSubmit={handleSubmit} />
    </main>
  )
}