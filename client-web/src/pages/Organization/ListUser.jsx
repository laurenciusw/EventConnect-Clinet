import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUserList } from "../../store/actions/organizationAction";

export default function Test() {
  const [currentUser, setCurrentUser] = useState();
  const [showChatBox, setShowChatBox] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { userList, userPending } = useSelector((state) => state.organizer);

  useEffect(() => {
    let currentTalkjsUser = localStorage.getItem("currentTalkjsUser");
    if (currentTalkjsUser) {
      setCurrentUser(JSON.parse(currentTalkjsUser));
    }
    dispatch(getUserList(id));
  }, []);

  // useEffect(() => {

  // }, [userList, userPending])

  const handleClick = (userId) => {
    console.log(userId);
    /* Retrieve the two users that will participate in the conversation */
    const user = userList.find((user) => user.User.id === userId);
    console.log(user);
    const userObj = {
      id: user.User.id,
      name: user.User.username,
      email: user.User.email,
      photoUrl: user.User.profilePicturef,
      role: "Member",
      info: "Job",
      welcomeMessage: "Hey there! Love to chat :-)",
    };
    /* Session initialization code */
    Talk.ready
      .then(() => {
        /* Create the two users that will participate in the conversation */
        const me = new Talk.User(currentUser);
        const other = new Talk.User(userObj);

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
    <div className="users p-4 sm:ml-64 min-h-screen ">
      {/* <section className="bg-gray-100 min-h-screen"> */}
      {/* <div className="max-w-screen-xl flex flex-wrap mx-auto justify-between"></div> */}
      <div className="max-w-screen-xl flex flex-col flex-wrap mx-auto ">
        {userPending.map((user) => (
          <div
            key={user.id}
            className="bg-gray-100 p-4 rounded-md flex justify-between mb-4"
          >
            <Link
              to={`/dashboard/events/${id}/users/${user.id}`}
              className=" items-center w-4/6"
            >
              <div className="flex items-center">
                <img
                  style={{ height: "72px", width: "72px" }}
                  src={user.User.profilePicture}
                  alt="profile_picture"
                  className="rounded-full"
                />
                <div className="ml-4">
                  <p>{user.User.email}</p>
                  <p>{user.JobDesk.name}</p>
                </div>
                <div className="ml-4">
                  <p>
                    <span className="py-2 px-4 bg-red-100 rounded-md ml-8">
                      {user.status}
                    </span>
                  </p>
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
            </div>
          </div>
        ))}
        {userList.map((user) => (
          <div
            key={user.id}
            className="bg-gray-100 p-4 rounded-md flex justify-between mb-4"
          >
            <Link
              to={`/dashboard/events/${id}/users/${user.id}`}
              className=" items-center w-4/6"
            >
              <div className="flex items-center">
                <img
                  style={{ height: "72px", width: "72px" }}
                  src={user.User.profilePicture}
                  alt="profile_picture"
                  className="rounded-full"
                />
                <div className="ml-4">
                  <p>{user.User.email}</p>
                  <p>{user.JobDesk.name}</p>
                </div>
                <div className="ml-4">
                  <p>
                    <span className="py-2 px-4 bg-blue-100 rounded-md ml-8">
                      {user.status}
                    </span>
                  </p>
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
