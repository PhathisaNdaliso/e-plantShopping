import { useNavigate } from "react-router-dom";

function AboutUs() {
  const navigate = useNavigate();

  return (
    <div className="aboutus-container">
      <h1>Paradise Nursery 🌱</h1>
      <p>
        We bring nature into your home with our premium houseplants.
      </p>

      <button onClick={() => navigate("/products")}>
        Get Started
      </button>
    </div>
  );
}

export default AboutUs;