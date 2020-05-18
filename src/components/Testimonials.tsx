import React, { FunctionComponent } from "react";
import { v4 } from "uuid";

interface Testimonial {
  quote?: string;
  author?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

const Testimonials: FunctionComponent<TestimonialsProps> = ({
  testimonials,
}) => (
  <div>
    {testimonials.map((testimonial) => (
      <article key={v4()} className="message">
        <div className="message-body">
          {testimonial.quote}
          <br />
          <cite> – {testimonial.author}</cite>
        </div>
      </article>
    ))}
  </div>
);

export default Testimonials;
