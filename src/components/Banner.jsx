import React from "react";
import { Link } from "react-router-dom";

function Banner(props) {
  const { title, description, cta, variant, url, arrow } = props;

  // Check if the target is an external URL
  const isExternal = url.startsWith("http") || url.startsWith("https");

  // Define the Link component or anchor tag accordingly
  const navigationElement = isExternal ? (
    <a href={url} className={`transition-all ease-out ${variant}`} target="_blank" rel="noopener noreferrer">
      {cta}
    </a>
  ) : (
    <Link to={url} className={`transition-all ease-out ${variant}`}>
      {cta}
    </Link>
  );

  return (
    <div className="flex justify-center items-center min-h-[50vh] lg:min-w-full lg:min-h-[312px] bg-[url('https://s3-alpha-sig.figma.com/img/8bfe/bf2d/8a8f9b62e16c1058d76bef411a4ee67f?Expires=1693785600&Signature=fj6OC7efQLW5XXMXTUTwd5cRkrST-F3cFN9-gcQZLKtpBY3y2R6TmqCOPgkZRPlSpE6EzMGXdNDeSetyYJus0M3SLX4VUzr4XzWlPCBhyWFi37V0wTH3lik~xBy4Mbnr5K~1g70UEtte4NzNE2C-1jJ5t4mQzYx2P0DysUnP-KvtZou~ZA~Cimo6n2rsS2UUu0-1UVGeYJITUhLgCVEdIjejVD~17XhtHx-37hc~G71FvgP294-uhn2o3WBlUykRoB0KZgvAinauNxi4cMnYon2KYKE4nuo3WVosYbnWywT~xuUx0hIi-qBibke1x3uu3fxDk0ZdFkzchOZZSzcvbg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')] bg-cover">
      <div className="w-full justify-around flex flex-col lg:flex-row px-5">
        <h2 className="text-3xl text-white max-w-sm mb-5">{title}</h2>
        <div className="text-white max-w-3xl">
          <p className="mb-5 lg:leading-8">{description}</p>
          {navigationElement}
          <svg className={`fill-white inline ml-2 ${arrow}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Banner;
