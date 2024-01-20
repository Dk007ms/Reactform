import React, { useState } from "react";
import Textinput from "./Textinput";
import Checkboxinput from "./Checkboxinput";
import Radioinput from "./Radioinput";

export default function Form() {
  const [formdata, setData] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    country: "",
    Street: "",
    City: "",
    State: "",
    PostalCode: "",
    Comments: false,
    Candidates: false,
    Offers: false,
    Notification: false,
  });

  function changehandler(event) {
    const { name, value, checked, type } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handlesubmit(event) {
    event.preventDefault();
    console.log(formdata);
  }

  return (
    <form
      className="flex flex-col  flex-wrap justify-center max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md shadow-slate-950"
      onSubmit={handlesubmit}
    >
      <h2 className="text-2xl font-semibold mb-4">User Information</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="mb-4">
          <Textinput
            heading={"Firstname"}
            type={"text"}
            name={"Firstname"}
            changehandler={changehandler}
            value={formdata.Firstname}
          />
        </div>
        <div className="mb-4">
          <Textinput
            heading={"Lastname"}
            type={"text"}
            name={"Lastname"}
            changehandler={changehandler}
            value={formdata.Lastname}
          />
        </div>
        <div className="mb-4">
          <Textinput
            heading={"Email Address"}
            type={"email"}
            name={"Email"}
            changehandler={changehandler}
            value={formdata.Email}
          />
        </div>
        <div className="mb-4 flex flex-col">
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
            value={formdata.country}
            onChange={changehandler}
          >
            <option value="" disabled hidden>
              Select a Country
            </option>
            <option value={"India"}>India</option>
            <option value={"Paris"}>Paris</option>
            <option value={"Sweden"}>Sweden</option>
          </select>
        </div>
        <div className="mb-4">
          <Textinput
            heading={"Street Address"}
            type={"address"}
            name={"Street"}
            changehandler={changehandler}
            value={formdata.Street}
          />
        </div>
        <div className="mb-4">
          <Textinput
            heading={"City"}
            name={"City"}
            type={"text"}
            changehandler={changehandler}
            value={formdata.City}
          />
        </div>
        <div className="mb-4">
          <Textinput
            heading={"State/Province"}
            type={"text"}
            name={"State"}
            changehandler={changehandler}
            value={formdata.State}
          />
        </div>
        <div className="mb-4">
          <Textinput
            heading={"Zip/Postal Code"}
            type={"text"}
            name={"PostalCode"}
            changehandler={changehandler}
            value={formdata.PostalCode}
          />
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold">By Email</h2>
        <div className="mb-4">
          <Checkboxinput
            heading={"Comments"}
            type={"checkbox"}
            description={
              "Get notified when someone posts a comment on a posting"
            }
            name={"Comments"}
            changehandler={changehandler}
            value={formdata.Comments}
            checked={formdata.Comments}
          />
        </div>
        <div className="mb-4">
          <Checkboxinput
            heading={"Candidates"}
            type={"checkbox"}
            description={"Get notified when a candidate applies for a job"}
            name={"Candidates"}
            changehandler={changehandler}
            value={formdata.Candidates}
            checked={formdata.Candidates}
          />
        </div>
        <div className="mb-4">
          <Checkboxinput
            heading={"Offers"}
            type={"checkbox"}
            description={
              "Get notified when a candidate accepts or rejects an offer"
            }
            name={"Offers"}
            changehandler={changehandler}
            value={formdata.Offers}
            checked={formdata.Offers}
          />
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Push Notifications</h2>
        <p className="text-gray-600 mb-4">
          These are delivered via SMS to your mobile phone
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Radioinput
            heading={"Everything"}
            type={"radio"}
            name={"Notification"}
            changehandler={changehandler}
            value={"Everything"}
          />
          <Radioinput
            heading={"Same as email"}
            type={"radio"}
            name={"Notification"}
            changehandler={changehandler}
            value={"Same as email"}
          />
          <Radioinput
            heading={"No Push notifications"}
            type={"radio"}
            name={"Notification"}
            changehandler={changehandler}
            value={"No Push notifications"}
          />
        </div>
      </div>

      <button
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
        type="submit"
        onSubmit={handlesubmit}
      >
        Save
      </button>
    </form>
  );
}
