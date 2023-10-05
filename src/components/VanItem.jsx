import React from 'react';
import {useNavigate} from "react-router-dom";

const VanItem = (props) => {
    const {ImageUrl:imageUrl, Name:name, Price:price, VanType:type} = props.data;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/vans/${props.data.Id}`)
    }
    return (
      <div onClick={handleNavigate} className="flex flex-col max-w-[400px] gap-[15px] cursor-pointer justify-self-center justify-between">
        <img src={imageUrl} alt={`${name}-img`} className="w-full h-auto rounded-[5px]" />
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