import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer items-baseline p-10 bg-gray-200 text-black">
        <div>
          <span className="footer-title">
            <img
              width={75}
              src="https://s3-alpha-sig.figma.com/img/1bc1/3af4/6343a7d3b13d0650a7dd7c438355ef79?Expires=1693785600&Signature=lBxfg2wqu-irlWN5Zx0Ek40ksAehgSIIhJtK58I-arnfVdcsY5cOY6cdJP7ggq-jgE1K-V0sxMHVQvgiQIxnZj1M3mn0AZyGXa6hSKlB2N0GVC1ybbY69RI-c37I~wKbZLzrnzDd0LyvMpCgttJuwHR0jL13QF3XHspCcyn~1PjVJA2rZHJfMf6XhkvpUHAzODJu0OYzGQeLYQicRz7mJjMWgom-MgQuanxkQUHakhP~3adX5ET6UHUCY314wjJDwcpEuVV7K3iLJF9mLzHKWO3aBA9jpfxYQTID0GkFPGSrXP2kDS7ew43ogFud5GDKZ8Cf6lCzdYr7LZYv5J5-rQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            />
          </span>
          <a className="link link-hover">Bekasi, Indonesia</a>
          <a className="link link-hover">Your satisfaction is our Priority</a>
        </div>
        <div>
          <span className="footer-title"></span>
          <ul className="flex flex-col gap-y-3">
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
        <div>
          <span className="footer-title"></span>
          <a target="__blank" href="https://goo.gl/maps/s6tP2jUeG3X5Ro7w7" className="link link-hover">
            <svg className="inline fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
              <path d="M11 17.9381C7.05369 17.446 4 14.0796 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 14.0796 16.9463 17.446 13 17.9381V20.0116C16.9463 20.1039 20 20.7351 20 21.5C20 22.3284 16.4183 23 12 23C7.58172 23 4 22.3284 4 21.5C4 20.7351 7.05369 20.1039 11 20.0116V17.9381ZM12 16C15.3137 16 18 13.3137 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 13.3137 8.68629 16 12 16ZM12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12Z"></path>
            </svg>{" "}
            Griya Bintara Indah Blok HH1 No.14, Bintara Bekasi Barat 17134
          </a>
          <a href="mailto:GCAsupplies@yahoo.com" className="link link-hover">
            <svg className="inline fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
              <path d="M21 3C21.5523 3 22 3.44772 22 4V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5V4C2 3.44772 2.44772 3 3 3H21ZM8 15V17H0V15H8ZM5 10V12H0V10H5ZM19.5659 5H4.43414L12 11.8093L19.5659 5Z"></path>
            </svg>{" "}
            GCAsupplies@yahoo.com
          </a>
          <a className="link link-hover">
            <svg className="inline fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
              <path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
            </svg>{" "}
            08111927302; 081519098202
          </a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
