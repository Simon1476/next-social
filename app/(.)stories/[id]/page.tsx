import ModalBackdrop from "../../../components/ModalBackdrop";
import prisma from "@/lib/client";
import Image from "next/image";

const InterceptedStorypage = async ({ params }: { params: { id: string } }) => {
  const story = await prisma.story.findFirst({
    where: {
      id: params.id,
    },
  });

  if (!story) return "No image!";

  return (
    <>
      {/* Modal Backdrop*/}
      <ModalBackdrop />
      <dialog
        className="w-full max-w-3xl p-8 rounded border-none shadow-md bg-[#bababa]"
        open
      >
        <div className="relative h-[800px] w-[450]">
          <Image
            src={story.img}
            alt="Story's image"
            fill
            className="object-cover"
          />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedStorypage;
