import React from "react";
import Button from "./Button";
import img from "../assets/featureImg.svg";
import icon1 from "../assets/consultationIcon1.svg";
import icon2 from "../assets/consultationIcon2.svg";
import icon3 from "../assets/consultationIcon3.svg";

const Features = () => {
  return (
    <div className="flex flex-col flex-wrap md:px-32 py-20 gap-16">
        <div className="flex flex-row max-md:flex-wrap gap-12">
        <div className="max-sm:px-4">
          <img src={img} alt="" />
        </div>
        <div className="p-7 flex flex-col gap-10">
          <div className="max-md:px-10">
            <h1 className="text-2xl font-semibold "> Build your needs with Archmove</h1>
          </div>
          <div className="flex flex-col gap-10 ">
            <div className="flex gap-5">
              <div className="flex justify-center">
                <img src={icon1} alt="" />
              </div>
              <div>
                <h3 className="text-xl"> 100% guaranteed project completion</h3>
                <p>
                  Build safe, comfortable and transparent with a project
                  management application with a joint account.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <img src={icon2} alt="" />
              <div>
                <h3 className="text-xl">No additional fees</h3>
                <p>
                  There are no hidden costs. The value of the offer you get is
                  the value you paid.
                </p>
              </div>
            </div>
            <div className="flex gap-4 ">
                <img src={icon3} alt="" />
                <div>
                    <h3 className="text-xl">Get escort from the Team</h3>
                    <p> Monitor reports from the Arsitag team who check directly in the
                field.</p>
                </div>
            </div>
          </div>
        </div>
        </div>
      <div className="flex align-center justify-center">
        <Button title="Free Consultation" />
      </div>
    </div>
  );
};

export default Features;
