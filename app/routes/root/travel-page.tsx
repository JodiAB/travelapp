// app/routes/root/travel-page.tsx
import type { LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
  return null; // prevents the error
}

export default function TravelPage() {
  return <h1>Welcome to Travel Page</h1>;
}
