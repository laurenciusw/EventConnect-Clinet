import Talk from "talkjs";
import { useEffect, useState, useRef } from "react";

export default function MyChats() {
  const chatboxEl = useRef();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    let currentTalkjsUser = localStorage.getItem("currentTalkjsUser");
    const user = JSON.parse(currentTalkjsUser);
    user.role = "default";
    setCurrentUser(user);
  }, []);

  const [talkLoaded, markTalkLoaded] = useState(false);

  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));

    if (talkLoaded && currentUser) {
      const me = new Talk.User(currentUser);
      const session = new Talk.Session({
        appId: "t6nxSmNm",
        me,
      });

      const chatbox = session.createInbox();
      chatbox.mount(chatboxEl.current);

      return () => session.destroy();
    }
  }, [talkLoaded, currentUser]);

  return (
    <div className="min-h-screen">
      <div
        style={{ height: 700 }}
        ref={chatboxEl}
        className="w-full h-full my-4"
      />
    </div>
  );
}
