import React from "react";
import ReactFlagsSelect from "react-flags-select";
import "react-flags-select/css/react-flags-select.css";

export default function LanguagePicker() {
  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = event => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <ReactFlagsSelect
      countries={["GB", "FR", "DE"]}
      customLabels={{ GB: "EN-GB", FR: "FR", DE: "DE" }}
      defaultCountry="GB"
      // onSelect={}
    />
  );
}
