import { APIContext } from "./Context/APIContext";
import { useQuery } from "react-query";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import "@/Server/server";

const Layout = () => {
  const {isLoading, data} = useQuery({
    queryKey: ["storeData"],
    queryFn: async () => {
      const response = await fetch("/storeData");
      return await response.json();
    },
  });

  const fetchedData = {loading: isLoading, storeData: data};

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("/storeData", { method: "GET" });
  //     const responseJSON = await response.json();
  //     // setFetchedData(responseJSON)
  //   }
  //   fetchData();
  // }, []);

  return (
    <>
      <Header />
      <APIContext.Provider value={fetchedData}>
        <Outlet />
      </APIContext.Provider>
      <Footer />
    </>
  );
};

export default Layout;
