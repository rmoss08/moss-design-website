import ConnectButton from "../../components/ConnectLink/ConnectLink";
import Layout from "../../components/Layout";

import styles from './ContactPage.module.css';

const ContactPage = () => {
    return (
        <Layout>
            <div className='{styles.contact}'>
                <h1>CONTACT</h1>
                <p>I'd love to hear from you. Send me an email to get in touch.</p>
                <ConnectButton />
            </div>
        </Layout>
    );
};

export default ContactPage;