import React, { useState } from "react";
import styles from "./styles.module.scss";

import { Textarea } from "../textarea";
import { Button } from "../button";

function NewCommentEditor({ isReply = false, image, alt, onClick }) {
  const [comment, newComment] = useState("");
  const handleCommentChange = ({ target }) => {
    newComment(target.value);
  };

  const handleClick = () => {
    onClick(comment);
    newComment("");
  };

  return (
    <div className={styles.newCommentEditor}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={alt} />
      </div>
      <Textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Add a comment..."
      />
      <Button variant="primary" onClick={handleClick}>
        {isReply ? "Reply" : "Send"}
      </Button>
    </div>
  );
}

export { NewCommentEditor };
