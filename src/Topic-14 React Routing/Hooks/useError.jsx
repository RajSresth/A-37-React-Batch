import {useState} from "react";

export const useErrorBoundary = () => {
    const [showError, setShowError] = useState(false);

    const triggerFn = (error) => {
        setShowError(error)
    }

    if(showError)
    {
        throw new Error(showError);
    }

    return { triggerFn }
}

