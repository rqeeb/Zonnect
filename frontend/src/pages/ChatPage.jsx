import { useChatStore } from "../store/useChatStore";

import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import ProfileHeader from "../components/ProfileHeader";
import ActiveTabSwitch from "../components/ActiveTabSwitch";
import ChatsList from "../components/ChatsList";
import ContactList from "../components/ContactList";
import ChatContainer from "../components/ChatContainer";
import NoConversationPlaceholder from "../components/NoConversationPlaceholder";

const ChatPage = () => {
  const { activeTab, selectedUser } = useChatStore();

  return (
    <div className="relative w-full max-w-4xl h-[650px] mx-auto">
      <BorderAnimatedContainer>
        <div className="w-80 bg-[#e6dccb]/90 backdrop-blur-sm flex flex-col border-r border-[#b8aa98]/60">
          <ProfileHeader />

          <div className="px-3 pt-3">
            <ActiveTabSwitch />
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {activeTab === "chats" ? <ChatsList /> : <ContactList />}
          </div>
        </div>

        <div className="flex-1 flex flex-col bg-[#f8f1e7]/80 backdrop-blur-sm">
          {selectedUser ? <ChatContainer /> : <NoConversationPlaceholder />}
        </div>
      </BorderAnimatedContainer>
    </div>
  );
};

export default ChatPage;
