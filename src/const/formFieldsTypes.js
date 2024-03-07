import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import CheckboxField from "../components/CheckboxField";

export const formFieldsTypes = {
  INPUT: "INPUT",
  CHECKBOX: "CHECKBOX",
  SELECT: "SELECT"
}

export const formFieldsTypeToComponent = {
  [formFieldsTypes.INPUT]: InputField,
  [formFieldsTypes.CHECKBOX]: CheckboxField,
  [formFieldsTypes.SELECT]: SelectField,
}
