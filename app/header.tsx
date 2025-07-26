'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link
          href="/"
          className="text-5xl font-medium text-black dark:text-white"
        >
          VevaLabs
        </Link>
        <TextEffect
          as="p"
          // preset="fade"
          // per="char"
          className="text-zinc-600 dark:text-zinc-500"
          // delay={0.5}
        >
          System Verification and Validation
        </TextEffect>
        <TextEffect
          as="p"
          // preset="fade"
          // per="char"
          className="text-zinc-600 dark:text-zinc-500"
          // delay={0.5}
        >
          Research Group at Boğaziçi University
        </TextEffect>
      </div>
      <div className="hidden items-center gap-1 sm:flex">
        <Image src="/vevalabs.png" alt="VevaLabs" width={72} height={72} />
        <Image
          src="/bogazici.png"
          alt="Boğaziçi University"
          width={72}
          height={72}
        />
      </div>
    </header>
  )
}
