import { useState } from "react";
import "./App.css";

function App() {
  const [guests, setGuests] = useState([]);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("ABA");
  const [receipt, setReceipt] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !amount) {
      alert("Please enter your name and gift amount.");
      return;
    }

    if (!receipt) {
      alert("Please upload your payment receipt.");
      return;
    }

    const newGuest = {
      name,
      amount,
      message,
      paymentMethod,
      receipt: receipt.name,
    };

    setGuests([...guests, newGuest]);

    setName("");
    setAmount("");
    setMessage("");
    setReceipt(null);

    alert("Thank you for your wedding gift ❤️");
  };

  const totalAmount = guests.reduce(
    (total, guest) => total + Number(guest.amount),
    0
  );

  return (
    <div className="app">
    {/* =========================
    QUICK NAVIGATION
========================= */}

<div className="quick-nav">

  <a href="#home" title="Home">
    🏠
  </a>

  <a href="#gift" title="Gift">
    💝
  </a>

  <a href="#payment" title="Payment">
    💳
  </a>

  <a href="#event" title="Event">
    📅
  </a>

  <a href="#guests" title="Guests">
    👥
  </a>

</div>

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="logo">P & C</div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#gift">Gift</a>
          <a href="#payment">Payment</a>
          <a href="#event">Event</a>
          <a href="#guests">Guests</a>
        </div>
      </nav>


      {/* ================= HERO ================= */}

      <section className="hero" id="home">

        <p className="small-title">
          OUR WEDDING DAY
        </p>

        <h1>
          Wedding Celebration
        </h1>

        <h2 className="khmer-couple-name">
          ភី <span>♡</span> ចាន់ណា
        </h2>

        <p className="english-name">
          Phi & Channa
        </p>

        <p className="date">
          28 April 2026
        </p>

        <p className="welcome">
          សូមស្វាគមន៍ និងអរគុណចំពោះការចូលរួម
          ក្នុងថ្ងៃដ៏ពិសេសរបស់ពួកយើង ❤️
        </p>

      </section>


      {/* ================= COUPLE ================= */}

      <section className="couple-section">

        <p className="section-small">
          THE HAPPY COUPLE
        </p>

        <h2>
          Two Hearts, One Love
        </h2>

        <div className="couple-photos">

          {/* GROOM */}

          <div className="person-photo">

            <img
              src="/images/groom.jpg"
              alt="Groom"
            />

            <h3>
              Groom
            </h3>

            <p>
              Phi
            </p>

          </div>


          {/* BRIDE */}

          <div className="person-photo">

            <img
              src="/images/bride.jpg"
              alt="Bride"
            />

            <h3>
              Bride
            </h3>

            <p>
              Channa
            </p>

          </div>

        </div>

        <p className="love-text">
          សេចក្តីស្រឡាញ់របស់យើងចាប់ផ្តើមពីថ្ងៃនេះ
          និងនឹងបន្តទៅជារៀងរហូត ❤️
        </p>

      </section>


      {/* ================= EVENT ================= */}

      <section className="event-section" id="event">

        <p className="section-small">
          JOIN US
        </p>

        <h2>
          Wedding Ceremony
        </h2>

        <div className="event-cards">

          <div className="event-card">

            <div className="event-icon">
              📅
            </div>

            <h3>
              Date
            </h3>

            <p>
              28 April 2026
            </p>

          </div>


          <div className="event-card">

            <div className="event-icon">
              ⏰
            </div>

            <h3>
              Time
            </h3>

            <p>
              5:00 PM - 9:00 PM
            </p>

          </div>


          <div className="event-card">

            <div className="event-icon">
              📍
            </div>

            <h3>
              Venue
            </h3>

            <p>
              Siem Reap, AngkorChum, Cambodia
            </p>

          </div>

        </div>

      </section>


      {/* ================= PAYMENT ================= */}

      <section className="payment-section" id="payment">

        <p className="section-small">
          WEDDING GIFT
        </p>

        <h2>
          💝 ផ្ញើចងដៃតាមអនឡាញ
        </h2>

        <p className="payment-description">
          សូមជ្រើសរើសធនាគារ និង Scan QR Code
          ដើម្បីផ្ញើចងដៃជូនពួកយើង ❤️
        </p>


        <div className="payment-container">

          {/* ================= ABA ================= */}

          <div
            className={`payment-card ${
              paymentMethod === "ABA" ? "active" : ""
            }`}
            onClick={() => setPaymentMethod("ABA")}
          >

            <div className="bank-logo">
              ABA
            </div>

            <h3>
              ABA Bank
            </h3>

            <p>
              Account Name: Phi & Channa
            </p>

            <p>
              Account Number: 000 000 000
            </p>

            <div className="qr-placeholder">

              <img
                className="qr-image"
                src="/images/aba-qr.jpg"
                alt="ABA QR Code"
              />

            </div>

            <p className="scan-text">
              Scan to send gift
            </p>

          </div>


          {/* ================= ACLEDA ================= */}

          <div
            className={`payment-card ${
              paymentMethod === "ACLEDA" ? "active" : ""
            }`}
            onClick={() => setPaymentMethod("ACLEDA")}
          >

            <div className="bank-logo">
              ACLEDA
            </div>

            <h3>
              ACLEDA Bank
            </h3>

            <p>
              Account Name: Phi & Channa
            </p>

            <p>
              Account Number: 000 000 000
            </p>

            <div className="qr-placeholder">

              <img
                className="qr-image"
                src="/images/acleda-qr.jpg"
                alt="ACLEDA QR Code"
              />

            </div>

            <p className="scan-text">
              Scan to send gift
            </p>

          </div>

        </div>

      </section>


      {/* ================= GIFT FORM ================= */}

      <section className="gift-section" id="gift">

        <div className="card">

          <h2>
            💕 កត់ត្រាការចងដៃ
          </h2>

          <p className="description">
            បន្ទាប់ពីផ្ញើចងដៃរួច សូមបំពេញព័ត៌មានខាងក្រោម
          </p>


          <form onSubmit={handleSubmit}>

            {/* NAME */}

            <label>
              ឈ្មោះភ្ញៀវ
            </label>

            <input
              type="text"
              placeholder="បញ្ចូលឈ្មោះរបស់អ្នក"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />


            {/* AMOUNT */}

            <label>
              ចំនួនទឹកប្រាក់ ($)
            </label>

            <input
              type="number"
              placeholder="ឧ. 50"
              min="1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />


            {/* PAYMENT METHOD */}

            <label>
              Payment Method
            </label>

            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >

              <option value="ABA">
                ABA Bank
              </option>

              <option value="ACLEDA">
                ACLEDA Bank
              </option>

            </select>


            {/* RECEIPT */}

            <label>
              Upload Payment Receipt
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setReceipt(e.target.files[0])
              }
            />

            {receipt && (
              <p className="file-name">
                📎 {receipt.name}
              </p>
            )}


            {/* MESSAGE */}

            <label>
              សារជូនពរ
            </label>

            <textarea
              placeholder="សរសេរសារជូនពរ..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />


            {/* SUBMIT */}

            <button type="submit">
              💕 Confirm Gift
            </button>

          </form>

        </div>

      </section>


      {/* ================= GUEST LIST ================= */}

      <section className="guest-section" id="guests">

        <h2>
          💐 បញ្ជីភ្ញៀវ
        </h2>


        <div className="summary">

          <div>

            <strong>
              {guests.length}
            </strong>

            <span>
              ភ្ញៀវ
            </span>

          </div>


          <div>

            <strong>
              ${totalAmount}
            </strong>

            <span>
              សរុប
            </span>

          </div>

        </div>


        <div className="guest-list">

          {guests.length === 0 ? (

            <p className="empty">
              មិនទាន់មានការចងដៃនៅឡើយទេ
            </p>

          ) : (

            guests.map((guest, index) => (

              <div
                className="guest-card"
                key={index}
              >

                <h3>
                  👤 {guest.name}
                </h3>

                <p>
                  💰 ចងដៃ: ${guest.amount}
                </p>

                <p>
                  🏦 {guest.paymentMethod}
                </p>

                <p>
                  🧾 Receipt: {guest.receipt}
                </p>

                {guest.message && (
                  <p>
                    💌 {guest.message}
                  </p>
                )}

              </div>

            ))

          )}

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer>

        <p>
          With Love ❤️ Phi & Channa
        </p>

        <p>
          Thank you for celebrating with us.
        </p>

      </footer>

    </div>
  );
}

export default App;