import { LoaderIcon } from "lucide-react";

function PageLoader() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#c0b8aa]">
      <LoaderIcon className="size-10 animate-spin text-[#ff5c2e]"  />
    </div>
  );
}
export default PageLoader;
