import { MessageCircleIcon } from "lucide-react";

const NoConversationPlaceholder = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6">
      <div className="size-20 bg-[#d65a38]/10 rounded-full flex items-center justify-center mb-6 border border-[#d65a38]/20">
        <MessageCircleIcon className="size-10 text-[#d65a38]" />
      </div>

      <h3 className="text-xl font-semibold text-[#2f2926] mb-2">
        Select a conversation
      </h3>

      <p className="text-[#7a6d62] max-w-md">
        Choose a contact from the sidebar to start chatting or continue a
        previous conversation.
      </p>
    </div>
  );
};

export default NoConversationPlaceholder;