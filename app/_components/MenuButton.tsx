import { cn } from "@/app/_utils/cn"

type MenuButtonProps = {
  toggleFunction: () => void
  isOpen: boolean
}

export default function MenuButton({
  toggleFunction,
  isOpen
}: MenuButtonProps) {
  return (
    <button
      className="group cursor-pointer flex items-center "
      onClick={toggleFunction}
    >
      <span className="hidden md:inline-block group-hover:opacity-100 opacity-0 transition-all">{isOpen ? "Close" : "Menu"}</span>
      <span className="relative w-[40px] h-[40px] md:ml-4 border-2 dark:border-off-white border-off-black rounded-md">
        <span
          className={cn(
            "absolute left-1/2 top-2/5 -translate-x-1/2 -translate-y-1/2 origin-center inline-block dark:bg-off-white bg-off-black h-[2px] w-[28px] transition-all menu-btn-bounce",
            isOpen && "rotate-45 top-1/2"
          )}
        />
        <span
          className={cn(
            "absolute left-1 top-3/5 -translate-y-1/2 origin-center inline-block dark:bg-off-white bg-off-black h-[2px] w-[20px] transition-all menu-btn-bounce",
            isOpen && "left-1/2 top-1/2 -translate-x-1/2 -rotate-45 w-[28px]"
          )}
        />
      </span>
    </button>
  )
}
