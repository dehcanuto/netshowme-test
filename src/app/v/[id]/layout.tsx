import { Suspense } from "react"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<span>loading...</span>}>
      {children}
    </Suspense>
  )
}
