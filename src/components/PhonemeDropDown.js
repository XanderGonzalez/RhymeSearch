import Box from "@mui/material/Box";
import { SimpleTreeView } from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem } from "@mui/x-tree-view/TreeItem";
import { useState, useEffect, useRef, useId } from "react";
import PHONEME_SCHEMA from "./phonemeSchema";

function useOutsideAlerter(ref, setExpandedItems) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setExpandedItems([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

function PhonemeDropDown({ addToSearch }) {
  const [expandedItems, setExpandedItems] = useState([]);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setExpandedItems);
  const handleExpandedItemsChange = (event, itemIds) => {
    setExpandedItems(itemIds);
  };
  const generatePhonemeItems = (PHS) => {
    if (typeof PHS === "object") {
      return (
        <TreeItem itemId={PHS.id} label={PHS.id} key={PHS.id}>
          {PHS.c.map((cc) => {
            return generatePhonemeItems(cc);
          })}
        </TreeItem>
      );
    } else {
      return (
        <TreeItem
          itemId={PHS}
          label={<div onClick={() => addToSearch(PHS)}>{PHS}</div>}
          key={PHS}
        />
      );
    }
  };
  return (
    <Box
      ref={wrapperRef}
      sx={{
        flexGrow: 1,
        backgroundColor: "white",
        borderRadius: "5px",
        boxShadow: "5px 5px 10px gray",
        overflowY: "scroll",
        overflow: "auto",
        maxHeight: "70vh",
      }}
    >
      <SimpleTreeView
        expandedItems={expandedItems}
        onExpandedItemsChange={handleExpandedItemsChange}
      >
        {generatePhonemeItems(PHONEME_SCHEMA)}
      </SimpleTreeView>
    </Box>
  );
}

export default PhonemeDropDown;
