import Image from 'next/image'

export default function FourOhFour() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen min-w-screen font-amatic bg-zinc-900 text-zinc-200">
      <h1 className="text-6xl font-extrabold">404 - Page Not Found</h1>
      <p className="font-semibold text-3xl text-zinc-300">the path is broken<br/><br/></p>
      <div style={{ position: "relative", width: "60%", paddingBottom: "15%", paddingTop: "15%" }} >
      <Image
        className="w-full saturate-150 rounded-md lg:grayscale hover:grayscale-0 duration-300 false"
        alt="Sad Waifu due to broken path"
        src="/sad.jpg"
        layout="fill"
        objectFit="contain"
      />
    </div>
    </div>
  );
}
