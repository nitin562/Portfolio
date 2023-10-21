const getLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        resolve(pos);
      },
      (err) => {
        reject(err);
      }
    );
  });
};
const Response = async (command) => {
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
      const coord = await getLocation();
      html = (
        <div className="Response">
          <p>
            <span>Latitude:</span>
            {coord.coords.latitude}
          </p>
          <p>
            <span>Longitude:</span>
            {coord.coords.longitude}
          </p>
        </div>
      );
    } catch (error) {
      html = (
        <div className="Response">
          <p>{error.message}</p>
        </div>
      );
    }
  } else {
    html = (
      <div className="Resp">
        <p>The Command {command} is invalid</p>
      </div>
    );
  }

  return html;
};

const Details = (name) => {
  if (name === "Under Graduation") {
    return (
      <div className="Response">
        <p>
          <span>Stream:</span>B.TECH CSE General
        </p>
        <p>
          <span>Graduating Period:</span>Oct,2021-May 2025
        </p>
        <p>
          <span>Status:</span>Ongoing
        </p>
        <p>
          <span>Graduation From:</span>PDMU, Bahadurgarh
        </p>
        <p>
          <span>Current Session:</span>3rd year and 5th Semester
        </p>
        <p>
          <span>Current CGPA:</span>9.0
        </p>
      </div>
    );
  } else if (name === "Class 12th") {
    return (
      <div className="Response">
        <p>
          <span>Board:</span>Central Board of Secondary Education &#40;CBSE&#41;
        </p>
        <p>
          <span>School:</span>Tulips international school
        </p>
        <p>
          <span>Status:</span>Passed
        </p>
        <p>
          <span>Passed out:</span>2019
        </p>
        <p>
          <span>Marks Percentage:</span>90.5%
        </p>
      </div>
    );
  } else if (name === "Class 10th") {
    return (
      <div className="Response">
        <p>
          <span>Board:</span>Central Board of Secondary Education &#40;CBSE&#41;
        </p>
        <p>
          <span>School:</span>Tulips international school
        </p>
        <p>
          <span>Status:</span>Passed
        </p>
        <p>
          <span>Passed out:</span>2017
        </p>
        <p>
          <span>Marks Percentage:</span>95%
        </p>
      </div>
    );
  }
};
export {Details}
export default Response;
