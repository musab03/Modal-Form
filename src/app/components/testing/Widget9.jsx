"use client";
import React from "react";

let prevHeading = "We Bring Companies and Customer together";
let prevPara = "We help your marketing,sales,customer";

const EditPaymentMethod = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-black">
        <h2 className="text-xl font-semibold mb-4">Edit Content</h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="cardNumber"
            >
              Heading
            </label>
            <input
              type="text"
              id="heading"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              placeholder={`${prevHeading}`}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="expiration"
            >
              Paragraph
            </label>
            <input
              type="text"
              id="paragraph"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder={`${prevPara}`}
            />
          </div>

          <div className="flex gap-4">
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="cvc"
              >
                Button Text
              </label>
              <input
                type="text"
                id="button2-text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Free Demo"
              />
            </div>
          </div>

          <div className="flex gap-4 mt-2">
            <div className="mb-4 w-full">
              <select
                htmlFor="hs-color-input"
                className="p-1 h-8 w-full block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                title="Choose your color"
              >
                <option value="#900C3F" selected>
                  Select Button Color
                </option>
                <option value="#FF5733">Orange</option>
                <option value="#DAF7A6">Light Green</option>
                <option value="#FFC300">Yellow</option>
                <option value="#C70039">Red</option>
                <option value="#581845">Purple</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="cvc"
              >
                Button Redirect URL
              </label>
              <input
                type="text"
                id="button1-text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter URL"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="cvc"
              >
                Link Text
              </label>
              <input
                type="text"
                id="button1-text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Pricing"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="cvc"
              >
                Link URL
              </label>
              <input
                type="text"
                id="button2-text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="https://abc/pricing"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="file_input"
            >
              Upload Image
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
            />
          </div>

          <div className="mt-8 flex items-center justify-end">
            <div>
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPaymentMethod;
