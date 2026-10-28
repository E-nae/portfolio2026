const sizes = {
  sm: { track: "w-[30px] h-[18px] p-[2px]", thumb: "size-[14px]" },
  md: { track: "w-[46px] h-[28px] p-[3px]", thumb: "size-[22px]" },
  lg: { track: "w-[64px] h-[38px] p-[4px]", thumb: "size-[30px]" },
};

/** 켜진 스위치 모양 장식. 꾸밈용이라 스크린리더에선 숨김 */
export function ToggleMark({ size = "md" }: { size?: keyof typeof sizes }) {
  const s = sizes[size];
  return (
    <span
      aria-hidden="true"
      className={`flex flex-none justify-end rounded-full bg-on ${s.track}`}
    >
      <span className={`rounded-full bg-white ${s.thumb}`} />
    </span>
  );
}
