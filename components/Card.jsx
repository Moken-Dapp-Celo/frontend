// Card.js
import Image from 'next/image';
import { useSelectedRental } from '../contexts/rental';
import { useRouter } from 'next/navigation';

const Card = ({ price, address, size, bedrooms, spots, type, image }) => {
  const { setSelectedRental } = useSelectedRental();
  const router = useRouter();

  const handleCardClick = () => {
    // Set the selected rental when the card is clicked
    setSelectedRental({
      type,
      price,
      address,
      bedrooms,
      size,
      spots,

    });

    router.push('/buyProperty');
  };

  return (
    <div
      className="border rounded-md py-6 w-full bg-white border-black hover:cursor-pointer hover:scale-[98%] duration-300"
      onClick={handleCardClick}
    >
      <img src={image} className="w-full" width={200} height={200} alt={type} />
      <div className="px-4 pt-4 gap-2 flex flex-col">
        <p className="text-gray-500 text-xs">{type}</p>
        <p className="font-semibold">Starting at USD {price}/day</p>
        <p className="text-xs">{address}</p>
        <p className="text-xs">
          {size} m² • {bedrooms} bedrooms • {spots} parking spots
        </p>
      </div>
    </div>
  );
};

export default Card;
