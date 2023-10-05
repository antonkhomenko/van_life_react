import React from 'react';

const VanItem = (props) => {
    const {ImageUrl:imageUrl, Name:name, Price:price, VanType:type} = props.data;

    return (
      <div className="flex flex-col max-w-[400px] gap-[15px] cursor-pointer justify-self-center justify-between">
        <img src={imageUrl} alt={`${name}-img`} className="w-full h-auto" />
        <div className="flex justify-between">
          <p className="font-semibold text-[#161616] text-2xl">{name}</p>
          <span className="font-semibold text-[#161616] text-2xl price">
            ${price}
          </span>
        </div>
        <span className={`${type}-btn`}>{type}</span>
      </div>
    );
};

export default VanItem;