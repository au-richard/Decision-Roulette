import React, { useContext } from "react";
import { searchContext } from "../providers/SearchProvider";


export default function useLookUpResult() {

  const { searchResult } = useContext(searchContext);

  return (
    <div>
      searchContext.organic
    </div>
  );
}