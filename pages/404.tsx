import React from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function NotFoundError() {
  const router = useRouter();
  React.useEffect(() => {
    router.replace("/your-info");
  });
  return (
    <Layout>
      <div>
        <h1>Hello world</h1>
      </div>
    </Layout>
  );
}
