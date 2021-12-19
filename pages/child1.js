import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import { Header, Layout, Footer, LoadingBar } from "../components";
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
            Step 2.1: Drop your image below to start encrypting messages into it
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
            style={{ paddingTop: "88px" }}
          ></div>
          <h2 className={styles.titleh2}>Step 3: Insert your message</h2>
          <form onSubmit={() => setCurrentStep(currentStep + 1)}>
            <div className={styles.contentWrapper}>
              <textarea
                className={styles.textarea}
                placeholder="Type here"
                value={formData.message}
                onChange={(e) => {
                  const newValue = e.target.value;

                  setFormData({
                    ...formData,
                    message: newValue,
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
              disabled={!formData.message}
            >
              Confirm
            </button>
          </form>
        </div>
      );
    }

    if (currentStep === 3) {
      return (
        <div>
          <div
            className={styles.container}
            style={{ paddingTop: "152px" }}
          ></div>
          <h2 className={styles.titleh2}>Step 3: Set Password</h2>
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
            Finish
          </button>
        </div>
      );
    }

    const loadingTimer = () => {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 2000);
    };

    if (currentStep === 4) {
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
            <h2 className={styles.titleh3}>Encrypting...</h2>
            {/* <LoadingBar /> */}
          </div>
        </div>
      );
    }

    if (currentStep === 5) {
      return (
        <div>
          <div
            className={styles.container}
            style={{ paddingTop: "128px" }}
          ></div>
          <h2 className={styles.titleh2}>
            🎉 Congratulation! Here is your output image 🎉
          </h2>
          <div className={styles.contentWrapper}>
            <div className={styles.results}>
              <div className={styles.beforeImage}>
                <img
                  src={URL.createObjectURL(formData.file)}
                  className={styles.imageWrapper}
                  width={"350px"}
                  height={"350px"}
                />
                <div className={styles.imageLabel}>Before</div>
              </div>
              <div className={styles.afterImage}>
                <img
                  src={URL.createObjectURL(formData.file)}
                  className={styles.imageWrapper}
                  width={"350px"}
                  height={"350px"}
                />
                <div className={styles.imageLabel}>After</div>
              </div>
            </div>
          </div>

          <button
            className={styles.buttonDefault}
            onClick={() => setCurrentStep(0)}
          >
            Encrypt more
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
        {/* <button type="button" onClick={() => router.back()}>
          Click here to go back to Home
        </button> */}
        <div>{renderForm()}</div>
      </Layout>

      <Footer />
    </div>
  );
}
