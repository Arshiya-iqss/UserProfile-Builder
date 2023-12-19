import React, { useEffect } from "react";
import Logo from "../../components/Logo/Logo";
import "./EntryPageStyles.scss";
import { useNavigate } from "react-router-dom";

function EntryPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const delay = 2000;
    const timeoutId = setTimeout(() => {
      navigate("/login");
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className="entryPage">
      <Logo />
    </div>
  );
}

export default EntryPage;
