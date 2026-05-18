import React from "react";
import { useRouteError, useNavigate, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const isHttpError = isRouteErrorResponse(error);
  const status = isHttpError ? error.status : "Oops";
  const message = isHttpError
    ? (error.data?.message ?? error.statusText)
    : error?.message ?? "Something went wrong.";

  return (
    <div className="error-page">
      <h1 className="heading">{status}</h1>
      <p className="message">{message}</p>
      <p className="description text-sm text-gray-400 mt-1">
        The page you're looking for isn't available.
      </p>
      <button
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </div>
  );
};

export default ErrorPage;