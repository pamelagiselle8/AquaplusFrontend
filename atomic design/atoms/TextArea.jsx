import React from "react";
import { Textarea } from "@nextui-org/react";

export default function TextArea(
  { onValueChange = () => {}, label, description },
  defaultValue
) {
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    onValueChange(value);
  }, [value, onValueChange]);

  return (
      <Textarea
        isRequired
        value={value}
        variant="bordered"
        label={label}
        description={description}
        onValueChange={setValue}
        defaultValue={defaultValue ? defaultValue : ""}
      />
  );
}
