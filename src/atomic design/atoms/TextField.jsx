import React from "react";
import { Input } from "@nextui-org/react";

export default function TextField({
  onValueChange = () => {},
  label,
  defaultValue = "",
  type = "text",
  description = "",
  maxLength = undefined,
}) {
  const [value, setValue] = React.useState(defaultValue);

  React.useEffect(() => {
    onValueChange(value);
  }, [value, onValueChange]);

  return (
    <div className="w-full flex flex-col gap-4 input">
      <Input
        color="default"
        size={"md"}
        variant="bordered"
        type={type}
        value={value}
        label={label}
        description={description}
        onValueChange={setValue}
        maxLength={maxLength}
        fullWidth
      />
    </div>
  );
}
