import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../state/products.slice';

const ProductsList = ({ categoryFilter = 'All' }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  // Estados para los filtros
  const [selectedLighting, setSelectedLighting] = useState([]);
  const [selectedConnectivity, setSelectedConnectivity] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState([]);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  // Función para manejar el cambio de los filtros
  const handleFilterChange = (filterType, value) => {
    switch (filterType) {
      case 'lighting':
        setSelectedLighting((prev) =>
          prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
        );
        break;
      case 'connectivity':
        setSelectedConnectivity((prev) =>
          prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
        );
        break;
      case 'series':
        setSelectedSeries((prev) =>
          prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
        );
        break;
      default:
        break;
    }
  };

  // Filtrado de productos según los filtros seleccionados
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      categoryFilter === 'All' || product.category === categoryFilter;
    const matchesLighting =
      selectedLighting.length === 0 ||
      selectedLighting.some((light) => product.features.lighting.includes(light));
    const matchesConnectivity =
      selectedConnectivity.length === 0 ||
      selectedConnectivity.some((conn) => product.features.connectivity.includes(conn));
    const matchesSeries =
      selectedSeries.length === 0 || selectedSeries.includes(product.features.series);

    return matchesCategory && matchesLighting && matchesConnectivity && matchesSeries;
  });

  return (
    <div>
      <h1>Products</h1>

      {/* Filtros */}
      <div>
        <h3>Lighting</h3>
        <label>
          <input
            type="checkbox"
            value="LIGHTSYNC RGB"
            onChange={(e) => handleFilterChange('lighting', e.target.value)}
          />
          LIGHTSYNC RGB
        </label>
        <label>
          <input
            type="checkbox"
            value="Retroiluminación"
            onChange={(e) => handleFilterChange('lighting', e.target.value)}
          />
          Retroiluminación
        </label>

        <h3>Connectivity</h3>
        <label>
          <input
            type="checkbox"
            value="Con cable"
            onChange={(e) => handleFilterChange('connectivity', e.target.value)}
          />
          Con cable
        </label>
        <label>
          <input
            type="checkbox"
            value="Bluetooth"
            onChange={(e) => handleFilterChange('connectivity', e.target.value)}
          />
          Bluetooth
        </label>

        <h3>Series</h3>
        <label>
          <input
            type="checkbox"
            value="PRO"
            onChange={(e) => handleFilterChange('series', e.target.value)}
          />
          PRO
        </label>
        <label>
          <input
            type="checkbox"
            value="G"
            onChange={(e) => handleFilterChange('series', e.target.value)}
          />
          G
        </label>
      </div>

      {/* Lista de productos */}
      <div>
        {status === 'loading' && <p>Loading...</p>}
        {status === 'succeeded' &&
          filteredProducts.map((product) => (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <img src={product.image} alt={product.name} />
              <p>{product.category}</p>
              <p>${product.price}</p>
            </div>
          ))}
        {status === 'failed' && <p>Error loading products</p>}
      </div>
    </div>
  );
};

export default ProductsList;