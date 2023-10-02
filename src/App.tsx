import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAlbumsRequest } from "./actions/albumActions";
import Routing from "./routing";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbumsRequest());
  }, [dispatch]);

  return (
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <Routing />
    </div>
  );
};

export default App;
