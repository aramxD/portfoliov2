import React, { useState, useEffect } from "react";
import styled from "styled-components";

const DevTo = ({ className }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function fetchDevTo() {
      const response = await fetch(
        "https://dev.to/api/articles?username=julio_santacruz"
      );
      const articles = await response.json();
      //console.log(articles);
      setUserData(articles);
    }

    fetchDevTo();
  }, []);
  console.log(userData);
  return <section className={className}>soy el devto</section>;
};

export default styled(DevTo)``;
