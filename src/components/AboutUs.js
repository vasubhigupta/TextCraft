import React, {useState} from 'react'
import './AboutUs.css'; 


export default function AboutUs() {

  return (
    <div className="container">
      <h1>About Us</h1>
      <div className="accordion " id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header ">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyze Your Text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextCraft is a web application built with React that provides
              tools for manipulating text easily and efficiently. Whether you
              need to convert text to uppercase or lowercase, calculate word
              count, determine reading time, or perform other text operations,
              TextCraft is your go-to tool.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How it Works
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
                TextCraft is user-friendly and straightforward to use. Simply
                enter or paste your text into the input field, and choose from
                the available tools to transform or analyze your text.
                Each tool is designed in TextCraft to provide instant results, making it easy
                to see changes and insights in real-time. Whether you're
                preparing content for publishing or studying textual data,
                TextCraft enhances efficiency and accuracy in text processing.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser Compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
                This word counter software works in any web browser such as Chrome, Firefox, Internet Explore, Safari, Opera. It suits to count character inblogs, books, pdf, document, essays etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}