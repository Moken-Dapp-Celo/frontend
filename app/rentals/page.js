'use client'

import Navbar from "@/components/Navbar";
import SearchField from "@/components/SearchField";
import CardList from "@/components/CardList";
import { useState, useEffect } from "react";
import Property from "@/abi/Property.json";
import { ethers } from "ethers";

export default function Rentals() {
  const [rentals, setRentals] = useState([]); // useState for storing all rental data
  const [filteredRentals, setFilteredRentals] = useState([]); // useState for storing filtered rental data
  const [searchTerm, setSearchTerm] = useState(''); // useState for storing search term
  const [contract, setContract] = useState(null);
  const [blockchainRental, setBlockchainRental] = useState(null)


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

    const fetchRental = async () => {
      try {
        await initialize();
        // Fetch rental data from your API or data source
        const rental = await contract.property()
        console.log(rental)
        setBlockchainRental({
          id: 0, 
          price: rental[1].toString(),
          image: 'https://aremorch.com/wp-content/uploads/2016/09/The-Details-That-Matter-Top-Things-Every-Luxury-Hotel-Room-Should-Have.png',
          address: rental[5],
          type: rental[4],
          bedrooms: 4,
          size: 2500,
          spots: 2,

        })
        setRentals([
          blockchainRental,
          {
            id: 1,
            type: 'Beach House',
            price: 300,
            address: '123 Oceanfront Dr, Malibu, CA 90265',
            bedrooms: 4,
            size: 2500,
            spots: 2,
            image: 'https://a0.muscache.com/im/pictures/c2e375fb-8974-4d6b-9214-317198344b3c.jpg?im_w=720'
          },
          {
            id: 2,
            type: 'Mountain Cabin',
            price: 200,
            address: '456 Pine Tree Ln, Aspen, CO 81611',
            bedrooms: 3,
            size: 1800,
            spots: 4,
            image: 'https://a0.muscache.com/im/pictures/b6593d81-46cf-4463-9ee0-bd805aec10a2.jpg?im_w=720'
          },
          {
            id: 3,
            type: 'Lakefront Cottage',
            price: 150,
            address: '789 Lakeside Rd, Lake Tahoe, CA 96150',
            bedrooms: 2,
            size: 1200,
            spots: 1,
            image: 'https://a0.muscache.com/im/pictures/miso/Hosting-3298227/original/72421c00-2ad8-450e-923a-5350b3ff069f.jpeg?im_w=720'
          },
          {
            id: 4,
            type: 'Luxury Villa',
            price: 500,
            address: '101 Luxury Way, Ibiza, Spain',
            bedrooms: 5,
            size: 4000,
            spots: 6,
            image: 'https://a0.muscache.com/im/pictures/281b9c7a-e4e5-49d4-84bb-1ea87b464e9d.jpg?im_w=720'
          },
          {
            id: 5,
            type: 'Ski Chalet',
            price: 250,
            address: '321 Mountain View Dr, Whistler, BC V8E 0N7',
            bedrooms: 3,
            size: 2200,
            spots: 3,
            image: 'https://a0.muscache.com/im/pictures/3fcdccc4-eb86-4b8f-971b-ba8cd7c3fe47.jpg?im_w=720'
          },
          {
            id: 6,
            type: 'Desert Oasis',
            price: 180,
            address: '555 Sand Dune Rd, Scottsdale, AZ 85255',
            bedrooms: 2,
            size: 1600,
            spots: 2,
            image: 'https://a0.muscache.com/im/pictures/578a3500-5461-4beb-91bb-827da53afa78.jpg?im_w=720'
          },
        ])
    
      } catch (error) {
        console.error('Error fetching rentals:', error);
      }
    };
    fetchRental()
  }, [contract]);


  // onSearch function for searching rentals
  const onSearch = (searchTerm) => {
    setSearchTerm(searchTerm); // Update the search term state
    filterRentals(searchTerm); // Filter rentals based on the search term
  };

  // Function to filter rentals based on search term
  const filterRentals = (searchTerm) => {
    // Implement your search logic here to search across all fields
    const filtered = rentals.filter((blockchainRental) => {
      // Convert all fields to lowercase for case-insensitive search
      const rentalValues = Object.values(blockchainRental).map((value) =>
        typeof value === 'string' ? value.toLowerCase() : value
      );

      // Check if any field includes the searchTerm
      return rentalValues.some((value) =>
        String(value).includes(searchTerm.toLowerCase())
      );
    });

    setFilteredRentals(filtered); // Update the filteredRentals state with filtered data
  };

  // Function to reset filtered rentals and search term
  const resetFilter = () => {
    setFilteredRentals(rentals); // Show all rentals
    setSearchTerm(''); // Clear the search term
  };

  return (
    <div>
      <Navbar />
      <div className="px-6">
        <span className="flex justify-between items-center">
          <h1 className="mx-8 my-4 font-bold text-3xl pb-8">All rentals</h1>
          <SearchField onSearch={onSearch} onBlur={resetFilter} />
        </span>
        <CardList filteredRentals={searchTerm ? filteredRentals : rentals} />
      </div>
    </div>
  );
}
