import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import Charts from "components/Charts/Charts";
import Expenses from "components/Expenses/Expenses";
import Header from "components/Header/Header";
import { Context } from "provider/Provider";
import IncomeStatement from "pages/income-statement/IncomeStatement";
import EmiCalculator from "pages/EmiCalculator";
import SupportPopUp from "components/Support/PopUp/PopUp";
import Footer from "components/Footer/Footer";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import PersistLogin from "components/PersistLogin/PersistLogin";
import ErrorPage from "components/ErrorPage/ErrorPage";
import SIPCalculator from "pages/SIPCalculator/SIPCalculator";
import CAGRCalculator from "pages/CAGRCalculator/CAGRCalculator";
import BalanceSheet from 'pages/BalanceSheet/BalanceSheet';
import Hero from "pages/Hero/Hero";

const RouterComponent = () => {
  const { authToken } = useContext(Context);

  return (
    <Router>
      <Routes>
        <Route
          path="/signin"
          element={
            <>
              <Signin Context={Context} />
              <SupportPopUp Context={Context} />
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Signup Context={Context} />
              <SupportPopUp Context={Context} />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              {authToken ? (
                <Navigate to="/home" />
              ) : (
                <Hero />
              )}
            </>
          }
        />

        <Route element={<PersistLogin />}>
          <Route
            path="/home"
            element={
              <ProtectedRoutes authToken={authToken}>
                <>
                  <Header />
                  <Charts />
                  <Footer />
                  <SupportPopUp Context={Context} />
                </>
              </ProtectedRoutes>
            }
          />
          <Route
            path="/loan_emi_calculator"
            element={
              <ProtectedRoutes authToken={authToken}>
                <>
                  <Header />
                  <EmiCalculator />
                  <Footer />
                  <SupportPopUp Context={Context} />
                </>
              </ProtectedRoutes>
            }
          />
          <Route
            path="/income-statement"
            element={
              <ProtectedRoutes authToken={authToken}>
                <>
                  <Header />
                  <IncomeStatement Context={Context} />
                  <Footer />
                  <SupportPopUp Context={Context} />
                </>
              </ProtectedRoutes>
            }
          />
          <Route
            path="/expenses"
            element={
              <ProtectedRoutes authToken={authToken}>
                <>
                  <Header />
                  <Expenses Context={Context} />
                  <Footer />
                  <SupportPopUp Context={Context} />
                </>
              </ProtectedRoutes>
            }
          />
          <Route
            path="/SIPCalculator"
            element={
              <ProtectedRoutes authToken={authToken}>
                <>
                  <Header />
                  <SIPCalculator />
                  <Footer />
                  <SupportPopUp Context={Context} />
                </>
              </ProtectedRoutes>
            }
          />
           <Route
            path="/CAGRCalculator"
            element={
              <ProtectedRoutes authToken={authToken}>
                <>
                  <Header />
                  <CAGRCalculator />
                  <Footer />
                  <SupportPopUp Context={Context} />
                </>
              </ProtectedRoutes>
            }
          />

          <Route
            path="/balance"
            element={
              <ProtectedRoutes authToken={authToken}>
                <>
                  <Header />
                  <BalanceSheet />
                  <Footer />
                  <SupportPopUp Context={Context} />
                </>
              </ProtectedRoutes>
            }
          />
          <Route
            path="*"
            element={<ErrorPage />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterComponent;