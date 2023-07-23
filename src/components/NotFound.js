import React from "react";
import GoBackButton from "./shared/GoBackButton";

export default function NotFound() {
  return (
    <div>
      <h1 className="title">404 - Page Not Found</h1>
      <p className="subtitle">Oops! The page you're looking for doesn't exist.</p>
      <GoBackButton />
    </div>
  );
}
