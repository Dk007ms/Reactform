import React from "react";
import Textinput from "./Textinput";
import Checkboxinput from "./Checkboxinput";
import Radioinput from "./Radioinput";

export default function Form() {
  return (
    <div className="flex flex-col items-center justify-center max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">User Information</h2>

      <div className="flex flex-wrap justify-between w-full">
        <div className="w-full sm:w-48 mb-4">
          <Textinput heading={"Firstname"} type={"text"} name={"Firstname"} />
        </div>
        <div className="w-full sm:w-48 mb-4">
          <Textinput heading={"Lastname"} type={"text"} name={"Lastname"} />
        </div>
        <div className="w-full sm:w-48 mb-4">
          <Textinput heading={"Email Address"} type={"email"} name={"Email"} />
        </div>
        <div className="w-full sm:w-48 mb-4">
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700"
          >
            Country
          </label>
          <select
            name="country"
            id="country"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="" disabled hidden>
              Select a Country
            </option>
            <option value={"India"}>India</option>
            <option value={"Paris"}>Paris</option>
            <option value={"Sweden"}>Sweden</option>
          </select>
        </div>
        <div className="w-full sm:w-48 mb-4">
          <Textinput
            heading={"Street Address"}
            type={"address"}
            name={"Street"}
          />
        </div>
        <div className="w-full sm:w-48 mb-4">
          <Textinput heading={"City"} type={"City"} />
        </div>
        <div className="w-full sm:w-48 mb-4">
          <Textinput heading={"State/Province"} type={"text"} name={"State"} />
        </div>
        <div className="w-full sm:w-48 mb-4">
          <Textinput
            heading={"Zip/Postal Code"}
            type={"text"}
            name={"PostalCode"}
          />
        </div>
      </div>

      <h2 className="text-2xl font-semibold mt-6">By Email</h2>

      <div className="flex flex-wrap justify-between w-full">
        <div className="w-full sm:w-48 mb-4">
          <Checkboxinput
            heading={"Comments"}
            type={"checkbox"}
            description={
              "Get notified when someone posts a comment on a posting"
            }
            name={"Comments"}
          />
        </div>
        <div className="w-full sm:w-48 mb-4">
          <Checkboxinput
            heading={"Candidates"}
            type={"checkbox"}
            description={"Get notified when a candidate applies for a job"}
            name={"Candidates"}
          />
        </div>
        <div className="w-full sm:w-48 mb-4">
          <Checkboxinput
            heading={"Offers"}
            type={"checkbox"}
            description={
              "Get notified when a candidate accepts or rejects an offer"
            }
            name={"Offers"}
          />
        </div>
      </div>

      <div className="Notifications mt-6">
        <h2 className="text-2xl font-semibold">Push Notifications</h2>
        <p className="text-gray-600 mb-4">
          These are delivered via SMS to your mobile phone
        </p>

        <div className="flex flex-wrap justify-between w-full">
          <div className="w-full sm:w-48 mb-4">
            <Radioinput
              heading={"Everything"}
              type={"radio"}
              name={"Notification"}
            />
          </div>
          <div className="w-full sm:w-48 mb-4">
            <Radioinput
              heading={"Same as email"}
              type={"radio"}
              name={"Notification"}
            />
          </div>
          <div className="w-full sm:w-48 mb-4">
            <Radioinput
              heading={"No Push notifications"}
              type={"radio"}
              name={"Notification"}
            />
          </div>
        </div>

        <button className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600">
          Save
        </button>
      </div>
    </div>
  );
}
