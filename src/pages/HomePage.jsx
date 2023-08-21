import React from "react";

const HomePage = () => {
  const [itemList, setItemList] = React.useState([]);
  let pageNo = 1;

  React.useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/items?page=${pageNo}`)
      .then((response) => response.json())
      .then((data) => {
        setItemList(data.data);
      });
  }, []);

  return (
    <div className="item-list">
      {itemList.length > 0 &&
        itemList.map((item, key) => <ItemCard key={item.id} {...item} />)}
    </div>
  );
};

const ItemCard = ({
  id,
  title,
  imgList,
  listType,
  location,
  price,
  createdAt,
}) => {
  return (
    <div className="item-card-container">
      <div className="item-card">
        <div className="item-card-imgs">
          {
            // <img src={imgList[0]} alt="" />
            imgList.length > 0 ? (
              imgList.map((img) => <img src={img} />)
            ) : (
              <div>NO Image</div>
            )
          }
        </div>
        <div className="img-card-body">
          <div className="img-card-title">{title}</div>
          <div className="img-card-row-space-between">
            <div className="img-card-location">{location}</div>
            <div className="img-card-price">{price}</div>
          </div>
        </div>
        <div className="img-card-footer">
          <div>{listType}</div>
          <div>{createdAt}</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;