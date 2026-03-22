import React from "react";
import { useAuthStore } from "../store/useAuthStore";
import BorderAnimatedContainer from "../components/borderAnimatedContainer";

const ChatPage = () => {
  const { logout } = useAuthStore();
  return (
    <div className="relative w-full max-w-6xl h-[800px]">
      <BorderAnimatedContainer>
        <div className="w-80 bg-slate-800/50 backdrop-blur-sm flex flex-col ">
          <ProfileHeader />
          <ActiveTabSwitch />
        </div>
      </BorderAnimatedContainer>
    </div>
  );
};

export default ChatPage;
