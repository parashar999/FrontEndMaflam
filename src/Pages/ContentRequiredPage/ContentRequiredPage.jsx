import React, { useContext, useEffect } from "react";
import { ContentRequired} from "../../Component";

import { LanguageProvider } from "../../store"


function ContentRequiredPage() {

  return (
    <div>
      <LanguageProvider >
        <ContentRequired />
     </LanguageProvider>
    </div>
  )
}

export default ContentRequiredPage;