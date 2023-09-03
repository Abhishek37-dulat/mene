import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getAllPost } from "../../redux/actions/PostAction";

const FAQ = () => {
  const dispatch = useDispatch();
  const { PostData } = useSelector((state) => state.PostReducer);
  const [faqsData, setfaqsData] = useState();
  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  useEffect(() => {
    setfaqsData(
      PostData?.filter(
        (data) => data?.categorie === "FAQs" || data?.categorie === "FAQs Title"
      )
    );
  }, [setfaqsData, PostData]);
  console.log(faqsData);
  return (
    <>
      <div className="container py-4">
        {faqsData?.length > 0 &&
          faqsData?.map((data, index) => {
            if (data?.categorie === "FAQs Title") {
              return (
                <>
                  <div className="py-1">
                    <p>{data?.title}</p>
                  </div>
                </>
              );
            }
          })}
        {faqsData?.length > 0 &&
          faqsData?.map((data, index) => {
            if (data?.categorie === "FAQs") {
              return (
                <>
                  <Accordion key={index} className="py-1">
                    <Accordion.Item
                      eventKey="0"
                      style={{ border: "1px solid #ff6900" }}
                    >
                      <Accordion.Header>{data?.title}</Accordion.Header>
                      <Accordion.Body>{data?.description}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </>
              );
            }
          })}
      </div>
    </>
  );
};

export default FAQ;
