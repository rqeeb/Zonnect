import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="flex rounded-xl bg-[#f3eadf] border border-[#b8aa98]/70 p-1">
      <button
        onClick={() => setActiveTab("chats")}
        className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
          activeTab === "chats"
            ? "bg-[#d65a38] text-white shadow-sm"
            : "text-[#7a6d62] hover:text-[#2f2926]"
        }`}
      >
        Chats
      </button>

      <button
        onClick={() => setActiveTab("contacts")}
        className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition-all ${
          activeTab === "contacts"
            ? "bg-[#d65a38] text-white shadow-sm"
            : "text-[#7a6d62] hover:text-[#2f2926]"
        }`}
      >
        Contacts
      </button>
    </div>
  );
}

export default ActiveTabSwitch;