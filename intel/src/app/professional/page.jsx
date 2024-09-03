"use client";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Professional() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    Organization: "",
    Location: "",
    Position: "",
    MoreInformation: "",
  });

  useEffect(() => {
    const personalData = JSON.parse(localStorage.getItem("personalData"));
    const educationData = JSON.parse(localStorage.getItem("educationData"));
    if (personalData && educationData) {
      setFormData((prev) => ({ ...prev, ...personalData, ...educationData }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        router.push("/success");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className="min-h-screen bg-green-100">
      <Navbar />
      <form className="space-y-6" onSubmit={handleSubmit}>
        <h1 className="text-main text-xl  font-medium">Current Career</h1>
        <div className="parent">
          <div>
            <label>Organization</label>
            <br />
            <input type="text" name="Organization" onChange={handleChange} />
            <br />
          </div>
          <div>
            <label>Location</label>
            <br />
            <input
              type="text"
              placeholder="e.g: KG 297 ST"
              name="Location"
              onChange={handleChange}
            />
            <br />
          </div>
        </div>
        <div className="parent">
          <div>
            <label>Position</label>
            <br />
            <input type="text" name="Position" onChange={handleChange} />
            <br />
          </div>
        </div>
        <div className="">
          <div>
          <label className="text-main text-xl parent mt-12 mb-8  font-medium">
            Additional Information
          </label>
          <br />
          <textarea
            placeholder="Enter extra information"
            className="parent bg-transparent border border-main rounded-md w-[400px] h-[120px] pl-2 py-3 "
            name="MoreInformation"
            onChange={handleChange}
          />
          <br />
          </div>
         
        </div>
        <label className="text-sm flex gap-3 ml-[200px]">
                    <input
                        type="checkbox"
                        className="w-3 h-3 mt-[4px]"
                        required
                    />
                    I hereby confirm that all the information provided is true
                    and accurate to the best of my knowledge, and I agree to the
                    terms and conditions of this platform.
                </label>
        <div className="flex justify-around py-4">
          <button
            type="submit"
            className="border border-main bg-main text-white px-10 py-1 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
}
