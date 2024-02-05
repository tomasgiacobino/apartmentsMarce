import React from "react";

const Work = () => {
  const workInfoData = [
    {
      image: "",
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: "",
      title: "Choose How Often",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: "",
      title: "Fast Deliveries",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return <div className="work-section-wrapper">
         <div className="work-section-top">
            <p className="primary-subheading">work</p>
            <h1 className="primary-heading">How It works</h1>
            <p className="primary-text">
            Join us for a celebration of food that goes beyond a meal – it's a true rendezvous for your inner foodie
            </p>
            <div className="work-section-bottom">
                {
                    workInfoData.map((data)=> (
                        <div className="work-section-info">
                            <div className="info-boxes-img-container">
                                <img src = {data.image} alt=""/>
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                        </div>
                    ))
                }
            </div>

         </div>
  </div>;
};

export default Work;
