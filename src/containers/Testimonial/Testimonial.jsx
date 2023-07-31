import React from "react";

//icons
import { ImStarFull } from "react-icons/im";
import { ImStarEmpty } from "react-icons/im";
import { BsQuote } from "react-icons/bs";

//style
import "./Testimonial.css";

//components
import Comments from "../../components/Comments/Comments";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="small-container">
        <div className="testimonial__row">
          <Comments
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
              odio consequuntur nostrum doloribus deserunt nobis ut numquam
              doloremque perferendis commodi omnis facilis, sit similique! Nobis
              quas eaque omnis optio in."
            i1={<ImStarFull />}
            i2={<ImStarFull />}
            i3={<ImStarFull />}
            i4={<ImStarFull />}
            i5={<ImStarEmpty />}
            src="./images/user-1.png"
            name="Sean Parker"
          />

          <Comments
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
              odio consequuntur nostrum doloribus deserunt nobis ut numquam
              doloremque perferendis commodi omnis facilis, sit similique! Nobis
              quas eaque omnis optio in."
            i1={<ImStarFull />}
            i2={<ImStarFull />}
            i3={<ImStarFull />}
            i4={<ImStarFull />}
            i5={<ImStarEmpty />}
            src="./images/user-2.png"
            name="Mike Smith"
          />
          <Comments
            text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo,
              odio consequuntur nostrum doloribus deserunt nobis ut numquam
              doloremque perferendis commodi omnis facilis, sit similique! Nobis
              quas eaque omnis optio in."
            i1={<ImStarFull />}
            i2={<ImStarFull />}
            i3={<ImStarFull />}
            i4={<ImStarFull />}
            i5={<ImStarEmpty />}
            src="./images/user-3.png"
            name="Mabel Joe"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
