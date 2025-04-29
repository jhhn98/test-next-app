import '../style/global.scss';

export const metadata = {
  title: 'Next.js App',
  description: 'Next.js test application'
}

export default function RootLayout({  
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}