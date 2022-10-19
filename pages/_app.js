import '../styles/globals.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const onclick = () =>
        window?.clevertap?.notifications.push({
          "titleText": "Would you like to receive Push Notifications?",
          "bodyText": "We promise to only send you relevant content and give you updates on your transactions",
          "okButtonText": "Yes",
          "rejectButtonText": "No",
          "askAgainTimeInSeconds": 5,
          "serviceWorkerPath": "/sw.js"
  });

  return (
  <>
  <script
          type='text/javascript'
          async
          dangerouslySetInnerHTML = {{
            __html: `var clevertap = {event:[], profile:[], account:[], onUserLogin:[], notifications:[], privacy:[], region:'in1'};

                    clevertap.account.push({"id": "TEST-KK8-65R-9Z6Z"});
                    clevertap.privacy.push({optOut: false}); //set the flag to true, if the user of the device opts out of sharing their data
                    clevertap.privacy.push({useIP: false}); //set the flag to true, if the user agrees to share their IP data
                    (function () {
                            var wzrk = document.createElement('script');
                            wzrk.type = 'text/javascript';
                            wzrk.async = true;
                            wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/clevertap.min.js';
                            var s = document.getElementsByTagName('script')[0];
                            s.parentNode.insertBefore(wzrk, s);
                      })();`
            }}/>
    {/* <Component {...pageProps} /> */}
    <div style={{width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
      <button style={{width: "100px", height: "100px", }} onClick={onclick}>Click me</button>
    </div>
  </>
  )
}

export default MyApp
