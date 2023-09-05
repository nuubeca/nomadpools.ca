import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-black/75">
      <div className="relative h-screen">
        <Image
          alt="Nomad Pools background"
          className="-z-10"
          layout="fill"
          objectFit="cover"
          src="/images/bg-under-water-kid.jpg"
        />
        <div className="z-10 flex h-screen justify-center">
          <div className="w-[700px] z-10 flex-col p-2 text-center text-3xl font-extrabold space-y-3 text-white overflow-y-scroll no-scrollbar">
            <Image
            className='mx-auto'
              alt="Nomad Pools Logo"
              src={'/images/logo-piscine-nomad-couleur.png'}
              width={400}
              height={152}
            />
            <h2>En Construction</h2>
            <p className="cursor-pointer">
              <a href={`mailto:info@nomadpools.ca`}>info@nomadpools.ca</a>
            </p>
            <p className="cursor-pointer">
              <a href={`tel:8192009992`}>(819) 200-9992</a>
            </p>

            <iframe
              title="Form Name"
              src="jotform.html"
              style={{
                width: '100%',
                height: '3000px',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
