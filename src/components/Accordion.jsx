import { useState } from "react";

function Accordion() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  return (
    <div className="min-h-[600px] px-5 lg:px-16" data-aos="zoom-in" data-aos-once="true" data-aos-delay="500">
      <h2 className="text-center text-3xl font-bold mb-5">FAQ</h2>
      <div className="flex flex-col gap-y-5 transition-all">
        <div className="collapse collapse-arrow outline outline-1 outline-slate-400/40">
          <input type="radio" name="my-accordion-2" checked={activeAccordion === 0} onChange={() => handleAccordionClick(0)} />
          <div className="collapse-title text-xl font-medium" onClick={() => handleAccordionClick(0)}>
            What does Griya Cipta Abadi specialize in?
          </div>
          {activeAccordion === 0 && (
            <div className="collapse-content transition-all">
              <p className="text-gray-500">
                Griya Cipta Abadi specializes in supplying and distributing cleaning chemicals and hygiene support products, including trash bags, shopping bags, gloves, cleaning cloths, mops, aprons, window squeegees, and more.
              </p>
            </div>
          )}
        </div>
        <div className="collapse collapse-arrow outline outline-1 outline-slate-400/40">
          <input type="radio" name="my-accordion-2" checked={activeAccordion === 1} onChange={() => handleAccordionClick(1)} />
          <div className="collapse-title text-xl font-medium" onClick={() => handleAccordionClick(1)}>
            Can I purchase your products as an individual or are they only for businesses?
          </div>
          {activeAccordion === 1 && (
            <div className="collapse-content">
              <p className="text-gray-500">Our products are available for both businesses and individuals. We cater to a diverse customer base, including households, offices, hotels, restaurants, and more.</p>
            </div>
          )}
        </div>
        <div className="collapse collapse-arrow outline outline-1 outline-slate-400/40">
          <input type="radio" name="my-accordion-2" checked={activeAccordion === 2} onChange={() => handleAccordionClick(2)} />
          <div className="collapse-title text-xl font-medium" onClick={() => handleAccordionClick(2)}>
            How can I place an order for your products?
          </div>
          {activeAccordion === 2 && (
            <div className="collapse-content">
              <p className="text-gray-500">You can place an order by contacting our phone number, email, or directly come to our place</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
