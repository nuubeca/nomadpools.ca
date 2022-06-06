import Image from 'next/image'

function Home () {
  return (
    <div className="bg-black/75">
      <div className="relative h-screen">
        <Image
          className="-z-10"
          layout="fill"
          objectFit="cover"
          src="/images/bg-under-water-kid.jpg"
        />
        <div className="flex h-screen z-10">
          <div className="m-auto text-center text-white text-3xl font-extrabold z-10">
            <Image
              src={'/images/nomadpools-logo.png'}
              width={400}
              height={152}
            />
            <h2>En Construction</h2>
            <p className='cursor-pointer'><a  href={`mailto:info@nomadpools.ca`}>info@nomadpools.ca</a></p>
            <p className='cursor-pointer'><a  href={`tel:8192009992`}>(819) 200-9992</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
