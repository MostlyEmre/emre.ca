import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="inline-block">
      <div className="inline-block">
        <div className="p-4 bg-gray-100 border-b-2 border-pink-400">
          <p>{testimonial.excerpt}</p>
        </div>
        <div className="flex items-center bg-gray-200 mb-4">
          <div className="inline-block mr-4">
            <a href={testimonial.frontmatter.linkedin} target="_blank" rel="noopener noreferrer">
              <img className="w-20 h-20 filter grayscale" src={testimonial.frontmatter.image} alt="" />
            </a>
          </div>
          <div className="inline-block">
            <a href={testimonial.frontmatter.linkedin} target="_blank" rel="noopener noreferrer">
              <p className="font-light">{testimonial.frontmatter.by}</p>
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
