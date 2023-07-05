import Talk from "talkjs";
import { useEffect, useState, useRef } from "react";

export default function Chats() {
  // return <div className="p-4 sm:ml-64 min-h-screen">Chats</div>;
  const chatboxEl = useRef();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    let currentTalkjsUser = localStorage.getItem("currentTalkjsUser");
    // if (currentTalkjsUser) {
    // }
    setCurrentUser(JSON.parse(currentTalkjsUser));
  }, []);

  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);

  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));

    if (talkLoaded && currentUser) {
      const me = new Talk.User(currentUser);
      // let currentUser = localStorage.getItem("currentTalkjsUser");
      // currentUser = JSON.parse(currentUser);
      // console.log(currentUser, "<<<<<<<<<<<<<<<<");
      const otherUser = new Talk.User({
        id: "1",
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
        me,
      });

      const conversationId = Talk.oneOnOneId(me, otherUser);
      const conversation = session.getOrCreateConversation(conversationId);
      // conversation.setParticipant(currentUser);
      // conversation.setParticipant(otherUser);
      // conversation.setParticipant(other2);

      const chatbox = session.createInbox();
      chatbox.select(conversation);
      chatbox.mount(chatboxEl.current);

      return () => session.destroy();
    }
  }, [talkLoaded, currentUser]);

  return (
    <div className="p-4 sm:ml-64 min-h-screen">
      <div style={{ height: 500 }} ref={chatboxEl} />
    </div>
  );
}
