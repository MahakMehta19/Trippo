import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame.</p>

      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Explore the captivating beauty of Taal Volcano in Batangas, Philippines. Known for its picturesque landscapes, this active volcano cradles a mesmerizing crater lake, offering a unique and breathtaking experience. Take a boat ride across Taal Lake, hike to the crater's edge, and witness the stunning panoramic views of the surrounding countryside. Taal Volcano promises an unforgettable adventure for nature enthusiasts and photographers alike."
        img1="https://img.freepik.com/free-photo/volcano-sunset_1150-18320.jpg?w=360&t=st=1702395475~exp=1702396075~hmac=16d92138ce5e294001174eac80660ff756ba25db0a23f8fad51bdbcc9e657b23"
        img2="https://img.freepik.com/free-photo/mountainous-landscape-with-fog_1150-18329.jpg?w=900&t=st=1702395495~exp=1702396095~hmac=841a72b5bea585ba0b33575c0fe7b9ddcfa2df3f2dcc5c7e132040f11322aa80"
      />
      <DestinationData
        className="first-des-reverse"
        heading="Mt. Daguldul, Batangas"
        text="Embark on an adventure to Mt. Daguldul in Batangas, Philippines. Nestled amid lush landscapes, this majestic mountain offers a challenging yet rewarding trek for nature enthusiasts. Traverse through dense forests, witness vibrant flora, and savor panoramic views from the summit. Mt. Daguldul promises a memorable experience for avid hikers seeking tranquility and natural beauty."
        img1="https://img.freepik.com/free-photo/top-hill_1353-277.jpg?w=900&t=st=1702392865~exp=1702393465~hmac=f92f1daea3aa86de8f25a3a61c1c9b605f6a3e4be364bc51a0dd0790941c4d38"
        img2="https://img.freepik.com/premium-photo/thailandsunrise-phu-chee-dao-peak-mountain-chiang-rai-thailand_387864-19.jpg?w=900"
      />
    </div>
  );
};

export default Destination;
