import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";


const plants = [
  // Aromatic
  { id: 1, name: "Lavender", price: 120, category: "Aromatic", img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=300&h=200&fit=crop", desc: "Relaxing fragrance plant" },
  { id: 2, name: "Mint", price: 80, category: "Aromatic", img: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=300&h=200&fit=crop", desc: "Fresh and cooling herb" },
  { id: 3, name: "Rosemary", price: 95, category: "Aromatic", img: "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?w=300&h=200&fit=crop", desc: "Aromatic cooking herb" },
  { id: 4, name: "Thyme", price: 70, category: "Aromatic", img: "https://images.unsplash.com/photo-1604908176997-431a0a3a3aad?w=300&h=200&fit=crop", desc: "Used in cooking and medicine" },
  { id: 5, name: "Sage", price: 85, category: "Aromatic", img: "https://images.unsplash.com/photo-1603048719533-6d3a1d021fd8?w=300&h=200&fit=crop", desc: "Healing herb" },
  { id: 6, name: "Lemongrass", price: 90, category: "Aromatic", img: "https://images.unsplash.com/photo-1625944525533-473f1f60c0f6?w=300&h=200&fit=crop", desc: "Citrus aroma plant" },

  // Medicinal
  { id: 7, name: "Aloe Vera", price: 150, category: "Medicinal", img: "https://images.unsplash.com/photo-1593691509543-c55fb32b9c19?w=300&h=200&fit=crop", desc: "Skin healing plant" },
  { id: 8, name: "Basil", price: 90, category: "Medicinal", img: "https://images.unsplash.com/photo-1589927986089-35812388d1e4?w=300&h=200&fit=crop", desc: "Boosts immunity" },
  { id: 9, name: "Chamomile", price: 110, category: "Medicinal", img: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?w=300&h=200&fit=crop", desc: "Calming herb" },
  { id: 10, name: "Echinacea", price: 130, category: "Medicinal", img: "https://images.unsplash.com/photo-1625944525533-473f1f60c0f6?w=300&h=200&fit=crop", desc: "Immune support plant" },
  { id: 11, name: "Peppermint", price: 85, category: "Medicinal", img: "https://images.unsplash.com/photo-1585325701954-dc9c3c7b4e6b?w=300&h=200&fit=crop", desc: "Digestive aid" },
  { id: 12, name: "Ginger Plant", price: 140, category: "Medicinal", img: "https://images.unsplash.com/photo-1598514982841-9c5e7c2f8a7d?w=300&h=200&fit=crop", desc: "Anti-inflammatory plant" },

  // Indoor
  { id: 13, name: "Snake Plant", price: 200, category: "Indoor", img: "https://images.unsplash.com/photo-1587502536263-3a33c6c9f0f7?w=300&h=200&fit=crop", desc: "Air purifying plant" },
  { id: 14, name: "Peace Lily", price: 180, category: "Indoor", img: "https://images.unsplash.com/photo-1598880940942-1e0f5f7f2a6e?w=300&h=200&fit=crop", desc: "Elegant indoor plant" },
  { id: 15, name: "Spider Plant", price: 160, category: "Indoor", img: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=300&h=200&fit=crop", desc: "Easy to maintain plant" },
  { id: 16, name: "ZZ Plant", price: 220, category: "Indoor", img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=300&h=200&fit=crop", desc: "Low light plant" },
  { id: 17, name: "Pothos", price: 140, category: "Indoor", img: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=300&h=200&fit=crop", desc: "Trailing indoor plant" },
  { id: 18, name: "Rubber Plant", price: 210, category: "Indoor", img: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=300&h=200&fit=crop", desc: "Glossy leaf plant" }
];
function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const isInCart = (id) => cartItems.find(item => item.id === id);

  return (
    <div>
      <Navbar />
      <h2>Our Plants</h2>

      {["Aromatic", "Medicinal", "Indoor"].map(category => (
        <div key={category}>
          <h3>{category}</h3>
          {loading 
            ? Array(3).fill(0).map((_, idx) => <div key={idx} className="skeleton"></div>)
            : plants.filter(p => p.category === category).map(plant => (
              <div className="card" key={plant.id}>
                <img src={plant.img} alt={plant.name} width="150" />
                <h4>{plant.name}</h4>
                <p>{plant.desc}</p>
                <p><b>R{plant.price}</b></p>
                <button
                  disabled={isInCart(plant.id)}
                  onClick={() => dispatch(addToCart(plant))}
                >
                  {isInCart(plant.id) ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
          ))}
        </div>
      ))}
    </div>
  );
}
export default ProductList;