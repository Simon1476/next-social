import prisma from "@/lib/client";
import CommentList from "./CommentList";

const Comments = async ({ postId }: { postId: string }) => {
  const comments = await prisma.comment.findMany({
    where: {
      postId: postId,
    },
    include: {
      user: true,
    },
  });

  return (
    <div>
      <CommentList comments={comments} postId={postId} />
    </div>
  );
};

export default Comments;
