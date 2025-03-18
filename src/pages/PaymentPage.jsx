import { useState } from "react";

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [paymentMade, setPaymentMade] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      if (!/^[0-9 ]*$/.test(value)) return;
      const formattedValue = value
        .replace(/\D/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
      setFormData({ ...formData, [name]: formattedValue });
    } else if (name === "cvv") {
      if (!/^\d{0,3}$/.test(value)) return;
      setFormData({ ...formData, [name]: value });
    } else if (name === "expiryDate") {
      let cleanedValue = value.replace(/\D/g, "");

      if (cleanedValue.length > 4) return;

      if (cleanedValue.length >= 2) {
        cleanedValue = `${cleanedValue.slice(0, 2)}/${cleanedValue.slice(2)}`;
      }

      setFormData({ ...formData, [name]: cleanedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.cardNumber.replace(/\s/g, "").length !== 16) {
      alert("Card number must be 16 digits.");
      return;
    }
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
      alert("Expiry date must be in MM/YY format with a valid month (01-12).");
      return;
    }
    if (formData.cvv.length !== 3) {
      alert("CVV must be 3 digits.");
      return;
    }

    setPaymentMade(true);
  };

  if (paymentMade) {
    return <h2>Payment Made</h2>;
  }

  return (
    <div className="payment-page">
      <form onSubmit={handleSubmit} className="payment-form">
        <label>
          Name on Card:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="payment-input"
            required
          />
        </label>
        <label>
          Card Number:
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            maxLength="19"
            className="payment-input"
            required
          />
        </label>
        <label>
          Expiry Date (MM/YY):
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            placeholder="MM/YY"
            maxLength="5"
            className="payment-input"
            required
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            maxLength="3"
            className="payment-input"
            required
          />
        </label>
        <button type="submit" className="pay-now-button">
          {" "}
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
