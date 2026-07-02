export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Construído com Next.js e Tailwind CSS. Hospedado na Vercel.
        </p>
      </div>
    </footer>
  )
}
