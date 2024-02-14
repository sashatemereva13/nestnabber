import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import "./TermsOfService.css";

const TermsOfService = () => {
  return (
    <div>
      <Navigation />
      <div className="termsAndPrivacyContainer">
        <div className="termsOfServiceContainer">
          <h2>Terms of Service for Nest Nabber</h2>
          <ol>
            <li>
              Acceptance of Terms: By accessing and using Nest Nabber ("the
              Service"), you agree to comply with and be bound by the following
              Terms of Service. If you do not agree to these terms, please do
              not use the Service.
            </li>
            <li>
              User Eligibility: Users must be at least 18 years old to use Nest
              Nabber. By using the Service, you represent and warrant that you
              are at least 18 years old.
            </li>
            <li>
              User Accounts: You are responsible for maintaining the
              confidentiality of your account and password. You agree to notify
              us immediately of any unauthorized use of your account.
            </li>
            <li>
              Listing Information: Users posting flat listings on Nest Nabber
              agree to provide accurate and truthful information. Nest Nabber
              reserves the right to remove any listing that violates these
              terms.
            </li>
            <li>
              Communication: Users agree to receive communications from Nest
              Nabber, including but not limited to emails and notifications
              related to account activity, promotions, and updates.
            </li>
            <li>
              Prohibited Activities: Users shall not engage in any activities
              that violate applicable laws or the rights of others. Prohibited
              activities include, but are not limited to, fraud, harassment, and
              the dissemination of harmful content.
            </li>
            <li>
              Disclaimer of Liability: Nest Nabber is not responsible for the
              accuracy of the information provided by users. Users are
              encouraged to verify the details independently.
            </li>
            <li>
              Termination of Service: Nest Nabber reserves the right to
              terminate or suspend user accounts for violations of these terms
              or for any reason at its sole discretion.
            </li>
            <li>
              Nest Nabber has no direct affiliation with users of the site. This
              includes those advertising. Nest Nabber is a medium for connecting
              those looking for accommodation with those advertising
              accommodation. All users are liable for any risk when using Nest
              Nabber.
            </li>
          </ol>
        </div>
        <div className="privacyPolicyContainer">
          <h2>Privacy Policy for Nest Nabber</h2>
          <ol>
            <li>
              Information Collection Nest Nabber collects personal information
              provided by users, including but not limited to names, email
              addresses, and listing details.
            </li>
            <li>
              Use of Information Personal information is used for the purpose of
              providing and improving the Service. Nest Nabber may also use this
              information for communication, promotions, and research.
            </li>
            <li>
              Security Nest Nabber employs reasonable security measures to
              protect user information. However, no method of transmission over
              the internet or electronic storage is completely secure.
            </li>
            <li>
              Cookies Nest Nabber uses cookies to enhance user experience. Users
              may adjust their browser settings to refuse cookies, but some
              features of the Service may be affected.
            </li>
            <li>
              Changes to Privacy Policy Nest Nabber may update this Privacy
              Policy from time to time. Users will be notified of any
              significant changes.
            </li>
            <li>
              Contact Information For questions or concerns about this Privacy
              Policy or the Terms of Service, please contact Nest Nabber at
              [nestnabber02@gmail.com].
            </li>
            <li>
              By using Nest Nabber and furthermore creating an account you as
              the user hereby accept the aforementioned terms and privacy
              policy.
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;
