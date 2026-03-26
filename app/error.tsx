'use client';

import ErrorMessage from "@/app/components/ErrorMessage";
import { useEffect } from "react";

type RootErrorPageProps = {
  error : Error;
  reset : () => void;
}

export default function RootErrorPage({error}: RootErrorPageProps) {
  useEffect(() => {
    // console.error(error);
  }, [error]);

  return (
    <>
      <ErrorMessage
        pageTitle="Internal server error"
        contentTitle="501"
        content='Ocorreu um erro inesperado. Por favor, tente novamente mais tarde.'
      />
    </>
  );
}
