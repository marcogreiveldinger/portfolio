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

const PrivacyPolicyPage: React.FC = () => {
  return (
    <main className="px-container prose-custom mx-auto !max-w-container pb-24 pt-12">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mt-8">Privacy Policy</h1>

        <h1 className="text-3xl font-bold mt-8">
          1. Data Protection at a Glance
        </h1>
        <h1 className="text-xl font-bold mt-8">General information</h1>
        <p>
          The following notes provide a simple overview of what happens to your
          personal data when you visit this website. Personal data is any data
          by which you can be personally identified. For more detailed
          information on data protection, please refer to our privacy policy
          listed below this text.
        </p>

        <h1 className="text-3xl font-bold mt-8">
          Data Collection on This Website
        </h1>
        <p>
          <strong>
            Who is responsible for data collection on this website?
          </strong>
          <br />
          Data processing on this website is carried out by the website
          operator. You can find his contact details in the section &quot;Note
          on the responsible party&quot; in this data protection declaration.
        </p>
        <p>
          <strong>How do we collect your data?</strong>
          <br />
          On the one hand, your data is collected by you providing it to us.
          This can be, for example, data that you enter in a contact form. Other
          data is collected automatically or after your consent when you visit
          the website by our IT systems. This is mainly technical data (e.g.
          Internet browser, operating system, or time of page view). This data
          is collected automatically as soon as you enter this website.
        </p>
        <p>
          <strong>What do we use your data for?</strong>
          <br />
          Some of the data is collected to ensure error-free provision of the
          website. Other data may be used to analyze your user behavior.
        </p>

        <h1 className="text-3xl font-bold mt-8">
          What Rights Do You Have Regarding Your Data?
        </h1>
        <p>
          You have the right at any time to receive information free of charge
          about the origin, recipient, and purpose of your stored personal data.
          You also have a right to request the correction or deletion of this
          data. If you have given your consent to data processing, you can
          revoke this consent at any time for the future. You also have the
          right to request the restriction of the processing of your personal
          data under certain circumstances.
        </p>
        <p>
          Furthermore, you have the right to lodge a complaint with the
          competent supervisory authority. For this purpose, as well as for
          further questions on the subject of data protection, you can contact
          us at any time.
        </p>

        <h1 className="text-3xl font-bold mt-8">
          Analysis Tools and Third-Party Tools
        </h1>
        <p>
          When visiting this website, your surfing behavior may be statistically
          analyzed. This is done primarily with so-called analysis programs.
          Detailed information about these analysis programs can be found in the
          following privacy policy.
        </p>
        <p>
          <h1 className="text-xl font-bold mt-8">
            Plausible Analytics (Local Hosting)
          </h1>
          <br />
          We use the analysis software Plausible Analytics
          (&quot;Plausible&quot;) on our website, on our own servers in Germany,
          in order to continuously optimize our offer, both technically and in
          terms of content. Plausible is a GDPR-compliant open source software
          from the company Plausible Insights OÜ, Västriku tn 2, 50403, Tartu,
          Estonia.
        </p>
        <p>
          By using Plausible, we take a particularly privacy-friendly approach
          to analyzing your visit. Plausible collects the following information,
          among other things, for this purpose:
        </p>
        <ul className="list-disc ml-6">
          <li>Date and time of your visit</li>
          <li>Title and URL of the pages visited</li>
          <li>Incoming links</li>
          <li>Country in which you are located</li>
          <li>User agent of your browser software</li>
        </ul>
        <p>
          Plausible does not use or store cookies on your terminal device. All
          personal data (e.g. your IP address) is completely anonymized and
          stored in the form of a so-called hash. A hash is an encryption of
          data that is not reversible, i.e. can no longer be decrypted. In this
          way, we can analyze your visit without storing personal data in a form
          that would be readable by us or others.
        </p>
        <p>
          More information about &quot;Plausible Analytics&quot; privacy policy
          can be found on their website. (
          <Link
            href="https://plausible.io/data-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://plausible.io/data-policy
          </Link>
          )
        </p>
        <h1 className="text-3xl font-bold mt-8">2. Hosting</h1>
        <p>We host the contents of our website with the following provider:</p>
        <p>
          <strong>External Hosting</strong>
          <br />
          This website is hosted externally. The personal data collected on this
          website is stored on the servers of the hoster(s). This may include,
          but is not limited to, IP addresses, contact requests, meta and
          communication data, contract data, contact details, names, website
          accesses, and other data generated via a website.
        </p>
        <p>
          External hosting is carried out for the purpose of contract
          fulfillment for our potential and existing customers (Art. 6 para. 1
          lit. b GDPR) and in the interest of a secure, fast, and efficient
          provision of our online offer by a professional provider (Art. 6 para.
          1 lit. f GDPR). Insofar as a corresponding consent has been requested,
          the processing is carried out exclusively on the basis of Art. 6 para.
          1 lit. a GDPR and § 25 para. 1 TTDSG, insofar as the consent includes
          the storage of cookies or access to information in the user&apos;s
          terminal device (e.g. device fingerprinting) as defined by the TTDSG.
          The consent can be revoked at any time.
        </p>
        <p>
          Our hoster(s) will only process your data to the extent necessary to
          fulfill their service obligations and follow our instructions
          regarding this data.
        </p>
        <p>
          <strong> We use the following hoster(s):</strong>
          <br />
          Vercel Inc.
          <br />
          440 N Barranca Ave #4133 Covina, CA 91723
          <br />
          Email: privacy@vercel.com
        </p>
        <p>
          <strong>Data Processing</strong>
          <br />
          We have entered into an Data Processing Agreement (DPA) for the use of
          the above service. This is a contract required by data protection law,
          which ensures that it only processes the personal data of our website
          visitors in accordance with our instructions and in compliance with
          the GDPR.
          <br />
          For more information, please see Vercel&apos;s Data Processing
          Agreement:{" "}
          <Link
            href="https://vercel.com/legal/dpa"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://vercel.com/legal/dpa
          </Link>
        </p>

        <h1 className="text-3xl font-bold mt-8">
          3. General Notes and Obligatory Information - Data Protection
        </h1>
        <p>
          The operators of these pages take the protection of your personal data
          very seriously. We treat your personal data confidentially and in
          accordance with the statutory data protection regulations and this
          data protection declaration.
        </p>
        <p>
          When you use this website, various personal data is collected.
          Personal data is data with which you can be personally identified.
          This privacy policy explains what data we collect and what we use it
          for. It also explains how and for what purpose this is done.
        </p>
        <p>
          We would like to point out that data transmission on the Internet
          (e.g. when communicating by e-mail) can have security gaps. Complete
          protection of data against access by third parties is not possible.
        </p>

        <h1 className="text-3xl font-bold mt-8">
          Note on the Responsible Party
        </h1>
        <p>The responsible party for data processing on this website is:</p>
        <p>
          <strong>{imprintData.name}</strong>
          <br />
          {imprintData.address}
          <br />
          Email: {imprintData.email}
        </p>
        <p>
          The controller is the natural or legal person who alone or jointly
          with others determines the purposes and means of the processing of
          personal data (e.g. names, e-mail addresses, or similar).
        </p>

        <h1 className="text-3xl font-bold mt-8">Storage Period</h1>
        <p>
          Unless a more specific storage period has been stated within this
          privacy policy, your personal data will remain with us until the
          purpose for processing the data no longer applies. If you assert a
          legitimate request for deletion or revoke your consent to data
          processing, your data will be deleted unless we have other legally
          permissible reasons for storing your personal data (e.g. retention
          periods under tax or commercial law); in the latter case, the data
          will be deleted once these reasons no longer apply.
        </p>

        <h1 className="text-3xl font-bold mt-8">
          General Information on the Legal Basis for Data Processing on This
          Website
        </h1>
        <p>
          If you have consented to data processing, we process your personal
          data on the basis of Art. 6 (1) lit. a GDPR or Art. 9 (2) lit. a GDPR,
          if special categories of data are processed according to Art. 9 (1)
          GDPR. In the case of explicit consent to the transfer of personal data
          to third countries, the data processing is also based on Art. 49 (1) a
          GDPR. If you have consented to the storage of cookies or to the access
          to information in your terminal device (e.g. via device
          fingerprinting), the data processing is additionally carried out on
          the basis of Section 25 (1) TTDSG. The consent can be revoked at any
          time.
        </p>
        <p>
          If your data is required for the performance of a contract or for the
          implementation of pre-contractual measures, we process your data on
          the basis of Art. 6 para. 1 lit. b GDPR. Furthermore, if your data is
          required for the fulfillment of a legal obligation, we process it on
          the basis of Art. 6 para. 1 lit. c GDPR. Furthermore, the data
          processing may be carried out on the basis of our legitimate interest
          according to Art. 6 para. 1 lit. f GDPR. Information about the
          relevant legal basis in each individual case is provided in the
          following paragraphs of this privacy policy.
        </p>

        <h1 className="text-3xl font-bold mt-8">Recipients of Personal Data</h1>
        <p>
          In the course of our business activities, we cooperate with various
          external bodies. In some cases, this also requires the transfer of
          personal data to these external bodies. We only pass on personal data
          to external bodies if this is necessary within the framework of the
          performance of a contract, if we are legally obliged to do so (e.g.
          passing on data to tax authorities), if we have a legitimate interest
          in passing on the data in accordance with Art. 6 (1) lit. f GDPR or if
          another legal basis permits the passing on of the data. When using
          processors, we only disclose personal data of our customers on the
          basis of a valid contract on commissioned processing. In the case of
          joint processing, a contract on joint processing will be concluded.
        </p>

        <h1 className="text-3xl font-bold mt-8">
          Withdrawal of Your Consent to Data Processing
        </h1>
        <p>
          Many data processing operations are only possible with your explicit
          consent. You can revoke consent you have already given at any time.
          The legality of the data processing carried out until the revocation
          remains unaffected by the revocation.
        </p>

        <h1 className="text-3xl font-bold mt-8">
          Right to Object to the Collection of Data in Specific Cases and to
          Direct Marketing (Art. 21 GDPR)
        </h1>
        <p>
          IF THE DATA PROCESSING IS BASED ON ART. 6 ABS. 1 LIT. E OR F GDPR, YOU
          HAVE THE RIGHT TO OBJECT TO THE PROCESSING OF YOUR PERSONAL DATA AT
          ANY TIME FOR REASONS ARISING FROM YOUR PARTICULAR SITUATION; THIS ALSO
          APPLIES TO PROFILING BASED ON THESE PROVISIONS. THE RESPECTIVE LEGAL
          BASIS ON WHICH PROCESSING IS BASED CAN BE FOUND IN THIS PRIVACY
          POLICY. IF YOU OBJECT, WE WILL NO LONGER PROCESS YOUR PERSONAL DATA
          CONCERNED UNLESS WE CAN DEMONSTRATE COMPELLING LEGITIMATE GROUNDS FOR
          THE PROCESSING WHICH OVERRIDE YOUR INTERESTS, RIGHTS, AND FREEDOMS, OR
          THE PROCESSING IS FOR THE PURPOSE OF ASSERTING, EXERCISING, OR
          DEFENDING LEGAL CLAIMS (OBJECTION UNDER ARTICLE 21(1) GDPR).
        </p>
        <p>
          IF YOUR PERSONAL DATA ARE PROCESSED FOR THE PURPOSE OF DIRECT
          MARKETING, YOU HAVE THE RIGHT TO OBJECT AT ANY TIME TO THE PROCESSING
          OF PERSONAL DATA CONCERNING YOU FOR THE PURPOSE OF SUCH MARKETING;
          THIS ALSO APPLIES TO PROFILING INSOFAR AS IT IS RELATED TO SUCH DIRECT
          MARKETING. IF YOU OBJECT, YOUR PERSONAL DATA WILL SUBSEQUENTLY NO
          LONGER BE USED FOR THE PURPOSE OF DIRECT MARKETING (OBJECTION PURSUANT
          TO ARTICLE 21 (2) GDPR).
        </p>

        <h1 className="text-3xl font-bold mt-8">
          Right of Appeal to the Competent Supervisory Authority
        </h1>
        <p>
          In the event of violations of the GDPR, data subjects shall have a
          right of appeal to a supervisory authority, in particular in the
          Member State of their habitual residence, their place of work, or the
          place of the alleged violation. The right of appeal is without
          prejudice to any other administrative or judicial remedy.
        </p>

        <h1 className="text-3xl font-bold mt-8">Right to Data Portability</h1>
        <p>
          You have the right to have data that we process automatically on the
          basis of your consent or in fulfillment of a contract handed over to
          you or to a third party in a common, machine-readable format. If you
          request the direct transfer of the data to another responsible party,
          this will only be done insofar as it is technically feasible.
        </p>

        <h1 className="text-3xl font-bold mt-8">
          Information, Correction, and Deletion
        </h1>
        <p>
          Within the framework of the applicable legal provisions, you have the
          right at any time to free information about your stored personal data,
          its origin and recipient and the purpose of data processing and, if
          applicable, a right to correction or deletion of this data. For this
          purpose, as well as for further questions on the subject of personal
          data, you can contact us at any time.
        </p>

        <h1 className="text-3xl font-bold mt-8">
          Right to Restriction of Processing
        </h1>
        <p>
          You have the right to request the restriction of the processing of
          your personal data. For this purpose, you can contact us at any time.
          The right to restriction of processing exists in the following cases:
        </p>
        <ul className="list-disc ml-6">
          <li>
            If you dispute the accuracy of your personal data stored by us, we
            usually need time to verify this. For the duration of the review,
            you have the right to request the restriction of the processing of
            your personal data.
          </li>
          <li>
            If the processing of your personal data happened/is happening
            unlawfully, you can request the restriction of data processing
            instead of deletion.
          </li>
          <li>
            If we no longer need your personal data, but you need it to
            exercise, defend or assert legal claims, you have the right to
            request restriction of the processing of your personal data instead
            of erasure.
          </li>
          <li>
            If you have lodged an objection pursuant to Art. 21 (1) GDPR, a
            balancing of your and our interests must be carried out. As long as
            it has not yet been determined whose interests prevail, you have the
            right to request the restriction of the processing of your personal
            data.
          </li>
        </ul>
        <p>
          If you have restricted the processing of your personal data, this data
          may - apart from being stored - only be processed with your consent or
          for the assertion, exercise, or defense of legal claims or for the
          protection of the rights of another natural or legal person or for
          reasons of an important public interest of the European Union or a
          Member State.
        </p>

        <h1 className="text-3xl font-bold mt-8">SSL or TLS Encryption</h1>
        <p>
          For security reasons and to protect the transmission of confidential
          content, such as orders or requests that you send to us as the site
          operator, this site uses SSL or TLS encryption. You can recognize an
          encrypted connection by the fact that the address line of the browser
          changes from &quot;http://&quot; to &quot;https://&quot; and by the
          lock symbol in your browser line. If SSL or TLS encryption is
          activated, the data you transmit to us cannot be read by third
          parties.
        </p>

        <h1 className="text-3xl font-bold mt-8">
          4. Data Collection on This Website - Server Log Files
        </h1>
        <p>
          The provider of the pages automatically collects and stores
          information in so-called server log files, which your browser
          automatically transmits to us. These are:
        </p>
        <ul className="list-disc ml-6">
          <li>Browser type and version</li>
          <li>Operating system used</li>
          <li>Referrer URL</li>
          <li>Host name of the accessing computer</li>
          <li>Time of the server request</li>
          <li>IP address</li>
        </ul>
        <p>
          This data is not merged with other data sources. The collection of
          this data is based on Art. 6 para. 1 lit. f GDPR. The website operator
          has a legitimate interest in the technically error-free presentation
          and optimization of its website - for this purpose, the server log
          files must be collected.
        </p>

        <h1 className="text-3xl font-bold mt-8">
          Inquiry by E-mail, Telephone or Fax
        </h1>
        <p>
          If you contact us by e-mail, telephone, or fax, your inquiry,
          including all resulting personal data (name, inquiry), will be stored
          and processed by us for the purpose of processing your request. We do
          not pass on this data without your consent. The processing of this
          data is based on Art. 6 (1) lit. b GDPR if your request is related to
          the performance of a contract or is necessary for the implementation
          of pre-contractual measures. In all other cases, the processing is
          based on our legitimate interest in the effective processing of the
          requests sent to us (Art. 6 (1) (f) GDPR) or on your consent (Art. 6
          (1) (a) GDPR) if this has been requested; the consent can be revoked
          at any time. The data you send to us via contact requests will remain
          with us until you request us to delete it, revoke your consent to
          store it, or the purpose for storing the data no longer applies (e.g.
          after your request has been processed). Mandatory legal provisions -
          in particular legal retention periods - remain unaffected.
        </p>

        <h1 className="text-3xl font-bold mt-8">
          5. Plugins and Tools - Font Awesome (Local Hosting)
        </h1>
        <p>
          This site uses Font Awesome for consistent font rendering. Font
          Awesome is installed locally. There is no connection to Fonticons,
          Inc. servers. For more information about Font Awesome, please see the
          Font Awesome privacy policy at:{" "}
          <Link
            href="https://fontawesome.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://fontawesome.com/privacy
          </Link>
          .
        </p>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: undefined,
  robots: {
    follow: false,
    index: false,
  },
};
