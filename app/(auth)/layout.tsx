import Image from 'next/image'


const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='flex min-h-screen w-full justify-between font-inter'>
      {children}
      <div className='auth-asset'>
        <div>
            <Image 
              src="/icons/auth-image.svg"
              width={500}
              height={500}
              alt="auth image"
              className='rounded-l-xl object-contain'
            />
        </div>
      </div>
    </main>
  )
}

export default layout
