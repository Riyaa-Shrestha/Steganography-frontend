import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { Footer, Header } from "../components";
import { Layout } from "../components";
import styles from "../styles/Home.module.css";

export default function Child1() {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  function renderForm() {
    if (currentStep === 0) {
      return (
        <div>
          <div
            className={styles.container}
            style={{ paddingTop: "150px" }}
          ></div>
          <h2 className={styles.titleh2}>
            Step 2.1: Insert the Stego Image with the secret message.
          </h2>
          <div className={styles.contentWrapper}>
            <div className={styles.imageDropper}>
              <input
                type="file"
                className={styles.inputfile}
                onChange={(e) => {
                  const file = e.target.files[0];

                  if (!file) {
                    return;
                  }

                  setCurrentStep(currentStep + 1);

                  setFormData({
                    ...formData,
                    file,
                  });
                }}
              />
              <label for="file">Upload Image</label>
            </div>
          </div>
        </div>
      );
    }
    if (currentStep === 1) {
      return (
        <div>
          <div
            className={styles.container}
            style={{ paddingTop: "97px" }}
          ></div>
          <h2 className={styles.titleh2}>
            Step 2.2: Make sure it is the right image.
          </h2>
          <div className={styles.contentWrapper}>
            {
              <img
                className={styles.imageWrapper}
                src={URL.createObjectURL(formData.file)}
                width={"250px"}
              />
            }
          </div>
          <button
            className={styles.buttonBack}
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            No, Re-upload
          </button>
          <button
            className={styles.buttonSubmit}
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Yes, Go Next
          </button>
        </div>
      );
    }
    if (currentStep === 2) {
      return (
        <div>
          <div
            className={styles.container}
            style={{ paddingTop: "152px" }}
          ></div>
          <h2 className={styles.titleh2}>
            Step 3: Insert the password for Decryption
          </h2>
          <div className={styles.contentWrapper}>
            <input
              type="password"
              className={styles.inputText}
              value={formData.password}
              onChange={(e) => {
                const newValue = e.target.value;

                setFormData({
                  ...formData,
                  password: newValue,
                });
              }}
            />
          </div>
          <button
            className={styles.buttonBack}
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Go Back
          </button>
          <button
            className={styles.buttonSubmit}
            onClick={() => setCurrentStep(currentStep + 1)}
          >
            Decrypt
          </button>
        </div>
      );
    }

    const loadingTimer = () => {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 2000);
    };

    if (currentStep === 3) {
      const Bgcolor = "white";
      const Completed = 60;

      return (
        <div>
          <div
            className={styles.container}
            style={{ paddingTop: "200px" }}
          ></div>
          {loadingTimer()}
          <div className={styles.contentWrapper}>
            <h2 className={styles.titleh3}>Decrypting...</h2>
            {/* <LoadingBar /> */}
          </div>
        </div>
      );
    }

    if (currentStep === 4) {
      return (
        <div>
          <div
            className={styles.container}
            style={{ paddingTop: "128px" }}
          ></div>
          <h2 className={styles.titleh2}>
            🎉 Congratulations! Here is your hidden text 🎉
          </h2>
          <div className={styles.contentWrapper}>
            <div className={styles.results}>
              <p>hidden</p>
              <div className={styles.afterImage}>
                <img
                  src={URL.createObjectURL(formData.file)}
                  className={styles.imageWrapper}
                  width={"350px"}
                  height={"350px"}
                />
              </div>
            </div>
          </div>

          <button
            className={styles.buttonDefault}
            onClick={() => setCurrentStep(0)}
          >
            Decrypt more
          </button>
          <Link href="/">
            <a className={styles.buttonDefault}>Homepage</a>
          </Link>
        </div>
      );
    }
  }

  return (
    <div className={styles.main}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Layout className={styles.container}>
        {/* <h2 className={styles.titleh2}>This is the 2nd Child page. We can add anything here.</h2>
        <button className={styles.buttonSubmit} type="button" onClick={() => router.back()}>
          Click here to go back to Home
        </button> */}
        <div>{renderForm()}</div>
      </Layout>
      <Footer />
    </div>
  );
}
