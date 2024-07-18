import React from "react";
import '../../style/Profile.css'; // Adjust the path as per your actual project structure
import profilepic from '../../assets/profilepic.png';
import qrcode from '../../assets/qrcode.svg';

export const UserProfile = () => {
  return (
    <div className="profile-container">
      <div className="profile-picture">
        <img src={profilepic} alt="Profile" />
      </div>
      <div className="profile-details">
        <div className="qr-code">
          <img src={qrcode} alt="QR Code" />
        </div>
        <h2>Name: John Doe</h2>
        <p>Phone Number: (123) 456-7890</p>
        <p>Age: 30</p>
        <p>Department: Trade Finance</p>
        <p>Buddy Contact: Jane Smith - (987) 654-3210</p>
        <p>Emergency Contact: (555) 555-5555</p>
        <p>Office Desk Number: 1234</p>
      </div>
    </div>
  );
};

// export default UserProfile;
