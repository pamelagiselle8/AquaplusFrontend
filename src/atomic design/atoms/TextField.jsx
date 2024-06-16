import React from "react";
import { Input } from "@nextui-org/react";

export default function TextField({
  label,
  onValueChange = () => {},
  defaultValue = "",
  type = "text",
  readOnly = false,
  required = true,
}) {
  const [value, setValue] = React.useState(defaultValue);

  React.useEffect(() => {
    onValueChange(value);
  }, [value, onValueChange]);

  return (
    <div className="w-full flex flex-col gap-4">
      <Input
        key="primary"
        color="default"
        size={"md"}
        variant="bordered"
        readOnly={readOnly}
        isRequired
        required={true}
        type={type}
        value={value}
        label={label}
        onValueChange={setValue}
      />
    </div>
  );
}
