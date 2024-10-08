import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, addToSavedProducts, removeFromSavedProducts, addToCart } from '../../state/products.slice';
import {
  ProductsContainer,
  FiltersContainer,
  OverlayFiltersContainer,
  ProductsGrid,
  ProductCard,
  ProductImage,
  FilterTitle,
  FilterSection,
  CartIcon,
  CheckboxLabel,
  ProductInfo,
  ProductPrice,
  AddToCartButton,
  CheckboxInput,
  SortContainer,
  HideFiltersButton,
  SortDropdown,
  MainSortContainer,
  FilterOptions,
  ProductButton,
  IconOverlay,
  ProductImageWrapper,
  IconsWrapper,

} from './styles.js';
import { FiEye, FiFilter, FiHeart, FiMinus, FiPlus } from 'react-icons/fi';
import { FaHeart, FaMinus, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ProductsList = ({ categoryFilter = 'All', availableFilters = [], availableFeatureValues = {} }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  const [selectedFilters, setSelectedFilters] = useState({
    lighting: [],
    connectivity: [],
    series: [],
    platform: [],
    feeding: [],
    sensorType: []
  });

  const [visibility, setVisibility] = useState({
    feeding: true,
    lighting: true,
    connectivity: true,
    series: true,
    platform: true,
    sensorType: true,
  });

  const toggleCategoryVisibility = (category) => {
    setVisibility((prevState) => ({
      ...prevState,
      [category]: !prevState[category],  // Cambia solo la casilla específica
    }));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const [showFilters, setShowFilters] = useState(true); // Los filtros están ocultos por defecto en pantallas pequeñas
  const [sortOption, setSortOption] = useState('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1080);

    // Función para restablecer los filtros
    const resetFilters = () => {
      setSelectedFilters({
        lighting: [],
        connectivity: [],
        series: [],
        platform: [],
        feeding: [],
        sensorType: []
      });
    };

     // Detectar el cambio en el tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth <= 1080;
      setIsMobile(isNowMobile);

      // Si es mobile, restablecer los filtros
      if (isNowMobile) {
        resetFilters();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
        checkbox.checked = false; // Reiniciar visualmente las casillas
      });
    }
  }, [isMobile]);
  
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <p>Loading products...</p>;
  }

  if (status === 'failed') {
    return <p>Error loading products</p>;
  }

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((v) => v !== value)
        : [...prev[filterType], value],
    }));
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const filteredProducts = products
    .filter((product) => {
      const matchesCategory = categoryFilter === 'All' || product.category === categoryFilter;
      const matchesFilters = Object.keys(selectedFilters).every((filter) => {
        if (selectedFilters[filter].length === 0) return true;
        return selectedFilters[filter].some((value) => product.features[filter]?.includes(value));
      });

      return matchesCategory && matchesFilters;
    })
    .sort((a, b) => {
      if (sortOption === "price-low-high") return a.price - b.price;
      if (sortOption === "price-high-low") return b.price - a.price;
      if (sortOption === "name") return a.name.localeCompare(b.name);
      return 0; // Estado original
    });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 })
      .format(price)
      .replace('$', '$ ');
  };

  return (
    <>
      <MainSortContainer>
        <SortContainer>
            <HideFiltersButton onClick={() => setShowFilters(!showFilters)}>
              <FiFilter style={{ marginRight: '8px' }} />
              {showFilters ? 'HIDE FILTERS' : 'SHOW FILTERS'}
            </HideFiltersButton>
            <SortDropdown value={sortOption} onChange={handleSortChange}>
              <option value="">SORT BY: Bestsellers</option>
              <option value="price-low-high">SORT BY: Price - Lowest to Highest</option>
              <option value="price-high-low">SORT BY: Price - Highest to Lowest</option>
              <option value="name">SORT BY: Name</option>
            </SortDropdown>
        </SortContainer>
      </MainSortContainer>

      <ProductsContainer role="region" aria-label="Product list with available filters">
        {/* Filtros */}
        {showFilters && (
        <FiltersContainer role="complementary" aria-label="Filter options">
          {availableFilters.includes('lighting') && (
            <FilterSection>
              <FilterTitle>
                Lighting
                <button onClick={() => toggleCategoryVisibility('lighting')}>
                  {visibility.lighting ? <FaMinus /> : <FaPlus />}
                </button>
              </FilterTitle>
              {visibility.lighting && (
              <FilterOptions isOpen={visibility.lighting}>
              {(availableFeatureValues.lighting || ['LIGHTSYNC RGB', 'Backlighting', 'Key lighting']).map((value) => (
                <CheckboxLabel key={value}>
                  <CheckboxInput
                    type="checkbox"
                    value={value}
                    onChange={(e) => handleFilterChange('lighting', e.target.value)}
                    aria-label={`Filter by ${value}`}
                  />
                  {value}
                </CheckboxLabel>
              ))}
              </FilterOptions>
              )}
            </FilterSection>
          )}
          {availableFilters.includes('connectivity') && (
            <FilterSection>
              <FilterTitle>
                Connectivity
                <button onClick={() => toggleCategoryVisibility('connectivity')}>
                  {visibility.connectivity ? <FaMinus /> : <FaPlus />}
                </button>
              </FilterTitle>
              {visibility.connectivity && (
              <FilterOptions isOpen={visibility.connectivity}>
              {(availableFeatureValues.connectivity || ['Bluetooth', 'LIGHTSPEED', 'With cable']).map((value) => (
                <CheckboxLabel key={value}>
                  <CheckboxInput
                    type="checkbox"
                    value={value}
                    onChange={(e) => handleFilterChange('connectivity', e.target.value)}
                    aria-label={`Filter by ${value}`}
                  />
                  {value}
                </CheckboxLabel>
              ))}
              </FilterOptions>
              )}
            </FilterSection>
          )}
          {availableFilters.includes('series') && (
            <FilterSection>
              <FilterTitle>
                Series
                <button onClick={() => toggleCategoryVisibility('series')}>
                  {visibility.series ? <FaMinus /> : <FaPlus />}
                </button>
              </FilterTitle>
              {visibility.series && (
              <FilterOptions isOpen={visibility.series}>
              {(availableFeatureValues.series || ['Pro', 'G', 'Astro', 'Aurora']).map((value) => (
                <CheckboxLabel key={value}>
                  <CheckboxInput
                    type="checkbox"
                    value={value}
                    onChange={(e) => handleFilterChange('series', e.target.value)}
                    aria-label={`Filter by ${value}`}
                  />
                  {value}
                </CheckboxLabel>
              ))}
              </FilterOptions>
              )}
            </FilterSection>
          )}
          {availableFilters.includes('feeding') && (
            <FilterSection>
              <FilterTitle>
                Feeding
                <button onClick={() => toggleCategoryVisibility('feeding')}>
                  {visibility.feeding ? <FaMinus /> : <FaPlus />}
                </button>
              </FilterTitle>
              {visibility.feeding && (
              <FilterOptions isOpen={visibility.feeding}>
              {(availableFeatureValues.feeding || ['Alkaline battery', 'Rechargeable', 'Powerplay', 'With cable']).map((value) => (
                <CheckboxLabel key={value}>
                  <CheckboxInput
                    type="checkbox"
                    value={value}
                    onChange={(e) => handleFilterChange('feeding', e.target.value)}
                    aria-label={`Filter by ${value}`}
                  />
                  {value}
                </CheckboxLabel>
              ))}
              </FilterOptions>
              )}
            </FilterSection>
          )}
          {availableFilters.includes('sensorType') && (
            <FilterSection>
              <FilterTitle>
                Sensor Type
                <button onClick={() => toggleCategoryVisibility('sensorType')}>
                  {visibility.sensorType ? <FaMinus /> : <FaPlus />}
                </button>
              </FilterTitle>
              {visibility.sensorType && (
              <FilterOptions isOpen={visibility.sensorType}>
              {(availableFeatureValues.sensorType || ['Sensor HERO', 'Optical sensor', 'Laser sensor']).map((value) => (
                <CheckboxLabel key={value}>
                  <CheckboxInput
                    type="checkbox"
                    value={value}
                    onChange={(e) => handleFilterChange('sensorType', e.target.value)}
                    aria-label={`Filter by ${value}`}
                  />
                  {value}
                </CheckboxLabel>
              ))}
              </FilterOptions>
              )}
            </FilterSection>
          )}
          {availableFilters.includes('platform') && (
            <FilterSection>
              <FilterTitle>
                Platform
                <button onClick={() => toggleCategoryVisibility('platform')}>
                  {visibility.platform ? <FaMinus /> : <FaPlus />}
                </button>
              </FilterTitle>
              {visibility.platform && (
              <FilterOptions isOpen={visibility.platform}>
              {(availableFeatureValues.platform || ['PC', 'Xbox', 'PlayStation', 'Nintendo']).map((value) => (
                <CheckboxLabel key={value}>
                  <CheckboxInput
                    type="checkbox"
                    value={value}
                    onChange={(e) => handleFilterChange('platform', e.target.value)}
                    aria-label={`Filter by ${value}`}
                  />
                  {value}
                </CheckboxLabel>
              ))}
              </FilterOptions>
              )}
            </FilterSection>
          )}
        </FiltersContainer>
        )} 

        {/* Lista de productos */}
        <ProductsGrid role="list" aria-label="Filtered product list">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} role="listitem" aria-label={`Product: ${product.name}`}>
            {/* Wrapper around the image and icons */}
            <ProductImageWrapper>
              <Link to={`/products/${product.id}`}>
                <ProductImage src={`${process.env.PUBLIC_URL}${product.image}`} alt={product.name} />
              </Link>
              {/* Wrapper for both icons */}
              <IconsWrapper>
                {/* Heart icon */}
                <HeartIconToggle product={product} /> 
              </IconsWrapper>
            </ProductImageWrapper>
          
            <ProductInfo>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <ProductPrice>{formatPrice(product.price)}</ProductPrice>
              <AddToCartButton onClick={() => handleAddToCart(product)} aria-label={`Add ${product.name} to cart`}>
                <CartIcon />
                ADD TO CART
              </AddToCartButton>
            </ProductInfo>
          </ProductCard>
          ))}
        </ProductsGrid>
      </ProductsContainer>
    </>
  );
};

const HeartIconToggle = ({ product }) => {
  const dispatch = useDispatch();
  const savedProducts = useSelector((state) => state.products.savedProducts);
  const isLiked = savedProducts.some((savedProduct) => savedProduct.id === product.id);

  const toggleLike = () => {
    if (isLiked) {
      dispatch(removeFromSavedProducts(product.id));
    } else {
      dispatch(addToSavedProducts(product));
    }
  };

  return (
    <div onClick={toggleLike} style={{ cursor: 'pointer' }} aria-label={isLiked ? `Remove ${product.name} from saved` : `Save ${product.name}`}>
      {isLiked ? <FaHeart size={24} color="#009AFC" /> : <FiHeart size={24} color="#009AFC" />}
    </div>
  );
};

export {
  ProductsContainer,
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductPrice,
  AddToCartButton,
  ProductImageWrapper,
  IconsWrapper,
  CartIcon
};

export default ProductsList;