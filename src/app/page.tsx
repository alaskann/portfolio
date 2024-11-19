import Image from "next/image";
import image from "../../public/self.jpg";

export default function Home() {
  return (
    <>
      {/* <Forehead>Welcome in!</Forehead> */}
      <div className="p-std-content flex flex-col gap-y-std-sm">
        <Image
          src={image.src}
          width={1000}
          height={500}
          // fill={true}
          alt="Picture of Jason Procka"
          priority
          className="w-full rounded-md overflow-hidden"
        />
        <h1 className="font-semibold mt-std-sm text-xl">
          Welcome to my portfolio 🙂
        </h1>
        <p>
          Hey! My name is Jason Procka and I&apos;m a developer located in
          Fargo, North Dakota &#40;but I&apos;m originally from Minot&#41;. I
          love learning about new technologies and methods for building
          interactive apps. I have no formal training.
        </p>
      </div>
    </>
  );
}
