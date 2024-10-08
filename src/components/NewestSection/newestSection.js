import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { SectionContainer, CategoryCard, CategoryImage, CategoryText, SectionTitle, SectionTextContainer, SectionSubtitle, ShopNow } from "./styles";
import MouseCategoryImg from "../../assets/mouse-category-2.jpg";
import KeyboardsCategoryImg from "../../assets/keyboard-category.jpg";
import HeadphonesboardsCategoryImg from "../../assets/headphones-category.jpg";
import ScrollReveal from "scrollreveal";

const NewestSection = () => {

    useEffect(() => {
        const srNewest = ScrollReveal({
            distance: "50px",
            duration: 1500,
            delay: window.innerWidth <= 920 ? 900 : 300, // Cambia el delay según el tamaño de la pantalla
            reset: false,
        });

        // ScrollReveal para la imagen de fondo
        srNewest.reveal(".text-container", { origin: "top", delay: 100, duration: 1900 });
        srNewest.reveal(".newest-sides", { origin: "top", delay: 900, duration: 1900 });
        srNewest.reveal(".newest-center", { origin: "top", delay: window.innerWidth <= 920 ? 900 : 300, duration: 1900 });

    }, []);

    return(
        <SectionContainer aria-labelledby="newest-section-title" role="region">
            <SectionTextContainer>
                <SectionTitle className="text-container" id="newest-section-title">Equipment for advanced play</SectionTitle>
                <SectionSubtitle className="text-container" >Perform at your best in-game with the best gaming gear from Kinova.</SectionSubtitle>
            </SectionTextContainer>
            <CategoryCard className="newest-sides">
                <Link to="/products/mouses" aria-label="Shop for Gaming Mouse">
                    <CategoryImage src={MouseCategoryImg} alt="Gaming Mouse Shop Banner"/>
                    <CategoryText>Gaming Mouse</CategoryText>
                    <ShopNow className="shop-now">Shop Now</ShopNow>
                </Link>
            </CategoryCard>
            <CategoryCard className="newest-center">
                <Link to="/products/keyboards" aria-label="Shop for Gaming Keyboards">
                    <CategoryImage src={KeyboardsCategoryImg} alt="Gaming Keyboards Shop Banner"/>
                    <CategoryText>Gaming Keyboards</CategoryText>
                    <ShopNow className="shop-now">Shop Now</ShopNow>
                </Link>
            </CategoryCard>
            <CategoryCard className="newest-sides">
                <Link to="/products/headphones" aria-label="Shop for Gaming Headset">
                    <CategoryImage src={HeadphonesboardsCategoryImg} alt="Gaming Headset Shop Banner"/>
                    <CategoryText>Gaming Headset</CategoryText>
                    <ShopNow className="shop-now">Shop Now</ShopNow>
                </Link>
            </CategoryCard>
        </SectionContainer>
    );
};

export default NewestSection;