import { invoke } from "@tauri-apps/api";
import React, { useState } from "react";
import Button from "../ui/Button/Button";
import { open } from "@tauri-apps/api/dialog";
import { readTextFile } from "@tauri-apps/api/fs";
import { TextArea } from "../ui/TextArea/TextArea";

export type EditerProps = {};

export const Editer: React.FC<EditerProps> = (props) => {
  const [greetMsg, setGreetMsg] = useState("");
  const [filePath, setfilePath] = useState("");

  function openDialog() {
    open({
      multiple: false,
    }).then(async (files) => {
      console.log(files);
      const contents = await readTextFile(files as string, {});
      console.log(contents);
      setGreetMsg(contents);
      setfilePath(files as string);
      console.log(files);
    });
  }
  return (
    <div>
      {" "}
      <div className="row">
        <div>
          <Button onClick={openDialog}>Click to open dialog</Button>
        </div>
      </div>
      <TextArea />
      <pre>{greetMsg}</pre>
    </div>
  );
};
