import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import TestimonialCard from "./TestimonialCard";
export const PastClients = () => {
  const testimonialData = useStaticQuery(graphql`
    query TestimonialsQuery {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "Testimonials" } } }) {
        nodes {
          frontmatter {
            description
            by
            linkedin
            position
            company
            image
          }
          html
          excerpt
        }
      }
    }
  `);
  console.log(testimonialData.allMarkdownRemark.nodes);
  // const pastClientData = useStaticQuery(graphql`
  //   query PastClientsQuery {
  //     allMarkdownRemark(filter: { frontmatter: { type: { eq: "Testimonials" } } }) {
  //       nodes {
  //         frontmatter {
  //           description
  //           by
  //           linkedin
  //           position
  //           company
  //           image
  //         }
  //         html
  //       }
  //     }
  //   }
  // `);

  return (
    <div className=" mb-10 2xl:w-3/12 xl:w-4/12 lg:w-5/12 md:w-6/12 sm:w-7/12">
      <h2 className="h2 mb-5">Past Clients</h2>

      <h2 className="h2 mb-5">Witnessed me</h2>
      {testimonialData.allMarkdownRemark.nodes.map((testimonial) => (
        <TestimonialCard testimonial={testimonial} />
      ))}
    </div>
  );
};
