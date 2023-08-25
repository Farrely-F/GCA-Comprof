import React from "react";
import Navbar from "../components/navbar";
import Banner from "../components/Banner";

function About() {
  return (
    <>
      <div className="flex flex-col items-center px-5 lg:px-16 py-20">
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/1935/cf5e/15f5e9002f153545607db2f281b9a9b1?Expires=1693785600&Signature=axe1SYAXMKznusVeNPAewot4bPFSK0wTbb8XJGXM9orJHtqTbQNgu5YerTcBWFOUg1B6WNLN5IflaYi5wDevRbFFmgHZXSLNap0PTaooo-PcVSV1a7XuGINjrlvJUSRrTtpsC9Y1Qo4ZbyZw8ujqZFXR5Mu947rkoYCQ1CJAkosjW509TNm2Ld2qjVYkPDZjxoreplCVQq3woAeaIRDXmtzogvYG1p5IshLMDkvappzccfemxrKa3LjUUWHQBE3cJzdWlar7cfRJS2nVXGj0B-HprA2yiRmpVRV8NcuMxswBWyUNfNbX2KIu~Kf21-Lwrhah-QdFDFJ-AlG5TBcJuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
            className="w-[381px] mb-20"
          />
        </div>
        <p className="mb-48">
          Griya Cipta Abadi stands as your trusted partner in the realm of cleanliness and hygiene. As a dedicated company, we take pride in being your local go-to source for an extensive range of cleaning solutions and hygiene essentials.
          Our diverse inventory includes a variety of cleaning chemicals tailored to meet your specific needs, as well as an array of complementary tools to support your cleaning endeavors. From sturdy trash bags and convenient shopping
          totes to protective gloves, durable cleaning cloths, efficient mops, reliable aprons, and even window squeegees, we've got you covered. We understand that maintaining a clean and healthy environment is of utmost importance, and
          we're here to provide you with the products that make it easier, more efficient, and ultimately, more enjoyable. Choose Griya Cipta Abadi for your cleanliness needs and experience the difference in quality and service that sets us
          apart.
        </p>
        <div className="mb-48">
          <h2 className="text-8xl font-bold mb-7">Our Vision</h2>
          <p>
            At Griya Cipta Abadi, our vision is to lead the way in promoting a cleaner, safer, and healthier world. We aspire to be the foremost provider of innovative cleaning solutions, setting new standards in cleanliness and hygiene.
            Our commitment is to empower individuals, businesses, and communities to thrive in healthy environments while continually striving for excellence in every aspect of our operations.
          </p>
        </div>
        <div className="mb-48">
          <h2 className="text-8xl font-bold mb-7 text-end">Our Mission</h2>
          <p className="text-end">
            We deliver top-notch cleaning products and hygiene essentials that cater to the diverse needs of our valued customers. We are dedicated to offering a comprehensive range of high-quality, locally sourced products that foster
            cleanliness and convenience. We aim to build lasting relationships with our clients by providing exceptional service, expert guidance, and responsible solutions.
          </p>
        </div>
        <div className="mb-48">
          <h2 className="text-8xl font-bold mb-7">Why Us?</h2>
          <ol>
            <li>
              <strong>1. Wide Product Range:</strong> We offer an extensive selection of cleaning products and hygiene essentials, ensuring that you find everything you need under one roof.
            </li>
            <li>
              <strong>2. Convenience:</strong> We understand the importance of convenience in your cleaning routines. Our products are designed to make your cleaning tasks more efficient and hassle-free.
            </li>
            <li>
              <strong>3. Customer-Centric Approach:</strong> Your satisfaction is our priority. We build lasting relationships with our customers by providing exceptional service and support.
            </li>
          </ol>
        </div>
      </div>
      <Banner />
      <div className="flex flex-col items-center px-5 lg:px-16 py-20">
        <h2 className="text-3xl mb-5">Our Location</h2>
        <div className="mb-20">
          <iframe
            className="rounded-xl lg:w-[1000px]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1983.1607254092926!2d106.9593785!3d-6.2212756!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698c7d6552dacf%3A0x2241bb72454254e4!2sBlok%20HH1%2C%20Jl.%20Bintara%20Niaga%202%20Blok%20II1%20No.16%2C%20RT.011%2FRW.012%2C%20Bintara%2C%20Bekasi%20Barat%2C%20Bekasi%2C%20West%20Java%2017134!5e0!3m2!1sid!2sid!4v1692963539218!5m2!1sid!2sid"
            height="450"
            allowFullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <h2 className="text-3xl mb-12">Contact</h2>
        <div className="grid lg:grid-cols-2 gap-x-5">
          <div className="bg-blue-100/50 p-5 flex flex-col gap-y-5">
            <a target="__blank" href="https://goo.gl/maps/s6tP2jUeG3X5Ro7w7" className="link link-hover block">
              <svg className="inline fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                <path d="M11 17.9381C7.05369 17.446 4 14.0796 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 14.0796 16.9463 17.446 13 17.9381V20.0116C16.9463 20.1039 20 20.7351 20 21.5C20 22.3284 16.4183 23 12 23C7.58172 23 4 22.3284 4 21.5C4 20.7351 7.05369 20.1039 11 20.0116V17.9381ZM12 16C15.3137 16 18 13.3137 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 13.3137 8.68629 16 12 16ZM12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12Z"></path>
              </svg>{" "}
              Griya Bintara Indah Blok HH1 No.14, Bintara Bekasi Barat 17134
            </a>
            <a href="mailto:GCAsupplies@yahoo.com" className="link link-hover block">
              <svg className="inline fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                <path d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"></path>
              </svg>{" "}
              GCAsupplies@yahoo.com
            </a>
            <a className="link link-hover block">
              <svg className="inline fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
                <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
              </svg>{" "}
              08111927302; 081519098202
            </a>
            <img src="https://www.figma.com/file/ppce04CzgVFwGBN5jDfDFL/image/30c198d5d59eca6721e1af408ed86b06bcb6dd24" alt="" />
          </div>
          <form className="p-5">
            <h3 className="text-xl">Get in Touch</h3>
            <p className="mb-2">Feel free to drop us line below</p>
            <label className="block mb-1" htmlFor="name">
              Full Name
            </label>
            <input id="name" type="text" placeholder="John Doe" className="input input-bordered w-full max-w-sm mb-4" />
            <label className="block mb-1" htmlFor="email">
              Email
            </label>
            <input id="email" type="email" placeholder="john@gmail.com" className="input input-bordered w-full max-w-sm mb-4" />
            <label className="block mb-1" htmlFor="telp">
              Phone Number
            </label>
            <input id="telp" type="number" min={0} placeholder="08123456789" className="input input-bordered w-full max-w-sm mb-4" />
            <label className="block mb-1" htmlFor="subject">
              Subject
            </label>
            <input id="subject" type="text" placeholder="Subject" className="input input-bordered w-full max-w-sm mb-4" />
            <label className="block mb-1" htmlFor="message">
              Message
            </label>
            <textarea id="message" className="textarea textarea-bordered w-full max-w-sm mb-4" placeholder="Bio" />
            <button type="submit" className="block px-5 py-2 bg-blue-700 text-white rounded-xl">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default About;
