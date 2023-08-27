import React from "react";

function NotFound() {
  return (
    <div className="flex flex-col items-center px-5 md:px-16 py-20 min-h-screen">
      <h2 className="text-3xl font-bold">Error! Page Not Found</h2>
      <p className="mb-10 text-gray-400">sorry the page you're looking for is unavailable</p>
      <img
        className="max-w-lg"
        src="https://s3-alpha-sig.figma.com/img/2151/1d75/7c81f7ce1952337c33de2a93b8ef6827?Expires=1693785600&Signature=fWxugLuiDHqlwqn90qVCnci~RYOXLBXlPucz4Hcqd5fIqJ4pRFsvsQWp3BuSuxxzrxpQ4tLDBRNqY0lJ0xuf0vVTBmswdOxmjYMFrTuCBxinPeYlSPri7NR9XPQzJmlMPVww9heqWjz8O5aj2Wca7gYKlhi6Is7jTzuGST3ujVIT5x~Rxxf2e8rWlxrd6JO6uaZQc0zvkMeKjhdprIQ0teFc2S0nPNDFPeY~~VVMMMJVPcYNQn12J-vi-1sD9Td21tmBLSMU3Kk2DUdg~wnMay0Ed~A395h9G4FpeDKqn1y4WIn5CvY827uTyJC2CXHJa2mb1tGKAr-aK45TuMdCFA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      />
    </div>
  );
}

export default NotFound;
