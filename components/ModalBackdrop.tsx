"use client";

import { useRouter } from "next/navigation";

const ModalBackdrop = () => {
  const router = useRouter();

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-slate-700"
      onClick={router.back}
    />
  );
};

export default ModalBackdrop;
