import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import * as SurveyTheme from "survey-core/themes";
import "../index.css";
import { json } from "./json";
import { themeJson } from "./theme";



function SurveyComponent() {
   
    const survey = new Model(json);
    survey.applyTheme(themeJson);
    survey.onComplete.add((sender, options) => {
        var jsonfile = JSON.stringify(sender.data, null, 3);
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            jsonfile
          )}`;
          const link = document.createElement("a");
          link.href = jsonString;
          link.download = "data.json";
          link.click();
        
          setTimeout(function(){
            window.location.reload();
         }, 5000);
    });
    return (<Survey model={survey} />);
}

export default SurveyComponent;