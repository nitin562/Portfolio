const getLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve(pos)
      },
      (err) => {
        reject(err)
      },{timeout:0}
    );
  });
};
const Response = async(command) => {
  let html;
  if (command === "help") {
    html = (
      <div className="Response">
        <p>Available commands are-</p>
        <p>
          <span>lk-p:</span>Redirect to my Linkedin page
        </p>
        <p>
          <span>lc-p:</span>Redirect to my Leetcode page
        </p>
        <p>
          <span>gh-p:</span>Redirect to my GitHub page
        </p>
        <p>
          <span>get-location:</span>Get your current location
        </p>
        <p>
          <span>clear:</span>Clear out the terminal
        </p>
      </div>
    );
  } else if (command === "lk-p") {
    setTimeout(() => {
      window.open("https://linkedin.com/in/nitin-dabas-195058224", "_blank");
    }, 500);
    html = (
      <div className="Response">
        <p>Redirected to Linkedin page in new tab</p>
      </div>
    );
  } else if (command === "lc-p") {
    setTimeout(() => {
      window.open("https://leetcode.com/nitindbas8800/", "_blank");
    }, 500);
    html = (
      <div className="Response">
        <p>Redirected to LeetCode page in new tab</p>
      </div>
    );
  } else if (command === "gh-p") {
    setTimeout(() => {
      window.open("https://github.com/nitin562/", "_blank");
    }, 500);
    html = (
      <div className="Response">
        <p>Redirected to GitHub page in new tab</p>
      </div>
    );
  } else if (command === "get-location") {
    try {
      const coord=await getLocation();
      html=<div className="Response">
      <p><span>Latitude:</span>{coord.coords.latitude}</p>
      <p><span>Longitude:</span>{coord.coords.longitude}</p>
    </div>
    
    } catch (error) {
      html=<div className="Response">
        <p>{error.message}</p>
      </div>
    }
  }
  else{
    html=<div className="Resp">
      <p>The Command {command} is invalid</p>
    </div>
  }
 
  return html;
};

export default Response;
