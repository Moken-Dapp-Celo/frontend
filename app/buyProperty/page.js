'use client'

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { useSelectedRental } from "../../contexts/rental";
import { useRouter } from "next/navigation";
import { ethers } from "ethers";
import Property from "@/abi/Property.json";

export default function BuyProperty() {
  const { setSelectedRental, selectedRental } = useSelectedRental();
  const [contract, setContract] = useState(null);
  const router = useRouter();
  const [date, setDate] = useState("");
  const [feedback, setFeedback] = useState(""); // State for feedback message

  useEffect(() => {
    const initialize = async () => {
      const contractAddress = "0x166277B8ec55AA28C38E986134DB28F25bF731a4";
      const contractABI = Property.abi;
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const propertyContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      setContract(propertyContract);
    };
    initialize();
    if (selectedRental == null) {
      console.log("selectedRental is null");
      router.push("/");
    }
  }, [selectedRental]);

  const buy = async () => {
    try {
      const result = await contract.booking(date);
      if (result) {
        // Booking was successful
        setFeedback("Your booking was successful");
      } else {
        // Booking failed (date already booked)
        setFeedback("This date is already booked");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle other errors if needed
      setFeedback("This date is already booked");
    }
  };

  return (
    <div>
      <Navbar />
      <h1 className="m-16 font-bold text-3xl">
        Purchase property access token
      </h1>
      {/* Display feedback message if available */}
      {feedback && (
        <div className={feedback === "Your booking was successful" ? "text-green-500 ml-16" : "text-red-500 ml-16"}>
          {feedback}
        </div>
      )}
      <div className="flex justify-between mt-16 mx-24">
        <div>
          <div>
            <p className="font-semibold text-xl">Date</p>
            <input
              type="string"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-6 py-3 w-96 px-2 rounded-lg border border-black hover:cursor-pointer"
            />
          </div>
          <div className="mt-8">
            <p className="font-semibold text-xl">ID</p>
            <input
              type="text"
              className="mt-6 py-3 w-96 px-2 rounded-lg border border-black"
            />
          </div>
          <div className="mt-8">
            <h1 className="text-2xl font-bold">
              Price: USD {selectedRental?.price}
            </h1>
          </div>
          <button
            className="w-96 py-4 rounded-md font-bold mt-12 bg-black text-white hover:scale-95 duration-300"
            onClick={buy}
          >
            Buy token
          </button>
        </div>
        <div>
          <Image
            src="/Illustration2.svg"
            alt="Illustration"
            width={850}
            height={550}
          />
        </div>
      </div>
    </div>
  );
}
