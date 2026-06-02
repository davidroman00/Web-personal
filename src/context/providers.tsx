'use client'

import LanguageProvider from "@/context/LanguageContext"
import SectionProvider from "@/context/SectionProvider"
import SlidesProvider from "@/context/SlidesProvider"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SectionProvider>
      <SlidesProvider>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </SlidesProvider>
    </SectionProvider>
  )
}