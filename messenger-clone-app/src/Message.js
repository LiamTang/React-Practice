import React, { forwardRef } from "react";
import "./Message.css";
import { Card, CardContent, Typography } from "@material-ui/core";
import FlipMove from "react-flip-move";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  console.log(message);

  return (
    <div ref={ref} className={`message ${isUser && "message__user"} `}>
    <div className="message__username">{!isUser && `${message.username || "UnKnown User"}:`}</div>
      <Card className={isUser ? "message__userCard" : "message_guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
