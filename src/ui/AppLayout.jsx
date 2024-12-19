import { Outlet, useNavigation } from "react-router-dom";

import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import Loader from "./Loader";

/**
 * Parent Route of all other elements
 */
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}

      <Header />
      <main>
        {/* Render nested route elements */}
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
