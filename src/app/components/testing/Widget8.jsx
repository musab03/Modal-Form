"use client";
import React, { useState } from "react";

let prevHeading = "We Bring Companies and Customer together";
let prevPara = "We help your marketing, sales, customer";

const EditPaymentMethod = () => {
  const [fields, setFields] = useState([]);

  const addField = () => {
    const newField = { id: fields.length + 1, value: "" };
    setFields([...fields, newField]);
  };

  const handleFieldChange = (id, event) => {
    const newFields = fields.map((field) => {
      if (field.id === id) {
        return { ...field, value: event.target.value };
      }
      return field;
    });
    setFields(newFields);
  };

  const removeField = (id) => {
    const newFields = fields.filter((field) => field.id !== id);
    for (let i = 0; i < newFields.length; i++) {
        newFields[i].id = i + 1;
      }
    setFields(newFields);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md max-h-full overflow-y-auto text-black">
        <h2 className="text-xl font-semibold mb-4">Edit Content</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="heading"
            >
              Heading
            </label>
            <input
              type="text"
              id="heading"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder={`${prevHeading}`}
            />
          </div>


        

          
          <div>
            {fields.map((field) => (
              <div key={field.id} className="mb-4 bg-gray-300 p-4 rounded-md">
                <label
                  className="flex justify-between text-gray-700 text-lg font-bold mb-2  "
                  htmlFor={`dynamic-field-${field.id}`}
                >
                  Additional Card {field.id} 

                  <button
                  type="button"
                  onClick={() => removeField(field.id)}
                  className="ml-2 text-red-700 text-sm"
                >
                  Remove
                </button>
                </label>


                <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="button1-url"
              >
                Title
              </label>
              <input
                type="text"
                id="button1-url"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Small Buisness"
              />
            </div>


            <div className="mb-4 w-full ">
              <select
                htmlFor="hs-color-input"
                className="p-1 h-8 w-full block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                title="Choose your color"
              >
                <option value="#900C3F" selected>
                  Select Title Font Color
                </option>
                <option value="#FF5733">Orange</option>
                <option value="#DAF7A6">Light Green</option>
                <option value="#FFC300">Yellow</option>
                <option value="#C70039">Red</option>
                <option value="#581845">Purple</option>
              </select>
            </div>

                



       
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="button2-url"
              >
                Title Description
              </label>
              <input
                type="text"
                id="button2-url"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter URL"
              />
            </div>
      

            


               
              </div>
            ))}
          </div>

          <div className="mb-4 flex justify-center">
            <button
              type="button"
              onClick={addField}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              + Add Cards
            </button>
          </div>

          <div className="mt-8 flex items-center justify-end">
            <button
              type="button"
              className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPaymentMethod;
