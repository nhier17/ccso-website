"use client";

import { useState } from "react";

const UseAlert = () => {
  const [alert, setAlert] = useState({
    show: false,
    text: "",
    type: "danger",
  });

  const showAlert = ({
    text,
    type = "danger",
  }: {
    text: string;
    type?: string;
  }) => setAlert({ show: true, text, type });

  const hideAlert = (p0?: boolean) => setAlert({ show: false, text: "", type: "danger" });

  return { alert, showAlert, hideAlert };
};

export default UseAlert;