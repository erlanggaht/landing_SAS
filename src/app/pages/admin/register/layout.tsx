import Script from 'next/script'


export const metadata = {
  title: 'Register',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
      <body>
        {children}
        <script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript" async 
      ></script>
        </body>
  )
}
