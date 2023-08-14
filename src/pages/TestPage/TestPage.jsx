import React, { useEffect } from "react";
import { Container, Pagination, TextField, Stack, Link } from "@mui/material";
import { useState } from "react";

//style
import "./TestPage.css";

//containers
import Header from "../../containers/Header/Header";

const TestPage = ({ pageQty, currentPage, setCurrentPage }) => {
  const number = [];
  //   const [pageQty, setPageQty] = useState(10);

  for (let i = 1; i <= pageQty; i++) {
    number.push(i);
  }
  //   const [currentPage, setcurrentPage] = useState(currentPage);

  const [arrOfCurrButton, setArrOfCurrButton] = useState([]);

  useEffect(() => {
    let tempNumberOfPages = [...arrOfCurrButton];
    if (pageQty > 7) {
      let dotsLeft = "... ";
      let dotsRight = " ...";

      //------------------------------------------------------------------
      if (currentPage < 5) {
        // currentPage >= 1 && currentPage <= 4
        const sliced = number.slice(0, 5);
        tempNumberOfPages = [...sliced, dotsRight, number.length];
        //------------------------------------------------------------------
      } else if (currentPage > 3 && currentPage < number.length - 2) {
        // от 5-8
        const sliced1 = number.slice(currentPage - 2, currentPage); // (5-2), 5 -
        const sliced2 = number.slice(currentPage, currentPage + 1);
        tempNumberOfPages = [
          1,
          dotsLeft,
          ...sliced1,
          ...sliced2,
          dotsRight,
          number.length,
        ];
        //------------------------------------------------------------------
      } else if (currentPage > number.length - 3) {
        const sliced = number.slice(number.length - 5);
        tempNumberOfPages = [1, dotsLeft, ...sliced];
        //------------------------------------------------------------------
      } else if (currentPage === dotsRight) {
        setCurrentPage(arrOfCurrButton[3] + 2);
      } else if (currentPage === dotsLeft) {
        setCurrentPage(arrOfCurrButton[3] - 2);
      }

      setArrOfCurrButton(tempNumberOfPages);
    } else {
      setArrOfCurrButton(number);
    }
  }, [currentPage]);

  return (
    <div>
      <Header />
      {/* 
      <div className="pagination-container">
        <span
          className={currentPage === 1 ? "disabled" : ""}
          onClick={() => {
            if (currentPage !== 1) {
              setCurrentPage((item) => item - 1);
            }
          }}
        >
          Prev
        </span>

        {arrOfCurrButton.map((item, index) => {
          return (
            <span
              key={index}
              href="!#"
              className={currentPage === item ? "active" : ""}
              onClick={() => setCurrentPage((page) => (page = item))}
            >
              {item}
            </span>
          );
        })}
        <span
          onClick={() => {
            if (currentPage !== number.length) {
              setCurrentPage((item) => item + 1);
            }
          }}
          className={currentPage === number.length ? "disabled" : ""}
        >
          Next
        </span>
      </div> */}
    </div>
  );
};

export default TestPage;
