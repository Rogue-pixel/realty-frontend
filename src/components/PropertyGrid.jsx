import PropertyCard from "./PropertyCard";

const DUMMY_PROPERTIES = [
  {
    id: 1,
    type: "residential",
    category: "Villa",
    approval: "BDA Approved",
    title: "Hebbal Lakeview Premium Villa",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800",
    price: "₹12.5 Cr",
    specs: { beds: 4, baths: 4.5, sqft: "4,200" },
    address: "Outer Ring Road, Hebbal, Bangalore",
  },
  {
    id: 2,
    type: "land",
    category: "Residential Plot",
    approval: "BMRDA Approved",
    title: "Devanahalli Airport Road Layout",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    price: "₹85 Lakh",
    specs: { dimensions: "40 × 60 ft", facing: "East Facing", pricePerSqft: "₹3,541 / sq.ft" },
    address: "Off Airport Road, Devanahalli",
  },
  {
    id: 3,
    type: "residential",
    category: "Apartment",
    approval: "RERA Approved",
    title: "Thanisandra High-Rise Luxury",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800",
    price: "₹2.1 Cr",
    specs: { beds: 3, baths: 3, sqft: "2,150" },
    address: "Thanisandra Main Road, Bangalore",
  },
  {
    id: 4,
    type: "land",
    category: "Commercial Site",
    approval: "BBMP 'A' Khata",
    title: "Yelahanka New Town Commercial Plot",
    image:
      "https://images.unsplash.com/photo-1596767448373-d5d36e788730?auto=format&fit=crop&q=80&w=800",
    price: "₹4.5 Cr",
    specs: { dimensions: "50 × 80 ft", facing: "North Facing", pricePerSqft: "₹11,250 / sq.ft" },
    address: "Yelahanka New Town, Bangalore",
  },
  {
    id: 5,
    type: "residential",
    category: "Bungalow",
    approval: "BDA Approved",
    title: "Sahakar Nagar Legacy Bungalow",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    price: "₹8.9 Cr",
    specs: { beds: 5, baths: 5.5, sqft: "5,800" },
    address: "A Block, Sahakar Nagar, Bangalore",
  },
  {
    id: 6,
    type: "land",
    category: "Development Site",
    approval: "DC Converted",
    title: "Bhoopasandra Multi-Acre Parcel",
    image:
      "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=800",
    price: "₹18 Cr",
    specs: { dimensions: "1.5 Acres", facing: "Any Facing", pricePerSqft: "₹2,750 / sq.ft" },
    address: "Main Road, Bhoopasandra, Bangalore",
  },
];

export default function PropertyGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {DUMMY_PROPERTIES.map((prop) => (
        <PropertyCard
          key={prop.id}
          image={prop.image}
          price={prop.price}
          title={prop.title}
          address={prop.address}
          type={prop.type}
          category={prop.category}
          approval={prop.approval}
          specs={prop.specs}
        />
      ))}
    </div>
  );
}
