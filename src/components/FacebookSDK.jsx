import { useEffect } from "react";

export default function FacebookSDK() {
  useEffect(() => {
    window.fbAsyncInit = function () {
      FB.init({
        appId: "1531666994768811",
        cookie: true,
        xfbml: true,
        version: "v24.0",
      });
      FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return null; // This component just loads the SDK
}
