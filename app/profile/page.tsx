'use client';

import { FormEvent, useState } from "react";

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
}

export default function Profile() {
  // TODO: Get user data from auth context/session
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [saveMessage, setSaveMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // TODO: Add API call to update profile
    console.log("Profile updated:", profile);
    setSaveMessage("Profile updated successfully!");
    setIsEditing(false);
    setTimeout(() => setSaveMessage(""), 3000);
  };

  return (
    <div className="wrapper">
      <h1>My Profile</h1>

      {saveMessage && <p className="success-message">{saveMessage}</p>}

      {isEditing ? (
        <form onSubmit={handleSubmit} className="profile-form">
          <div className="profile-form__group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={profile.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="profile-form__group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="profile-form__group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
            />
          </div>

          <div className="profile-form__group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={profile.address}
              onChange={handleChange}
            />
          </div>

          <div className="profile-form__actions">
            <button type="submit" className="btn btn--primary">
              Save Changes
            </button>
            <button
              type="button"
              className="btn btn--secondary"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="profile-view">
          <p>
            <strong>Name:</strong> {profile.name}
          </p>
          <p>
            <strong>Email:</strong> {profile.email}
          </p>
          <p>
            <strong>Phone:</strong> {profile.phone}
          </p>
          <p>
            <strong>Address:</strong> {profile.address}
          </p>
          <button
            className="btn btn--primary"
            onClick={() => setIsEditing(true)}
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
}
