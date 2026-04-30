import { ReactNode } from "react";

interface Props {
  kicker: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  aside?: ReactNode;
}

const SectionHeader = ({ kicker, title, description, align = "left", aside }: Props) => (
  <div
    className={`flex flex-col gap-6 ${
      align === "center" ? "items-center text-center" : "md:flex-row md:items-end md:justify-between"
    }`}
  >
    <div className={`max-w-2xl ${align === "center" ? "mx-auto" : ""}`}>
      <div className="kicker">{kicker}</div>
      <h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base text-silver/85 leading-relaxed">{description}</p>
      )}
    </div>
    {aside}
  </div>
);

export default SectionHeader;
