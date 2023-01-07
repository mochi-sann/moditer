import { invoke } from "@tauri-apps/api";
import React, { useState } from "react";
import Button from "../ui/Button/Button";
import { open } from "@tauri-apps/api/dialog";
import { readTextFile, writeTextFile } from "@tauri-apps/api/fs";
import { TextArea } from "../ui/TextArea/TextArea";

export type EditerProps = {};

export const Editer: React.FC<EditerProps> = (props) => {
  const [greetMsg, setGreetMsg] = useState("");
  const [filePath, setfilePath] = useState("");
  const [TextAreaValue, setTextAreaValue] = useState("");

  function openDialog() {
    open({
      multiple: false,
    }).then(async (files) => {
      console.log(files);
      const contents = await readTextFile(files as string, {});
      console.log(contents);
      setGreetMsg(contents);
      setTextAreaValue(contents);
      setfilePath(files as string);
      console.log(files);
    });
  }
  const SavedFile = async (args: { filePath: string; content: string }) => {
    await writeTextFile({ path: args.filePath, contents: args.content });
    console.log("save file", args);
  };
  return (
    <div>
      {" "}
      <div className="row">
        <div>
          <Button onClick={openDialog}>open</Button>
          <Button
            onClick={() =>
              SavedFile({ filePath: filePath, content: TextAreaValue })
            }
          >
            Save
          </Button>
        </div>
      </div>
      <textarea
        value={TextAreaValue}
        onChange={(evt) => setTextAreaValue(evt.target.value)}
      ></textarea>
      <p>{TextAreaValue}</p>
    </div>
  );
};
