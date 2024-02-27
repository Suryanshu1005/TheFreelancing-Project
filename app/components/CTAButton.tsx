import {Button} from "@/components/ui/button";
import React, {FC} from "react";

interface CTAButton {
  title: string;
  className?: string;
  variant?:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
}

const CTAButton: FC<CTAButton> = ({title, className, variant}) => {
  return (
    <div>
      <Button variant={variant ?? "default"} className={`${className}`}>
        {title}
      </Button>
    </div>
  );
};

export default CTAButton;
