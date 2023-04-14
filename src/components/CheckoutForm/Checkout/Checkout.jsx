import React, { useState, useEffect, Suspense, lazy } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
  CssBaseline
} from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import commerce from "../../../lib/commerce";
import useStyles from "./styles";
import Loading from "../../Loading";
const AddressForm = lazy(() => import("../AddressForm"));
const PaymentFrom = lazy(() => import("../PaymentFrom"));

const steps = ["Shipping address", "Payment details"];
const Checkout = ({ handleCaptureCheckout }) => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const navigate = useNavigate();
  const { cartData, isLoading, error, Order } = useSelector(
    (state) => state.MainSlice
  );

  if (isLoading) {
    return <Loading />;
  }
  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cartData.id, {
          type: "cart"
        });
        setCheckoutToken(token);
      } catch (error) {
        console.log(error);
        navigate("/E-Commerce/");
      }
    };
    if (cartData.id && cartData.line_items.length > 0) {
      generateToken();
    }
  }, [cartData]);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };
  const timeout = () => {
    return setTimeout(() => {
      setIsFinished(true);
    }, 10000);
  };
  const Form = () =>
    activeStep == 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentFrom
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        nextStep={nextStep}
        backStep={backStep}
        handleCaptureCheckout={handleCaptureCheckout}
        timeout={timeout}
      />
    );

  let Confirmation = () => {
    if (Order.customer) {
      return (
        <>
          <div style={{ textDecoration: "none" }}>
            <Typography variant="h5">
              Thank you for your purchase, {Order.customer.firstname}{" "}
              {/* space between name*/}
              {Order.customer.lastname}
            </Typography>
            <Typography variant="subtitle2">
              Order ref: {Order.customer_reference}
            </Typography>
          </div>
          <br />
          <Link
            to="/E-Commerce/"
            
            style={{ textDecoration: "none" }}
          >
            <Button variant="outlined" type="button">
              Back to Home
            </Button>
          </Link>
        </>
      );
    } else if (isFinished) {
      return (
        <>
          <div>
            <Typography variant="h5">Thank you for your purchase</Typography>
          </div>
          <br />
          <Link
            to="/E-Commerce/"
            style={{ textDecoration: "none" }}
            
          >
            <Button variant="outlined" type="button">
              Back to Home
            </Button>
          </Link>
        </>
      );
    } else {
      return <Loading />;
    }
  };
  if (error) {
    Confirmation = () => (
      <>
        <Typography variant="h5">Error: {error}</Typography>
        <br />
        <Link to="/E-Commerce/" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            type="button"
            style={{ textDecoration: "none" }}
          >
            Back to home
          </Button>
        </Link>
      </>
    );
  }
  return (
    <>
      <Suspense fallback={<Loading />}>
        <CssBaseline />
        <div className={classes.toolbar} />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="h4" align="center">
              Checkout
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((step) => {
                return (
                  <Step key={step}>
                    <StepLabel>{step}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? (
              <Confirmation />
            ) : checkoutToken ? (
              <Form />
            ) : (
              <Loading />
            )}
          </Paper>
        </main>
      </Suspense>
    </>
  );
};

export default Checkout;
