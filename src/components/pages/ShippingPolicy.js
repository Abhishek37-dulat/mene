import React from "react";

const ShippingPolicy = () => {
  return (
    <>
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12  d-flex align-items-center justify-content-center">
            <h2
              style={{ fontWeight: "600", fontSize: "44px", marginTop: "40px" }}
            >
              Shipping Policy
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <p className="py-2">Hi Everyone,</p>
            <p className="py-2">
              We are here to deliver you your chosen products, with love and
              care. Please read below our delivery and shipping policy, before
              placing your order, so that you are clear of the process and have
              no confusion what-so-ever!
            </p>
            <p className="py-2">
              Things to know about our delivery and shipping:
            </p>
            <ol type="1">
              <li className="py-2">
                We use Blue Dart Express for our deliveries across India and DHL
                and FedEx for international shipments.
              </li>
              <li className="py-2">
                We offer free-of-cost delivery within India.
              </li>
              <li className="py-2">
                Products by Arata and Threads by Dinckle (Except the tricolor
                scrunchie which is Maneolgy) are delivered to you directly by
                the vendor, which may take up to 8-10 days.
              </li>
            </ol>
            <p className="py-2">When will you receive the order?</p>
            <p className="py-2">For Domestic Orders (within India):</p>
            <p className="py-2">
              We take 1 business day to process and dispatch your order. And it
              takes 5-7 business days for the order to be delivered across
              India.
            </p>
            <p className="py-2">
              However, if the address/pin code/phone no. is incorrect, the pin
              code is unserviceable, or if the color match is taking time, then
              it could take some extra days to dispatch your order based on the
              time taken to communicate and match the product to your hair.
            </p>
            <p className="py-2">
              Please note: During festivals, adverse weather conditions, natural
              calamities or political crises and curfews, your shipment may get
              further delayed. We assure you that we will try our best to
              deliver your product as quickly as possible and truly appreciate
              your patience during these times.
            </p>
            <p className="py-2">For International Orders (outside India):</p>
            <p className="py-2">
              Our delivery partner for international orders is DHL and FedEx. It
              takes upto 7-10 business days from our end to deliver regular
              orders, but for custom orders it may take an additional 2 days to
              clear the custom payment and KYC which has to be done by you, the
              customer.
            </p>
            <p className="py-2">
              Please note: The shipping charge for international orders varies,
              depending on your country. And custom duty has to be paid by the
              customer separately as per the respective country standards.
            </p>
            <p className="py-2">
              Hope this helps you! If you have any questions please reach out to
              us on customersupport@maneology.com{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingPolicy;
