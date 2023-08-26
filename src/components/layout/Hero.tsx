import Image from "next/image";
import Marquee from "react-fast-marquee";

import Upslide from "../animate/Upslide";
import FadeIn from "../animate/FadeIn";

export default function Hero() {
  const icons = [
    {
      label: "turbo",
      img: "/turbo.png",
    },
    {
      label: "supabase",
      img: "/supabase.png",
    },
    {
      label: "tailwind",
      img: "https://img.icons8.com/fluency/200/tailwind_css.png",
    },
    {
      label: "prisma",
      img: "https://img.icons8.com/ios/ffffff/200/prisma-orm.png",
    },
    {
      label: "typescript",
      img: "https://img.icons8.com/fluency/200/typescript--v1.png",
    },
    {
      label: "firebase",
      img: "https://img.icons8.com/color/200/firebase.png",
    },
    {
      label: "framer",
      img: "https://img.icons8.com/external-tal-revivo-bold-tal-revivo/ffffff/200/external-framer-the-only-tool-you-need-to-create-interactive-designs-for-any-platform-logo-bold-tal-revivo.png",
    },
  ];

  return (
    <main className="h-full flex justify-center items-center text-center">
      <div className="flex flex-col justify-center items-center space-y-8 max-w-prose">
        <Upslide>
          <h1 className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/80 to-white/50 text-5xl sm:text-6xl font-extrabold">
            The React Framework for the Web
          </h1>
        </Upslide>
        <FadeIn>
          <Marquee
            className="overflow-hidden relative flex"
            loop={0}
            gradient={true}
            gradientColor={[8, 8, 14]}
          >
            <div className="flex gap-4 sm:gap-9 overflow-hidden justify-center items-center">
              {icons.map((icon, index) => (
                <Image
                  className="w-8 h-8 sm:w-14 sm:h-14 "
                  key={index}
                  width={500}
                  height={500}
                  alt={icon.label}
                  src={icon.img}
                />
              ))}
            </div>
          </Marquee>
        </FadeIn>
      </div>
    </main>
  );
}
