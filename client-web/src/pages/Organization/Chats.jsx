import Talk from "talkjs";
import { useEffect, useState, useRef } from "react";

export default function Chats() {
  // return <div className="p-4 sm:ml-64 min-h-screen">Chats</div>;
  const chatboxEl = useRef();

  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);

  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));

    if (talkLoaded) {
      const currentUser = new Talk.User({
        id: "1843",
        name: "test",
        email: "test@test.com",
        photoUrl: "test.jpg",
        welcomeMessage: "Hello!",
        role: "default",
      });
      // let currentUser = localStorage.getItem("currentTalkjsUser");
      // currentUser = JSON.parse(currentUser);
      console.log(currentUser, "<<<<<<<<<<<<<<<<");
      const otherUser = new Talk.User({
        id: "2",
        name: "Jessica Wells",
        email: "jessicawells@example.com",
        photoUrl: "jessica.jpeg",
        welcomeMessage: "Hello!",
        role: "default",
      });

      const other2 = new Talk.User({
        id: "456789",
        name: "Steve",
        email: "steve@example.com",
        photoUrl: "jessica.jpeg",
        welcomeMessage: "Hello!",
        role: "default",
      });

      const session = new Talk.Session({
        appId: "t6nxSmNm",
        me: currentUser,
      });

      const conversationId = Talk.oneOnOneId(currentUser, otherUser);
      const conversation = session.getOrCreateConversation(conversationId);
      // conversation.setParticipant(currentUser);
      // conversation.setParticipant(otherUser);
      // conversation.setParticipant(other2);

      const chatbox = session.createInbox();
      chatbox.select(conversation);
      chatbox.mount(chatboxEl.current);

      return () => session.destroy();
    }
  }, [talkLoaded]);

  return (
    <div className="p-4 sm:ml-64 min-h-screen">
      <div style={{ height: 500 }} ref={chatboxEl} />
    </div>
  );
}
