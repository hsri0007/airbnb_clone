import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import CardComponent from "../../../customComponents/cardComponent/cardComponent";

export default function PopoverPopupState({ text, data, states }) {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button
            style={{ backgroundColor: "black" }}
            variant="contained"
            color="primary"
            {...bindTrigger(popupState)}
          >
            &#8377;{text}/-
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Box p={2}>
              <CardComponent data={data} states={states} />
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
