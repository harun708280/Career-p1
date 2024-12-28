import React, { useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { MdMarkEmailRead } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Contract = () => {
  useEffect(() => {
    document.title = "Career Path || Contact";
  }, []);

  // Define positions for three locations
  const positions = [
    { lat: 25.7439, lng: 89.2752, name: "Office 3 - Rangpur" },
    { lat: 25.734564, lng: 89.271937, name: "Office 3 - Rangpur" },
    { lat: 23.8103, lng: 90.4125, name: "Office 1 - Dhaka" },
    { lat: 24.3635, lng: 88.6246, name: "Office 2 - Rajshahi" }
  ];

  // Component to adjust the map bounds
  const MapBounds = () => {
    const map = useMap();

    // Create a LatLngBounds to fit all markers
    const bounds = positions.map(position => [position.lat, position.lng]);
    map.fitBounds(bounds);

    return null; // this component doesn't render anything, it's only for map control
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl font-bold mt-20">Contact Us</h1>
      </div>

      {/* Contact Info Section */}
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
        <div className="flex items-center space-x-6">
          <div className="bg-primary p-4 rounded-xl text-white text-3xl">
            <IoCall />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Call to ask any question</h1>
            <h1 className="text-2xl md:text-3xl font-extrabold">+0880158467623</h1>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="bg-primary p-4 rounded-xl text-white text-3xl">
            <MdMarkEmailRead />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Email us</h1>
            <h1 className="text-2xl md:text-3xl font-extrabold">info@careerPath.com</h1>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className="bg-primary p-4 rounded-xl text-white text-3xl">
            <FaLocationDot />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Visit our office</h1>
            <h1 className="text-2xl md:text-3xl font-extrabold">Dhaka, Bangladesh</h1>
          </div>
        </div>
      </div>

      {/* Form and Map Section */}
      <div className="my-12 flex items-center gap-6 flex-col md:flex-row w-11/12 mx-auto">
        <div className="w-full md:w-1/2">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered border-primary focus:outline-primary"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered border-primary focus:outline-primary"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="input input-bordered border-primary focus:outline-primary"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered border-primary focus:outline-primary"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <textarea
                  className="textarea textarea-primary border-primary w-full"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div className="mt-4">
              <button className="flex items-center text-xl font-bold text-white btn bg-primary hover:bg-primary">
                <span>Send</span>
                <IoIosSend />
              </button>
            </div>
          </form>
        </div>

        {/* Map Section */}
        <div className="w-full inset-0 z-10 md:w-1/2 mt-8 md:mt-0">
          <MapContainer
            center={[25.7439, 89.2752]} // Default center of the map
            zoom={20}
            scrollWheelZoom={false}
            className="h-[500px] w-full rounded-lg"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Add all markers */}
            {positions.map((position, index) => (
              <Marker key={index} position={[position.lat, position.lng]}>
                <Popup>{position.name}</Popup>
              </Marker>
            ))}
            <MapBounds /> {/* Dynamically adjust map view */}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Contract;
