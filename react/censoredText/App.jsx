import React from "react";
import "./styles.css";
import CensoredText from './CensoredText'

export default function App() {
  const badWords = ['test', 'someBadWord'];
  const someText = 'Very long text who containts someBadWord and testWord';

  return (
    <>
      <CensoredText badWords={badWords}>{someText}</CensoredText>
    </>
  );
}


