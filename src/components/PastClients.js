import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import TestimonialCard from "./TestimonialCard";
import ClientCard from "./ClientCard";

export const PastClients = () => {
  const testimonialData = useStaticQuery(graphql`
    query TestimonialsQuery {
      testimonialInfo: allMarkdownRemark(filter: { frontmatter: { type: { eq: "Testimonials" } } }) {
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
      clientInfo: markdownRemark(frontmatter: { type: { eq: "Past Clients" } }) {
        frontmatter {
          clients {
            duration
            location
            name
            position
            time
            type
            url
            image
          }
        }
      }
    }
  `);
  let finalClients = testimonialData.clientInfo.frontmatter.clients.filter((client) => client.name !== "Citibank");

  return (
    <div className="mb-10">
      <div className="mb-5 max-w-md">
        <h2 className="h2 mb-5">Past Clients</h2>
        <div className="grid grid-cols-3 gap-4">
          {finalClients.map((client) => (
            <ClientCard client={client} />
          ))}
        </div>
      </div>

      <h2 className="h2 mb-5">Testimonials</h2>
      <div className="grid gap-4 grid-cols-1">
        {testimonialData.testimonialInfo.nodes.map((testimonial) => (
          <div className="max-w-md">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
    </div>
  );
};
