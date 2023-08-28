import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  // Navbar Changed Style after Scrolled Down

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Adjust this value to your preference
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to autoclose drawer

  const closeDrawer = () => {
    const drawerInput = document.getElementById("my-drawer-3");
    if (drawerInput) {
      drawerInput.checked = false;
    }
  };

  return (
    <div className="drawer sticky top-0 z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <nav className={`w-full navbar justify-between ${scrolled ? "shadow-2xl shadow-blue-500/20 bg-white" : ""} md:px-16`}>
          <div className="">
            <a>
              <img
                width={75}
                src="https://s3-alpha-sig.figma.com/img/1935/cf5e/15f5e9002f153545607db2f281b9a9b1?Expires=1693785600&Signature=axe1SYAXMKznusVeNPAewot4bPFSK0wTbb8XJGXM9orJHtqTbQNgu5YerTcBWFOUg1B6WNLN5IflaYi5wDevRbFFmgHZXSLNap0PTaooo-PcVSV1a7XuGINjrlvJUSRrTtpsC9Y1Qo4ZbyZw8ujqZFXR5Mu947rkoYCQ1CJAkosjW509TNm2Ld2qjVYkPDZjxoreplCVQq3woAeaIRDXmtzogvYG1p5IshLMDkvappzccfemxrKa3LjUUWHQBE3cJzdWlar7cfRJS2nVXGj0B-HprA2yiRmpVRV8NcuMxswBWyUNfNbX2KIu~Kf21-Lwrhah-QdFDFJ-AlG5TBcJuA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              />
            </a>
          </div>
          <div className="lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </label>
          </div>
          <div className="hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
          <a target="__blank" href="https://wa.me/08111927302?text=I'm%20interested%20with%20your%20products!" className="hidden lg:inline-flex bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-2xl">
            Contact Us
          </a>
        </nav>
        {/* Page content here */}
      </div>
      <div className="drawer-side z-10">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <Link to="/" onClick={closeDrawer}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={closeDrawer}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeDrawer}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
