import prisma from "@/lib/client";
import Image from "next/image";

const Storypage = async ({ params }: { params: { id: string } }) => {
  const story = await prisma.story.findFirst({
    where: {
      id: params.id,
    },
  });

  if (!story) return "No image!";

  return (
    <div className="relative h-[800px] w-[450]">
      <Image
        src={story.img}
        alt="Story's image"
        fill
        className="object-cover"
      />
    </div>
  );
};

export default Storypage;
