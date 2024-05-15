import { useState } from "react";
import Countdown from "react-countdown";
import CurrencyInput from "react-currency-input-field";
import { Helmet } from "react-helmet";

export default function CountdownFn() {
  const [amount, setAmout] = useState(2000);
  console.log(amount, "am");
  return (
    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <h1>hello this is heading</h1>
      </div>
      <Countdown
        date={Date.now() + 10000}
        intervalDelay={0}
        precision={3}
        renderer={(props) => <div>{props.total}</div>}
      />
      <CurrencyInput
        id="input-example"
        name="input-name"
        placeholder="Please enter a number"
        value={amount}
        decimalsLimit={2}
        onValueChange={(value) => {
          setAmout(value);
        }}
      />
    </>
  );
}
