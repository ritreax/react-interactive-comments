import { useContext, useMemo, createContext, useState } from "react";

const CommentContext = createContext();

function CommentContextProvider({ children, data }) {
  const [comment, setComment] = useState(data.comment);
  const [isReplying, setReplying] = useState(false);
  const [isEditting, setEditting] = useState(false);

  const onReply = () => {
    setReplying(!isReplying);
  };

  const onEdit = () => {
    setEditting(!isEditting);
  };

  const onDelete = () => {
    setComment(null);
  };

  const onUpdate = (newComment) => {
    setComment({
      ...comment,
      content: newComment,
    });
    onEdit();
  };

  const onNewReply = (newComment) => {
    setComment({
      ...comment,
      replies: [
        ...(comment.replies ?? []),
        {
          id: Math.floor(Math.random() * 100),
          content: newComment,
          createdAt: new Date().toLocaleDateString(),
          score: 0,
          replyingTo: comment.user.username,
          user: data.currentUser,
        },
      ],
    });
    onReply();
  };

  const onPositiveReaction = () => {
    setComment({
      ...comment,
      score: comment.score + 1,
    });
  };

  const onNegativeReaction = () => {
    setComment({
      ...comment,
      score: comment.score - 1,
    });
  };

  const contextData = useMemo(
    () => ({
      comment,
      currentUser: data.currentUser,
      isReplying,
      isEditting,
      onReply,
      onDelete,
      onEdit,
      onUpdate,
      onNewReply,
      onPositiveReaction,
      onNegativeReaction,
    }),
    [isReplying, isEditting, comment]
  );

  return (
    <CommentContext.Provider value={contextData}>
      {children}
    </CommentContext.Provider>
  );
}

function useComment() {
  const context = useContext(CommentContext);

  if (!context) {
    throw new Error("Error");
  }

  return context;
}

export { useComment, CommentContextProvider };
