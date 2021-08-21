import React from "react";
import ReadMore from "./ReadMore";
const TestimonialCard = ({ testimonial }) => {
  return (
    <div>
      <div>
        <div className="p-4 bg-gray-100 border-b-4 border-pink-400">
          <ReadMore excerpt={testimonial.excerpt} full={testimonial} />
        </div>
        <div className="flex items-center bg-gray-200">
          <div className="inline-block mr-4">
            <a href={testimonial.frontmatter.linkedin} target="_blank" rel="noopener noreferrer">
              <img className="w-24 h-24 filter grayscale" src={testimonial.frontmatter.image} alt="" />
            </a>
          </div>
          <div className="inline-block">
            <a href={testimonial.frontmatter.linkedin} target="_blank" rel="noopener noreferrer">
              <p className="font-light text-lg">{testimonial.frontmatter.by}</p>
            </a>
            <p className="text-sm font-bold">{testimonial.frontmatter.position}</p>
            <p className="text-sm font-bold">{testimonial.frontmatter.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
