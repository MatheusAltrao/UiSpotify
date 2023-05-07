import './globals.css'


export const metadata = {
  title: 'Spotify',
  description: 'Listen to music.',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body className=' bg-[#121212] text-zinc-50' >{children}</body>
    </html>
  )
}
