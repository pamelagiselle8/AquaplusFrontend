import React from "react";
import { Textarea } from "@nextui-org/react";

export default function TextArea({
  label,
  description,
  defaultValue = "",
  onValueChange = () => {},
}) {
  const [value, setValue] = React.useState(defaultValue);

  React.useEffect(() => {
    onValueChange(value);
  }, [value]);

  return (
    <Textarea
      isRequired
      value={value}
      variant="bordered"
      label={label}
      description={description}
      onValueChange={setValue}
      defaultValue={value}
    />
  );
}
