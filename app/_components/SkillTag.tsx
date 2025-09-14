type SkillTagProps = {
  name: string
}

export default function SkillTag({ name }: SkillTagProps) {
  return (
    <span className="px-2 py-1 text-sm rounded-sm border-[1px] border-off-white bg-[#FAFAFA] dark:bg-[#1D1F21] dark:border-off-black">
      {name}
    </span>
  )
}