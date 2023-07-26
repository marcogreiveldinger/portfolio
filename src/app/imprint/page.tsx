import React from "react";
import { Metadata } from "next";
import Link from "next/link";

type ImprintDataType = {
  name: string;
  address: string;
  email: string;
};

const imprintData: ImprintDataType = {
  name: "Marco Greiveldinger",
  address: "Kleiberweg 6a, 21244 Buchholz in der Nordheide, Germany",
  email: "hello@marco-greiveldinger.de",
};

const ImprintPage: React.FC = () => {
  return (
    <main className="px-container prose-custom mx-auto !max-w-container pb-24 pt-12">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Imprint</h1>
        <p className="mb-8">Information pursuant to § 5 TMG:</p>
        <div>
          <p>
            <strong>Name:</strong> {imprintData.name}
          </p>
          <p>
            <strong>Address:</strong> {imprintData.address}
          </p>
          <p>
            <strong>Email:</strong> {imprintData.email}
          </p>
        </div>
        <hr className="mt-2" />
        <h1 className="text-2xl font-bold mt-2">VAT-ID</h1>
        <p>
          Value-added tax identification number pursuant to § 27 a
          Umsatzsteuergesetz: DE360916583
        </p>
        <h1 className="text-2xl font-bold mt-2">Editorially responsible</h1>
        <div>
          <p>
            <strong>Name:</strong> {imprintData.name}
          </p>
          <p>
            <strong>Address:</strong> {imprintData.address}
          </p>
        </div>
        <h1 className="text-2xl font-bold mt-2">EU Dispute Resolution</h1>
        <p>
          The European Commission provides a platform for online dispute
          resolution (OS):
          <Link
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://ec.europa.eu/consumers/odr/
          </Link>
        </p>
        <p>You can find our e-mail address in the imprint above.</p>

        <h1 className="text-2xl font-bold mt-2">
          Consumer dispute resolution/universal arbitration board
        </h1>
        <p>
          We are not prepared or obliged to participate in dispute resolution
          proceedings before a consumer arbitration board. participate.
        </p>
      </div>
    </main>
  );
};

export default ImprintPage;

export const metadata: Metadata = {
  title: "Imprint",
  description: undefined,
  robots: {
    follow: false,
    index: false,
  },
};
