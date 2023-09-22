import React from 'react';
import Btn from "../components/Btn.jsx";

const Home = () => {
    return (
        <div className="w-full bg-home bg-no-repeat bg-cover bg-center flex ">
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center self-stretch">
                <h1 className="text-white font-extrabold text-[36px] max-w-[500px]">
                    You got the travel plans, we got the travel vans.
                </h1>
                <p className="text-white font-medium text-[16px] max-w-[500px] mt-[22px] pb-[51px]">
                    Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.
                </p>
                <Btn>
                    Find your van
                </Btn>
            </div>
        </div>
    );
};

export default Home;