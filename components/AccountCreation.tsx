"use client";
 import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function AccountCreation() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  <input
  type={showPassword ? "text" : "password"}
/>

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) =>({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[#212121] flex items-center justify-center px-4 py-10 text-white">
      <div className="w-full max-w-md px-6">
        {/* <h2 className="text-lg text-gray-300">Account Creation</h2> */}

        {/* Card */}
        <div className="bg-[#212121] rounded-2xl p-6 shadow-lg">
          {/* Image Placeholder */}
          <div className="bg-[#535353] h-64 p-6 rounded-2xl flex items-center justify-center mb-6 ">
            <span className="text-gray-300">Project Name</span>
          </div>

          {/* Form */}
          <div className="space-y-6 m-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-1 rounded-md bg-gray-200 text-black"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-1 rounded-md bg-gray-200 text-black"
            />

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              className="w-full p-1 rounded-md bg-gray-200 text-black"
            />

    <div className="space-y-5">
  {/* Password Field */}
  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      name="password"
      placeholder="Password"
      value={form.password}
      onChange={handleChange}
      className="w-full p-1 rounded-md bg-gray-200 text-black"
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
    >
      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
    </button>
  </div>

  {/* Confirm Password */}
  <div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    name="confirmPassword"
    placeholder="Confirm Password"
    value={form.confirmPassword}
    onChange={handleChange}
    className="w-full p-1 rounded-md bg-gray-200 text-black"
  />

  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
  >
    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
  </button>
    </div></div>        
</div>

          {/* Button */}
          <div className="flex justify-end mt-6">
            <button className="bg-gray-500 leading-none tracking-normal px-6 py-2 top-140 mx-6 hover:bg-gray-400 text-white  rounded-full font-actor text-[13px]">
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
 