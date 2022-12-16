import React from "react";
import style from "./Text-area.module.scss";

export type TextAreaProps = {} & JSX.IntrinsicElements["textarea"];

export const TextArea: React.FC<TextAreaProps> = (props) => {
  const [value, setValue] = React.useState("");
  const [height, setHeight] = React.useState(0);
  const textAreaRef = React.useRef(null);
  const invisibleTextAreaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    if (invisibleTextAreaRef.current) {
      setHeight(invisibleTextAreaRef.current.scrollHeight);
    }
  }, [value]);

  function handleChangeValue(value: string) {
    setValue(value);
  }

  return (
    <React.Fragment>
      <textarea // 表示用テキストエリア
        ref={textAreaRef}
        className={style.textarea}
        value={value}
        onChange={(evt) => handleChangeValue(evt.target.value)}
        style={{ height: height ? `${height}px` : "auto" }}
      />
      <textarea // 高さ計算用テキストエリア
        ref={invisibleTextAreaRef}
        value={value}
        onChange={() => {}}
        style={{ position: "fixed", top: -999 }} // 見えない範囲へ移動
      />
    </React.Fragment>
  );
};
