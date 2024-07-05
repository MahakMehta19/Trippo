import "./TripStyles.css";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destination using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image="https://img.freepik.com/premium-photo/pura-ulun-danu-bratan-hindu-temple-with-boat-bratan-lake-landscape-sunrise-bali-indonesia_29505-914.jpg?w=900"
          heading="Trip in Indonesia"
          text="Discover the enchanting archipelago of Indonesia, a tropical paradise blessed with diverse landscapes, vibrant cultures, and pristine beaches. Immerse yourself in the rich heritage, explore ancient temples, and indulge in the warm hospitality of this Southeast Asian gem."
        />
        <TripData
          image="https://img.freepik.com/free-photo/long-boat-blue-water-maya-bay-phi-phi-island-krabi-thailand_335224-895.jpg?w=900&t=st=1702460715~exp=1702461315~hmac=eead6b3c29f43e6ff6d916de32f0b1b76ca0ed7eb062be87e0fcf3abc6d2748c"
          heading="Trip in Malaysia"
          text="the cultural tapestry and natural wonders of Malaysia, where bustling cities seamlessly blend with ancient rainforests and pristine beaches. Immerse yourself in the vibrant street life, savor diverse culinary delights, and witness the harmonious coexistence of tradition and modernity in this Southeast Asian gem."
        />
        <TripData
          image="https://img.freepik.com/premium-photo/seine-paris-with-eiffel-tower_219717-5575.jpg"
          heading="Trip in France"
          text="the timeless allure of France, a country synonymous with romance, art, and gastronomy. From the iconic Eiffel Tower to the sun-kissed vineyards of Provence, France captivates with its historic charm, world-class museums, and culinary delights. Immerse yourself in its cultural splendor and picturesque landscapes."
        />
      </div>
    </div>
  );
}

export default Trip;
