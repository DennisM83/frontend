import React from "react";
import Head from 'next/head'

export default function Layout({ children, title, description, keywords }) {
  return (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Head>
      <main className="container-fluid">{children}</main>
    </div>
  );
}
