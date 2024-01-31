import { loadChargebee } from "chargebee-js";
import "./App.css";
const chargebeePromise = loadChargebee({
  site: "hf-demo-test",
  isItemsModel: true,
});
function App() {
  const handleCheckout = async () => {
    // Its to ensure that function is called only after CB is initiated.
    const cbInstance = await chargebeePromise;
    const cart = cbInstance.getCart();
    const product = cbInstance.initializeProduct(
      "cbdemo_sample_plan-inr-monthly",
      1
    );
    cart.replaceProduct(product);
    cart.proceedToCheckout();
  };
  return (
    <div className="card">
      <h2>
        <span className="text-muted">
          Subscribe with a fake card and a fake address, We'll deliver our fake
        </span>
        &nbsp;comics <span className="text-muted">On Time!</span>
      </h2>
      <div className="text-center">
        <img
          src="/comic-book.png"
          alt="comic book"
          className="img-responsive"
        />
        <button
          id="checkout"
          data-cb-item-0="cbdemo_sample_plan-inr-monthly"
          onClick={() => handleCheckout()}
        >
          subscribe
        </button>
      </div>
      <div className="text-center">
        <h1>Only $6/Month</h1>
        <h4 className="text-muted">Free Shipping and No hidden charges</h4>
        <h3>
          <span className="text-muted">
            The comics you love. Unlimited access. One convenient subscription.
          </span>
        </h3>
      </div>
    </div>
  );
}

export default App;
