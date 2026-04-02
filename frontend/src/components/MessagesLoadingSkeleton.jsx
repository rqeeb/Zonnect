function MessagesLoadingSkeleton() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className={`flex ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          } animate-pulse`}
        >
          <div
            className={`rounded-2xl h-12 ${
              index % 2 === 0
                ? "w-36 bg-[#e6dccb] border border-[#b8aa98]/50"
                : "w-32 bg-[#d9b8aa]"
            }`}
          />
        </div>
      ))}
    </div>
  );
}

export default MessagesLoadingSkeleton;
