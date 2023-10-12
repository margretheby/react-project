import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to top when path is changed
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
}

export default ScrollToTop;