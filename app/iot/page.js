"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { ethers } from "ethers";
import Property from "@/abi/Property.json";

export default function BuyProperty() {
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [feedback, setFeedback] = useState("");
  const [contract, setContract] = useState(null);

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
  }, []);

  const handleSimulate = async () => {
    const result = await contract.checkIn(date, address);
    console.log(result);
    setFeedback(result ? "Door unlocked!" : "Door did not unlock!");
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center p-4 md:flex-row md:justify-around">
        <div className="p-4 rounded-md border border-black bg-white mb-4 md:w-1/2 md:mr-4">
          <h1 className="font-bold text-2xl mb-4 md:text-3xl">
            IoT Simulation
          </h1>
          <label className="mb-2">
            Day:
            <input
              type="text"
              className="border rounded-md ml-2 p-1 w-full"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
          <label className="mb-2">
            Address:
            <input
              className="border rounded-md ml-2 p-1 w-full"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>

          <button
            className="mt-4 bg-black text-white font-bold w-full h-12 rounded-lg hover:scale-95 duration-300"
            onClick={handleSimulate}
          >
            Simulate
          </button>

          {feedback && <p className="mt-2 text-center">{feedback}</p>}
        </div>
        <Image
          src="/Illustration3.svg"
          alt="Illustration"
          width={500}
          height={500}
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}
