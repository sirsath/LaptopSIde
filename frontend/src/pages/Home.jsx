import { React, lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
// import { BestSellerGrid, Carousel_mui } from '../components'
const Carousel_mui = lazy(() => import("./../components/Carousel_mui"));
const BestSellerGrid = lazy(() => import("./../components/BestSellerGrid"));
const Home = () => {
  const fallBack = ({ error }) => {
    console.log(error)
    return <h1>{error.message}</h1>;
  };
  return (
    <>
      <Suspense fallback={<h1>Carousel Loading</h1>}>
        <Carousel_mui />
      </Suspense>
      {/* <Suspense fallback={<h1>Carousel Loading</h1>}> */}
      <ErrorBoundary fallbackRender={fallBack}>
        <BestSellerGrid />
      </ErrorBoundary>
      {/* </Suspense> */}
    </>
  );
};

export default Home;
