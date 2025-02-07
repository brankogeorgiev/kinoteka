import { Await } from "react-router-dom";
import { Suspense } from "react";
import AccessDenied from "../components/AccessDenied";
import { tailChase } from "ldrs";

function AccessDeniedPage() {
  tailChase.register();

  return (
    <Suspense
      fallback={
        <p
          style={{
            textAlign: "center",
            marginTop: "15rem",
          }}
        >
          <l-tail-chase
            size="75"
            speed="2"
            color="var(--color-third)"
          ></l-tail-chase>
        </p>
      }
    >
      <Await>{() => <AccessDenied />}</Await>
    </Suspense>
  );
}

export default AccessDeniedPage;
