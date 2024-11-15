"use client";
import * as StyleX from "@stylexjs/stylex";
import { useState } from "react";
import EyeOpen from "../../../public/assets/eyeOpen.svg";
import EyeClose from "../../../public/assets/eyeClose.svg";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import Loader from "../../../public/assets/loader.json";
import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [showUsernameError, setShowUsernameError] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignin = () => {
    let hasError = false;
    // const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\_]).{8,}$/;
    // const emailPattern = /\S+@\S+\.\S+/;

    if (!username) {
      setUsernameError("Please Enter a username.");
      setShowUsernameError(true);
      hasError = true;
    } else if (username !== "admin@gmail.com") {
      setUsernameError("*Invalid username. Example: sample@gmail.com");
      setShowUsernameError(true);
      hasError = true;
    } else {
      setShowUsernameError(false);
    }

    if (!password) {
      setPasswordError("Please Enter a password.");
      setShowPasswordError(true);
      hasError = true;
    } else if (password !== "Test@12345") {
      setPasswordError("*Invalid password. Example: Sample@123");
      setShowPasswordError(true);
      hasError = true;
    } else {
      setShowPasswordError(false);
    }

    if (!hasError) {
      setIsLoading(true);
      router.push("/dashboard");
    }
  };

  const handleBlur = () => {
    if (!username) {
      setUsernameError("Please enter a username.");
      setShowUsernameError(true);
    }
    if (!password) {
      setPasswordError("Please enter a password.");
      setShowPasswordError(true);
    }
  };

  const passwordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>
      {isLoading && (
        <div {...StyleX.props(styles.loaderDiv, styles.centerChild)}>
          <div {...StyleX.props(styles.loader)}>
            <Lottie animationData={Loader} loop />
          </div>
        </div>
      )}
      <div {...StyleX.props(styles.overlay)}>
        <div {...StyleX.props(styles.container)}>
          <div {...StyleX.props(styles.formContainer)}>
            <div {...StyleX.props(styles.heading)}>
              <h1>Sign in</h1>
            </div>
            <div {...StyleX.props(styles.textInputContainer)}>
              <input
                type="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onBlur={handleBlur}
                {...StyleX.props(styles.textInput)}
                onFocus={() => setShowUsernameError(false)}
              />
            </div>
            {showUsernameError && (
              <div {...StyleX.props(styles.errorText)}>{usernameError}</div>
            )}

            <div {...StyleX.props(styles.textInputContainer)}>
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={handleBlur}
                {...StyleX.props(styles.textInput)}
                onFocus={() => setShowPasswordError(false)}
              />
              <div
                {...StyleX.props(styles.eyeIcon)}
                onClick={passwordVisibility}
              >
                {passwordVisible ? (
                  <Image src={EyeOpen} alt="" width={22} height={22} />
                ) : (
                  <Image src={EyeClose} alt="" width={22} height={22} />
                )}
              </div>
            </div>
            {showPasswordError && (
              <div {...StyleX.props(styles.errorText)}>{passwordError}</div>
            )}

            <div {...StyleX.props(styles.signinButtonContainer)}>
              <button
                {...StyleX.props(styles.signinButton)}
                onClick={handleSignin}
              >
                Sign in
              </button>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <p>
                don't have a bussiness account?{" "}
                <Link href="/signUp" {...StyleX.props(styles.signinlink)}>
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = StyleX.create({
  centerChild: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 50,
  },
  signinlink: {
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#000",
    marginTop: 15,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: {
      default: "60%",
      "@media (max-width: 768px)": "80%",
    },
    height: "80vh",
    zIndex: 80,
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: {
      default: "2em",
      "@media (max-width: 480px)": "10px",
    },
    width: {
      default: "60%",
      "@media (max-width: 768px)": "100%",
    },
    height: "90%",
    zIndex: 10,
    opacity: "0.9",
  },
  heading: {
    marginBottom: "20px",
  },
  forget: {
    alignSelf: "flex-end",
    marginBottom: "20px",
    marginTop: "10px",
    cursor: "pointer",
  },
  textInputContainer: {
    width: "100%",
    marginBottom: "1em",
    position: "relative",
  },
  textInput: {
    backgroundColor: "transparent",
    width: "100%",
    padding: "0.8em",
    fontSize: "1em",
    border: "none",
    borderBottom: "1px solid black",
    ":focus": {
      outline: "none",
      border: "none",
    },
  },
  errorText: {
    alignSelf: "flex-start",
    paddingLeft: "12px",
    color: "red",
    fontSize: "0.9em",
    marginBottom: "1em",
  },
  signinButtonContainer: {
    width: "100%",
  },
  signinButton: {
    width: "100%",
    padding: "0.8em",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#000",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    marginTop: "10px",
    marginBottom: "20px",
    transition: "transform 0.3s ease, background-color 0.3s ease",
    ":hover": {
      backgroundColor: "#333",
      transform: "scale(1.05)",
    },
  },
  signuplink: {
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#000",
  },
  accountText: {
    fontSize: "14px",
  },
  eyeIcon: {
    position: "absolute",
    right: "10px",
    top: "20px",
    cursor: "pointer",
  },
  loaderDiv: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgb(0, 0, 0, 0.2)",
    backdropFilter: "blur(5px)",
    width: "100%",
    height: "100%",
    zIndex: 90,
  },
  loader: {
    width: "25%",
  },
});

export default SignIn;
