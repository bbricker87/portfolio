import Image from "next/image";

const HeaderImage = () => {
  return (
    <div className="mx-auto mb-8 w-full sm:w-60 md:w-80 aspect-square rounded-full overflow-hidden relative">
      <Image src="/ben-square.jpeg" alt="ben-bricker" fill={true}></Image>
    </div>
  );
};

const HeaderTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="mx-auto text-center my-4">
      <h1 className="text-jet font-bold text-4xl md:text-6xl lg:text-8xl">
        {title}
      </h1>
      <h4 className="text-xanadu text-xl md:text-3xl lg:text-4xl">
        {subtitle}
      </h4>
    </div>
  );
};

export default function Header() {
  return (
    <div className="container mx-auto min-h-screen sm:min-h-0 py-4">
      <HeaderImage />
      <HeaderTitle title="Ben Bricker" subtitle="Software Engineer" />
    </div>
  );
}
