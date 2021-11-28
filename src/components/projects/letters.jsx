import React from "react";
import { Letter, LetterContent, LetterWrapper } from "../../styles/projects.style";

const Letters = () => {
    return (
        <LetterContent>
            <LetterWrapper>
                <Letter>P</Letter>
                <Letter>T</Letter>
                <Letter>L</Letter>
            </LetterWrapper>
            <LetterWrapper>
                <Letter>O</Letter>
                <Letter>F</Letter>
                <Letter>I</Letter>
            </LetterWrapper>
            <LetterWrapper>
                <Letter>R</Letter>
                <Letter>O</Letter>
                <Letter>O</Letter>
            </LetterWrapper>
        </LetterContent>
    );
};

export default Letters;
