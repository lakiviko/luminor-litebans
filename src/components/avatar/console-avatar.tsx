import Image from "next/image";

import { cn } from "@/lib/utils";
import { siteConfig } from "@config/site";

interface ConsoleAvatarProps {
  name: string;
  size?: number;
  className?: string;
}

export const ConsoleAvatar = ({
  name,
  size,
  className
}: ConsoleAvatarProps) => (
  <Image 
    src={siteConfig.console.icon}
    alt={`${name}'s avatar`}
    width={size ?? 32}
    height={size ?? 32}
    className={cn("mx-auto rounded-sm", className)}
    unoptimized
  />
)