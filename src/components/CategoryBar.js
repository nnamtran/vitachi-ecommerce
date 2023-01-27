

const CategoryBar = () => {
    
    return (
        <div className="category-container">
            <div className="all-categories">
                OUR CATEGORIES:
            </div>
            <div className="baby-care">
                <a href="/baby-care">BABY CARE</a>
            </div>
            <div className="pregnancy">
                <a href="/pregnancy-care">PREGNANCY CARE</a>
            </div>
            <div className="vitamin">
                <a href="/family-care">VITAMINS</a>
            </div>
            <div className="womens-health">
                <a href="/women-care">WOMEN'S HEALTH & BEAUTY</a>
            </div>
            <div className="elder-health">
                <a href="/elder-care">ELDERLY</a>
            </div>
            <div className="mens-health">
                <a href="/men-care">MEN'S HEALTH</a>
            </div>
            <div className="dental-care">
                <a href="www.google.com">DENTAL CARE</a>
            </div>
        </div>
    )
}

export default CategoryBar;