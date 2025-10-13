import { Suspense, useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./../component/Navbar";
import Footer from "./../component/Footer";
import Scroll from "../component/Scroll";
const RootLayout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[rgba(233,216,199,255)]">
          <DotLottieReact
            src="https://lottie.host/a0d81097-5879-4c44-abf5-ea1538b8af7e/3uusM0XILc.lottie"
            className="size-[300px]"
            loop
            autoplay
          />
        </div>
      )}
      <Suspense
        fallback={
          <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[rgba(233,216,199,255)]">
            <DotLottieReact
              src="https://lottie.host/a0d81097-5879-4c44-abf5-ea1538b8af7e/3uusM0XILc.lottie"
              className="size-[300px]"
              loop
              autoplay
            />
          </div>
        }
      >
        <Scroll />
        <Navbar />
        {!loading && <Outlet />}
        <Footer />
      </Suspense>
    </>
  );
};

export default RootLayout;
