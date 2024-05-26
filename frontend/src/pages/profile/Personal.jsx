import React, { useState, useRef, useEffect } from "react";

import catAva from "../../assets/imgs/cat.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCamera,
  faMars,
  faUser,
  faLock,
  faHeartbeat,
  faCog,
  faHistory,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";

import "../../styles/profile/Personal.css";

const Personal = () => {
  const [isLeftPanelActive, setIsleftPanelActive] = useState(false);
  const leftPanelRef = useRef(null);
  const leftPanelIconRef = useRef(null);

  const [activePanelId, setActivePanelId] = useState("my-profile");
  const menuItemsRef = useRef([]);

  const toggleLeftPanel = () => {
    setIsleftPanelActive(!isLeftPanelActive);
  };

  // Toggle left panel in tablet size - START
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (leftPanelIconRef.current && leftPanelIconRef.current.contains(event.target)) return;

      if (isLeftPanelActive && leftPanelRef.current && !leftPanelRef.current.contains(event.target)) {
        setIsleftPanelActive(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLeftPanelActive]);
  // Toggle left panel in tablet size - END

  const menuItems = [
    { id: "my-profile", icon: faUser, label: "My Profile" },
    { id: "change-password", icon: faLock, label: "Change Password" },
    { id: "health-details", icon: faHeartbeat, label: "Health Details" },
    { id: "privacy", icon: faCog, label: "Privacy" },
    { id: "history", icon: faHistory, label: "History" },
    { id: "help-support", icon: faQuestionCircle, label: "Help &amp; Support" },
  ];

  const showPanel = (panelId) => {
    setActivePanelId(panelId);

    // Close the left panel after selecting an option
    if (leftPanelRef.current) {
      leftPanelRef.current.classList.remove("active");
    }
  };

  useEffect(() => {
    menuItemsRef.current.forEach((item) => {
      const handleClick = () => {
        // Remove active class from all menu items
        menuItemsRef.current.forEach((i) => i.classList.remove("active", "click-effect"));

        // Add click effect class to the clicked menu item
        item.classList.add("click-effect");

        // After a short delay, add the active class and remove the click effect
        setTimeout(() => {
          item.classList.remove("click-effect");
          item.classList.add("active");
        }, 100); // Delay in milliseconds, adjust as needed
      };

      item.addEventListener("click", handleClick);

      return () => {
        item.removeEventListener("click", handleClick);
      };
    });
  }, []);

  // ----- Year, Month, Date -----
  // Get current date
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Months are zero-indexed
  const currentDay = currentDate.getDate();

  // State for selected year, month, and day
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [daysInMonth, setDaysInMonth] = useState(31);

  useEffect(() => {
    if (selectedYear && selectedMonth) {
      setDaysInMonth(new Date(selectedYear, selectedMonth, 0).getDate());
    }
  }, [selectedYear, selectedMonth]);

  const generateYearOptions = (start, end) => {
    const options = [];
    for (let i = start; i >= end; i--) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  const generateOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  return (
    <div className="wrapper">
      <div className="container">
        {/* Left Panel */}
        <div ref={leftPanelIconRef} className="left-panel-icon" onClick={toggleLeftPanel}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div ref={leftPanelRef} className={`left-panel ${isLeftPanelActive ? "active" : ""}`}>
          <div className="profile-section">
            <div className="avatar-container">
              <div className="avatar">
                <img src={catAva} alt="Avatar" id="userAvatar" />
                <span onclick="changeAvatar()">
                  <FontAwesomeIcon icon={faCamera} />
                </span>
              </div>
              <div className="user-info">
                <div className="fullname" id="fullName">
                  Nyan Cat
                </div>
                <div className="gender-location">
                  <div id="gender">
                    <FontAwesomeIcon icon={faMars} />
                  </div>
                  <div id="location">Ho Chi Minh</div>
                </div>
                <div className="height-weight">
                  <div id="userHeight">
                    <strong className="h-num">100</strong>
                    <p className="h-unit">cm</p>
                  </div>
                  <div id="userWeight">
                    <strong id="w-num">9.4</strong>
                    <p>kg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="line" />
          <ul className="menu">
            {menuItems.map((item, index) => (
              <li
                key={item.panelId}
                ref={(el) => (menuItemsRef.current[index] = el)}
                data-target={item.panelId}
                onClick={() => showPanel(item.id)}
                className={activePanelId === item.panelId ? "active" : ""}
              >
                <i>
                  <FontAwesomeIcon icon={item.icon} />
                </i>
                {" " + item.label}
              </li>
            ))}
          </ul>
        </div>
        {/* Right Panel */}
        <div className="right-panel">
          {/* <div class="last-updated" id="lastUpdated">
            Last updated: 2024/05/12 00:34:50
        </div> */}
          {/* My Profiles */}
          <div className={`panel-content ${activePanelId === "my-profile" ? "active" : ""}`} id="my-profile">
            <h2 className="panel-title">Personal Information</h2>
            <div className="change-avatar">
              <div className="avatar">
                <img src={catAva} alt="Avatar" id="userAvatar" />
              </div>
              <div className="avatar-btn" id="change-avatar">
                <button onclick="changeAvatar()">Upload New Photo</button>
                <p>
                  At least 150x150 px is recommended.
                  <br />
                  JPG or PNG is allowed
                </p>
              </div>
            </div>
            <div className="profile panel">
              <div className="name-email form-group">
                <div className="name box">
                  <label htmlFor="name-input">Full Name</label>
                  <input
                    type="text"
                    id="name-input"
                    name="fullName"
                    defaultValue="Nyan Cat"
                    placeholder="Enter your Full Name"
                    className="name-input"
                  />
                </div>
                <div className="email box">
                  <label htmlFor="email-input">Email</label>
                  <input
                    type="email"
                    id="email-input"
                    name="email"
                    defaultValue="nyancat@gmail.com"
                    placeholder="Enter your Email"
                    className="email-input"
                  />
                </div>
              </div>
              <div className="stID-birth form-group">
                <div className="stID box">
                  <label htmlFor="stID-input">Student ID</label>
                  <input
                    type="text"
                    id="stID-input"
                    name="studentId"
                    defaultValue="ITTITIU21000"
                    placeholder="Enter your Student ID"
                    className="name-input"
                  />
                </div>
                <div className="birth box">
                  <label htmlFor="birth-year">Birthdate</label>
                  <div className="birthdate-dropdowns">
                    <select
                      id="birth-year"
                      value={selectedYear}
                      className="birthdate-dropdown"
                      onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                    >
                      <option value="" disabled selected>
                        Year
                      </option>
                      {generateYearOptions(currentYear, 1900)}
                    </select>
                    <select
                      id="birth-month"
                      className="birthdate-dropdown"
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                    >
                      <option value="" disabled selected>
                        Month
                      </option>
                      {generateOptions(1, 12)}
                    </select>
                    <select
                      id="birth-day"
                      className="birthdate-dropdown"
                      value={selectedDay}
                      onChange={(e) => setSelectedDay(parseInt(e.target.value))}
                      disabled={!selectedYear || !selectedMonth}
                    >
                      <option value="" disabled selected>
                        Day
                      </option>
                      {generateOptions(1, daysInMonth)}
                    </select>
                  </div>
                </div>
              </div>
              <div className="phone form-group">
                <div className="phone-number box">
                  <label htmlFor="phone-number-input">Phone Number</label>
                  <div className="phone-controls">
                    <select id="country-code-dropdown">
                      <option value={84}>+84 (Vietnam)</option>
                      <option value={1}>+1 (USA)</option>
                      <option value={44}>+44 (UK)</option>
                      <option value={49}>+49 (Germany)</option>
                      {/* Add more options as needed */}
                    </select>
                    <input
                      type="text"
                      id="phone-number-input"
                      name="phoneNumber"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div className="box available" />
              </div>
              <div className="address form-group">
                <div className="address-locate box">
                  <label htmlFor="address-input">Address</label>
                  <div className="address-controls">
                    <select id="vietnam-province-dropdown">
                      <option value="hcm">Ho Chi Minh City</option>
                      <option value="hn">Hanoi</option>
                      <option value="dn">Da Nang</option>
                      <option value="hp">Hai Phong</option>
                      <option value="ct">Can Tho</option>
                      <option value="bdu">Binh Duong</option>
                      {/* Add more options as needed */}
                    </select>
                    <input type="text" id="address-input" name="fullAddress" placeholder="Enter your Address" />
                  </div>
                </div>
              </div>
              <div className="save-cancel">
                <button type="submit" className="btn save-btn">
                  SAVE
                </button>
                <button type="button" className="btn cancel-btn">
                  CANCEL
                </button>
              </div>
            </div>
          </div>
          {/* Change Password */}
          <div className={`panel-content ${activePanelId === "change-password" ? "active" : ""}`} id="change-password">
            <h2 className="panel-title">Change Password</h2>
            <div className="password panel">
              <div className="current form-line">
                <label htmlFor="current-input">Current Password</label>
                <input type="password" id="current-input" placeholder="Enter your Current Password" />
              </div>
              <div className="new form-line">
                <label htmlFor="new-input">New Password</label>
                <input type="password" id="new-input" placeholder="Enter your New Password" />
              </div>
              <div className="confirm form-line">
                <label htmlFor="confirm-input">Confirm Password</label>
                <input type="password" id="confirm-input" placeholder="Enter your Confirm Password" />
              </div>
            </div>
            <div className="save-cancel">
              <button type="submit" className="btn save-btn">
                SAVE
              </button>
              <button type="button" className="btn cancel-btn">
                CANCEL
              </button>
            </div>
          </div>
          {/* Health Details */}
          <div className={`panel-content ${activePanelId === "health-details" ? "active" : ""}`} id="health-details">
            <h2 className="panel-title">Health Details</h2>
            <div className="health panel">
              <div className="blood-gender form-group">
                <div className="blood box">
                  <label htmlFor="blood-input">Blood ID</label>
                  <input type="text" id="blood-input" placeholder="Enter your Blood ID" className="blood-input" />
                </div>
                <div className="gender box">
                  <label htmlFor="gender-dropdown">Gender</label>
                  <select id="gender-dropdown">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="height-weight form-group">
                <div className="height box">
                  <label htmlFor="height-input">Body Height</label>
                  <div className="hw">
                    <select id="height-dropdown">
                      <option value="cm">cm</option>
                      <option value="feet">feet</option>
                      <option value="inch">inch</option>
                    </select>
                    <input
                      type="text"
                      id="height-input"
                      placeholder="Enter your Body Height"
                      className="height-input"
                    />
                  </div>
                </div>
                <div className="weight box">
                  <label htmlFor="weight-input">Body Weight</label>
                  <div className="hw">
                    <select id="weight-dropdown">
                      <option value="kg">Kg</option>
                      <option value="lb">Lb</option>
                    </select>
                    <input
                      type="text"
                      id="weight-input"
                      placeholder="Enter your Body Weight"
                      className="weight-input"
                    />
                  </div>
                </div>
              </div>
              <div className="insurance form-line">
                <label htmlFor="insurance-input">Health Insurance Card ID</label>
                <input type="text" id="insurance-input" placeholder="Enter your health insurance card ID" />
              </div>
              <div className="allergies form-line">
                <label htmlFor="allergies-input">Allergies (including drug allergies)</label>
                <input type="text" id="allergies-input" placeholder="Enter your allergies" />
              </div>
              <div className="problems form-line">
                <label htmlFor="problems-input">Chronic Health Problems (e.g., high blood pressure)</label>
                <input type="text" id="problems-input" placeholder="Enter your health problems" />
              </div>
            </div>
            <div className="save-cancel">
              <button type="submit" className="btn save-btn">
                SAVE
              </button>
              <button type="button" className="btn cancel-btn">
                CANCEL
              </button>
            </div>
          </div>
          {/* Privacy */}
          <div className={`panel-content ${activePanelId === "privacy" ? "active" : ""}`} id="privacy">
            <h2 className="panel-title">Privacy</h2>
            <div className="panel">
              <div className="activities privacy-settings form-line">
                <h3>Activity</h3>
                <label>
                  <input type="checkbox" checked /> Email me when my appointment comes
                </label>
                <label>
                  <input type="checkbox" /> Email me when the latest news thread
                </label>
                <label>
                  <input type="checkbox" checked /> Email me when check-up is needed
                </label>
              </div>
              <div className="applications privacy-settings form-line">
                <h3>Application</h3>
                <label>
                  <input type="checkbox" /> News and Announcements
                </label>
                <label>
                  <input type="checkbox" checked /> Weekly Health Updates
                </label>
                <label>
                  <input type="checkbox" checked /> Weekly Blog Digest
                </label>
              </div>
              <div className="connections privacy-settings form-line">
                <h3>Connections</h3>
                <p>
                  Connect to <a href="#">Twitter</a>
                </p>
                <p>
                  Connected to <a href="#google-acc">Google</a>
                  <span className="connection-status">
                    <span className="authorized">[Email Authorized]</span>
                    <a href="#" className="remove" onclick="removeConnection('google')">
                      Remove
                    </a>
                  </span>
                  <a href="#" className="remove" onclick="removeConnection('google')"></a>
                </p>
                <a href="#" className="remove" onclick="removeConnection('google')"></a>
                <p>
                  <a href="#" className="remove" onclick="removeConnection('google')">
                    Connected to{" "}
                  </a>
                  <a href="#facebook-acc">Facebook</a>
                  <span className="connection-status">
                    <span className="unauthorized" onclick="showAuthorizationPanel('facebook')">
                      [Facebook Unauthorized]
                    </span>
                    <a href="#" className="remove" onclick="removeConnection('facebook')">
                      Remove
                    </a>
                  </span>
                  <a href="#" className="remove" onclick="removeConnection('facebook')"></a>
                </p>
                <a href="#" className="remove" onclick="removeConnection('facebook')"></a>
                <p>
                  <a href="#" className="remove" onclick="removeConnection('facebook')">
                    Connect to{" "}
                  </a>
                  <a href="#">Instagram</a>
                </p>
              </div>
            </div>
          </div>
          {/* History */}
          <div className={`panel-content ${activePanelId === "history" ? "active" : ""}`} id="history">
            <h2 className="panel-title">History</h2>
            <div className="panel" id="table-content">
              <div className="card-body pb-2 table container">
                <table className="table-striped" data-toggle="table">
                  <thead>
                    <tr>
                      <th data-sortable="true" scope="col">
                        Timestamp
                      </th>
                      <th scope="col">Contents</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2024-05-25 12:00:00</td>
                      <td>Content 1</td>
                    </tr>
                    <tr>
                      <td>2024-03-10 15:20:00</td>
                      <td>Content 2</td>
                    </tr>
                    <tr>
                      <td>2024-02-15 09:45:00</td>
                      <td>Content 3</td>
                    </tr>
                    <tr>
                      <td>2024-01-01 00:00:00</td>
                      <td>Content 4</td>
                    </tr>
                    <tr>
                      <td>2023-11-18 08:30:00</td>
                      <td>Content 5</td>
                    </tr>
                    <tr>
                      <td>2023-11-15 08:30:00</td>
                      <td>Content 6</td>
                    </tr>
                    <tr>
                      <td>2023-05-18 08:30:00</td>
                      <td>Content 7</td>
                    </tr>
                    <tr>
                      <td>2023-05-18 08:30:00</td>
                      <td>Content 8</td>
                    </tr>
                    <tr>
                      <td>2023-05-18 08:30:00</td>
                      <td>Content 9</td>
                    </tr>
                    <tr>
                      <td>2023-05-18 08:30:00</td>
                      <td>Content 10</td>
                    </tr>
                    <tr>
                      <td>2023-05-18 08:30:00</td>
                      <td>Content 11</td>
                    </tr>
                    <tr>
                      <td>2023-05-18 08:30:00</td>
                      <td>Content 12</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Help & Support */}
          <div className={`panel-content ${activePanelId === "help-support" ? "active" : ""}`} id="help-support">
            <h2 className="panel-title">Help &amp; Support</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Personal;
