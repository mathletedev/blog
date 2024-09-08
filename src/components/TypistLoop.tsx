import React, { FC } from "react";
import Typist from "react-typist-component";

export interface Props {
    texts: string[];
}

const shuffle = (array: string[]) =>
    array
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

const TypistLoop: FC = ({ texts }) => (
    <div className="h-24">
        <Typist typingDelay={100} loop>
            {shuffle(texts).map((text) => (
                <div key={text}>
                    <Typist.Delay ms={1000} />
                    <p className="text-center text-2xl md:text-4xl italic opacity-80 select-none rainbow-text neon">
                        {text}
                    </p>
                    <Typist.Delay ms={1500} />
                    <Typist.Backspace count={text.length} />
                </div>
            ))}
        </Typist>
    </div>
);

export default TypistLoop;
