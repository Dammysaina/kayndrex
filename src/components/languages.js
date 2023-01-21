import React from "react";
import '../assest/css/language.css'

const Language = () => {
  return (
    <div className="language_container">
      <div className="change_language">
        <h1>How can I change the App language?</h1>
      </div>
      <div className="language_date">
      <h3>
      Our Languages was last Updated: <span className="last_date">[18/01/2023]</span>
      </h3>
      <p>
        For <span className="devices">Android</span> devices, the language of your kayndrexsphere.com App is
        determined by your general device language settings. If we support your
        device language, we will display the App in the same language. If your
        device language is not supported yet, we will take the first supported
        language in your preferred language order settings.
      </p>
      <p>
        {" "}
        For <span className="devices">iOS</span> devices, we additionally offer the possibility to change only
        the App&#39;s language. In order to do so, please go to your iPhone
        settings &rarr; Kayndrexsphere &rarr; Preferred Language and select the
        language of your choice.
      </p>
      <p>
        Find out which languages are currently supported in kayndrexsphere.com
        here:
      </p>
      </div>
      
    </div>
  );
};

export default Language;
