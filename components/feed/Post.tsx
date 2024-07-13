import Image from "next/image";
import { HiDotsHorizontal } from "react-icons/hi";
import Comments from "./Comments";
import { Post as PostType, User } from "@prisma/client";
import PostInteraction from "./PostInteraction";

type FeedPostsType = PostType & { user: User } & {
  likes: [{ userId: string }];
} & { _count: { comments: number } };

const Post = ({ post }: { post: FeedPostsType }) => {
  return (
    <div className="flex flex-col gap-4">
      {/* USER */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Image
            src={post.user.avatar || "/noAvatar.png"}
            alt=""
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-md">
            {post.user.name && post.user.surname
              ? post.user.name + " " + post.user.surname
              : post.user.name}
          </span>
        </div>
        <HiDotsHorizontal />
      </div>
      {/* DESC */}
      <div className="flex flex-col gap-4">
        {post.img && (
          <div className="w-full min-h-96 relative">
            <Image
              src={post.img}
              alt="post image"
              fill
              className="object-cover rounded-md"
            />
          </div>
        )}
        <p>{post.desc}</p>
      </div>
      {/* INTERACTION */}
      <PostInteraction
        postId={post.id}
        likes={post.likes.map((like) => like.userId)}
        commentNumber={post._count.comments}
      />
      <Comments postId={post.id} />
    </div>
  );
};

export default Post;
