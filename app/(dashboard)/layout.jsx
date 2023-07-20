// components
import Navbar from '@/app/components/Navbar'

export default async function DashboardLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}