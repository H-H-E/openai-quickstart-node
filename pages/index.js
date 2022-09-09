import Head from "next/head";
import {
  useState
} from "react";
import styles from "./index.module.css";

export default function Home() {
  const [topicInput, settopicInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topic: topicInput
      }),
    });
    const data = await response.json();
    setResult(data.result);
    settopicInput("");
  }

  return ( <
    div >
    <
    Head >
    <
    title > OpenAI Quickstart < /title> <
    link rel = "icon"
    href = "/lol.png" / >
    <
    /Head>

    <
    main className = {
      styles.main
    } >
    <
    img src = "/lol.png"
    className = {
      styles.icon
    }
    /> <
    h3 > Ask
    for a joke < /h3> <
    form onSubmit = {
      onSubmit
    } >
    <
    input type = "text"
    name = "topic"
    placeholder = "Enter a joke topic"
    value = {
      topicInput
    }
    onChange = {
      (e) => settopicInput(e.target.value)
    }
    /> <
    input type = "submit"
    value = "Generate joke" / >
    <
    /form> <
    div className = {
      styles.result
    } > {
      result
    } < /div> < /
    main > <
    /div>
  );
}