import RestaurantCard from "./RestaurantCard";
import resDataList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search Bar</div>
            <div className="res-container">
                {resDataList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))};
            </div>
        </div>
    )
};

export default Body;