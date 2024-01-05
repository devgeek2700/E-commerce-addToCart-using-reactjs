import React, { useState, useEffect } from "react";
import "./card.css";

function Card() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        console.log("API Response:", data);

        if (!response.ok) {
          throw new Error(data.error || "Failed to fetch products");
        }

        if (Array.isArray(data)) {
          setProducts(data);
        } else if (data && Array.isArray(data.products)) {
          // Adjust this based on the actual structure of the API response
          setProducts(data.products);
        } else {
          throw new Error("Invalid response format. Expected an array.");
        }
      } catch (error) {
        console.error("Error during product fetch:", error.message);
      }
    };

    fetchProducts();
  }, []);

  // search by name
  //   const filteredProducts = products.filter((product) =>
  //   product.title.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const filteredProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((product) => {
      if (!selectedPriceRange) return true; // Show all products if no price range is selected
      const [minPrice, maxPrice] = selectedPriceRange.split("-");
      const productPrice = parseFloat(product.price);
      return (
        productPrice >= parseFloat(minPrice) &&
        productPrice <= parseFloat(maxPrice)
      );
    });

  const priceRanges = ["0-300", "301-700", "701-1000", "1100-2000"];

  return (
    <>
      <div>
        {/* Search bar */}
        <div className="searchBar">
          <div class="input-box">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Search Products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Price filter buttons */}
        <div className="priceFilter">
          <p>Filter by Price:</p>
          {priceRanges.map((range) => (
            <button
              key={range}
              id="PriceBtn"
              className={selectedPriceRange === range ? "selected" : ""}
              onClick={() => setSelectedPriceRange(range)}
            >
              {range}
            </button>
          ))}
          <button
            id="PriceBtn"
            className={!selectedPriceRange ? "selected" : ""}
            onClick={() => setSelectedPriceRange(null)}
          >
            All
          </button>
        </div>

        <div className="main">
          <h1>Top Selling Products</h1>
          <ul className="cards">
            {filteredProducts.map((product) => (
              <li key={product.id} className="cards_item">
                <div className="card">
                  <div className="card_image">
                    <img src={product.images[0]} alt={product.title} />
                  </div>
                  <div className="card_content">
                    <h2 className="card_title">{product.title}</h2>
                    <p className="card_desc">{product.description}</p>
                    <div class="rating">
                      <i class="fa-solid fa-star starbox"></i>
                      <i class="fa-solid fa-star starbox"></i>
                      <i class="fa-solid fa-star starbox"></i>
                      <i class="fa-solid fa-star starbox"></i>
                      <i class="fa-solid fa-star-half starbox"></i>
                    </div>
                    <p className="card_text">${product.price}</p>
                    <button className="btn card_btn">Read More</button>
                    <button className="btn card_btn">Add to cart</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="made_by">Made with India</h3>
      </div>
    </>
  );
}

export default Card;
