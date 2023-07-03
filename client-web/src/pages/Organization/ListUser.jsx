import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const dummyUsers = [
  {
    id: "2",
    name: "Kelvin Samson",
    email: "kelvin@sample.com",
    photoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    role: "Member",
    info: "Pubdoc",
    welcomeMessage: "Hey there! Love to chat :-)",
  },
  {
    id: "3",
    name: "Annabel Stone",
    email: "annie@sample.com",
    photoUrl: "https://randomuser.me/api/portraits/women/65.jpg",
    role: "Member",
    info: "Ticketing",
    welcomeMessage: "Hey there! Love to chat :-)",
  },
  {
    id: "4",
    name: "Grace Loveday",
    email: "grace@sample.com",
    photoUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    role: "Member",
    info: "Job",
    // welcomeMessage: "Hey there! Love to chat :-)",
  },
  {
    id: "5",
    name: "Angela Jobs",
    email: "angela@sample.com",
    photoUrl:
      "https://pbs.twimg.com/profile_images/834493671785525249/XdLjsJX_.jpg",
    role: "Member",
    info: "Job",
    welcomeMessage: "Hey there! Love to chat :-)",
  },
];

export default function Test() {
  const [currentUser, setCurrentUser] = useState();
  const [showChatBox, setShowChatBox] = useState(false);

  useEffect(() => {
    let currentTalkjsUser = localStorage.getItem("currentTalkjsUser");
    if (currentTalkjsUser) {
      setCurrentUser(JSON.parse(currentTalkjsUser));
    }
  }, []);

  const handleClick = (userId) => {
    console.log(userId);
    /* Retrieve the two users that will participate in the conversation */
    const user = dummyUsers.find((user) => user.id === userId);
    console.log(currentUser);
    /* Session initialization code */
    Talk.ready
      .then(() => {
        /* Create the two users that will participate in the conversation */
        const me = new Talk.User(currentUser);
        const other = new Talk.User(user);

        /* Create a talk session if this does not exist. Remember to replace tthe APP ID with the one on your dashboard */
        if (!window.talkSession) {
          window.talkSession = new Talk.Session({
            appId: "t6nxSmNm",
            me: me,
          });
        }

        /* Get a conversation ID or create one */
        const conversationId = Talk.oneOnOneId(me, other);
        const conversation =
          window.talkSession.getOrCreateConversation(conversationId);

        /* Set participants of the conversations */
        conversation.setParticipant(me);
        conversation.setParticipant(other);

        /* Create and mount chatbox in container */
        let chatbox = window.talkSession.createChatbox(conversation);
        chatbox.select(conversation);
        chatbox.mount(document.getElementById("talkjs-container"));
        setShowChatBox(true);
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="users p-4 sm:ml-64 h-screen">
      <div className="users-container flex flex-col">
        {dummyUsers.map((user) => (
          <div
            key={user.id}
            className="bg-gray-100 p-4 rounded-md flex justify-between mb-4"
          >
            <Link
              to={"/dashboard/events/1/users/1"}
              className=" items-center w-4/6"
            >
              <div className="flex items-center">
                <img
                  style={{ height: "72px", width: "72px" }}
                  src={user.photoUrl}
                  alt={`${user.name}`}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <p>{user.name}</p>
                  <p>{user.info}</p>
                </div>
              </div>
            </Link>
            <div className="flex items-center">
              <button
                onClick={() => handleClick(user.id)}
                className="py-2 px-4 border-2 border-blue-900"
              >
                Message
              </button>
              <div>
                <p>
                  <span className="py-2 px-4 bg-blue-100 rounded-md ml-8">
                    Status
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}

        <div
          className={`w-80 self-end bottom-5  ${
            showChatBox ? "sticky" : "hidden"
          }`}
        >
          <div id="talkjs-container" style={{ height: "400px" }}>
            <i></i>
          </div>
        </div>
      </div>
    </div>
  );
}
