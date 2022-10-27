import React from "react";

const FAQ = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="border collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content  peer-checked:text-secondary-content">
          Which online skill is best for future?
        </div>
        <div className="collapse-content border bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            Which online skill is best for future? Listed are some of the most
            in-demand skills that you should learn for the future, in order to
            keep your career secure. Artificial intelligence. ... Coding. ...
            Cloud computing. ... Blockchain. ... UX design. ... Critical
            thinking. ... Emotional intelligence. ... Communication.
          </p>
        </div>
      </div>

      <div className="border collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-contenty text-white  peer-checked:text-secondary-content">
          What Should I Learn? 28 Useful Skills to Learn in 2022
        </div>
        <div className="collapse-content border bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            Digital Literacy. Written Communication. Public Speaking.
            Self-Management. Web Development. How to Make a Website. How to
            Cook. How to Exercise and Be Fit.
          </p>
        </div>
      </div>

      <div className="border collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content  peer-checked:text-secondary-content">
          5 Online learning skills that benefit students beyond graduation
        </div>
        <div className="collapse-content border bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>
            Time management. One of the great things about online learning is
            its flexibility. ... Digital literacy. Being able to intuitively
            navigate digital platforms is no longer an optional skill to have.
            ... Work-life balance. ... Online communication. ... Commitment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
