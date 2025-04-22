"use client";
import React from "react";
import Slider from "react-slick";

// Define the interface for the review
interface Review {
  name: string;
  position: string;
  feedback: string;
}
const Testimonials: React.FC = () => {
  // Define the reviews array with proper types
  const reviews: Review[] = [
    {
      name: "Mohit Singhal",
      position: "CEO",
      feedback:
        "The technician was very professional and knowledgeable and had my air conditioning system up and running in no time. I was impressed with the prompt service and the fair price I was charged.",
    },
    {
      name: "Rohit Aggarwal",
      position: "CEO",
      feedback:
        "I'm extremely satisfied with their work. Their technician was punctual, courteous, and knowledgeable. He quickly identified the problem and explained the solution to me in simple terms. The repair was completed in a timely manner and my air conditioning system is now running smoothly.",
    },
    {
      name: "Himanshu Singh",
      position: "CEO",
      feedback:
        "Their team of technician was very professional and knowledgeable and had my air conditioning system up and running in no time. I was impressed with the prompt service and the fair price I was charged.",
    },
    {
      name: "Mohit Singhal",
      position: "CEO",
      feedback:
        "The technician was very professional and knowledgeable and had my air conditioning system up and running in no time. I was impressed with the prompt service and the fair price I was charged.",
    },
    {
      name: "Rohit Aggarwal",
      position: "CEO",
      feedback:
        "I'm extremely satisfied with their work. Their technician was punctual, courteous, and knowledgeable. He quickly identified the problem and explained the solution to me in simple terms. The repair was completed in a timely manner and my air conditioning system is now running smoothly.",
    },
  ];

  // Slider settings for autoplay and transitions
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Slide every 3 seconds
    arrows: false, // Remove chevron buttons
  };

  return (
    <div className="mt-20 mb-20  p-10">
      <div className="container mx-auto  text-center">
        <h2 className="text-3xl font-semibold ">What’s Our Customer Saying?</h2>
        <p className="text-lg text-gray-600 ">
          Some Positive Feedback That Encourage Us
        </p>

        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="border-1 border-gray-400 mt-10 p-10">
              <p className="text-md text-gray-600 mb-4">
                <span className="font-bold text-black text-2xl"> &quot;</span>
                {review.feedback}
                <span className="font-bold text-black text-2xl">&quot;</span>
              </p>
              <div className="text-lg font-semibold">{review.name}</div>
              <div className="text-sm text-gray-500">{review.position}</div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
