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
          src="/images/pool-container-ai.png"
        />
        <div className="z-10 flex h-screen justify-center">
          <div className="no-scrollbar z-10 w-[700px] flex-col space-y-3 overflow-y-scroll p-2 text-center text-3xl font-extrabold text-white">
            <Image
              className="mx-auto"
              alt="Nomad Pools Logo"
              src={'/images/logo-piscine-nomad-couleur.png'}
              width={400}
              height={152}
            />
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
