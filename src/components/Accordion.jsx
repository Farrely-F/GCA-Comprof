import React, { useState } from "react";

function Accordion() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  return (
    <div className="min-h-[600px] px-5 lg:px-16">
      <h2 className="text-center text-3xl font-bold mb-5">FAQ</h2>
      <div className="flex flex-col gap-y-5 transition-all">
        <div className="collapse collapse-arrow outline outline-1 outline-slate-400/40">
          <input type="radio" name="my-accordion-2" checked={activeAccordion === 0} onChange={() => handleAccordionClick(0)} />
          <div className="collapse-title text-xl font-medium" onClick={() => handleAccordionClick(0)}>
            Question 1
          </div>
          {activeAccordion === 0 && (
            <div className="collapse-content transition-all">
              <p>hello</p>
            </div>
          )}
        </div>
        <div className="collapse collapse-arrow outline outline-1 outline-slate-400/40">
          <input type="radio" name="my-accordion-2" checked={activeAccordion === 1} onChange={() => handleAccordionClick(1)} />
          <div className="collapse-title text-xl font-medium" onClick={() => handleAccordionClick(1)}>
            Question 2
          </div>
          {activeAccordion === 1 && (
            <div className="collapse-content">
              <p>hello</p>
            </div>
          )}
        </div>
        <div className="collapse collapse-arrow outline outline-1 outline-slate-400/40">
          <input type="radio" name="my-accordion-2" checked={activeAccordion === 2} onChange={() => handleAccordionClick(2)} />
          <div className="collapse-title text-xl font-medium" onClick={() => handleAccordionClick(2)}>
            Question 3
          </div>
          {activeAccordion === 2 && (
            <div className="collapse-content">
              <p>hello</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
