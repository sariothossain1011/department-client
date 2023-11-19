import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { toast } from "react-toastify";

export default function BlogPost() {
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");

  const editorRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const article = {
      title: title,
      body: body,
      image: image,
    };
    fetch("https://department-server-tau.vercel.app/api/v1/create-blog", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(article),
    })
      .then((res) => res.json())
      .then((insertData) => {
        console.log(insertData.status == "success");
        if (insertData.status == "success") {
          toast.success("You Are Successfully Post!");
        }
      });
    e.reset();
  };
  return (
    <>
      <div className="my-10 py-4 rounded-lg px-5 md:px-10 mx-auto shadow-xl">
        <h2 className="text-3xl text-center mt-2 mb-5 uppercase">
          Write a blog...
        </h2>
        <form
          className=" items-stretch    rounded-lg p-10"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label className="text-3xl capitalize my-2 text-gray-500">
            Post Title
          </label>
          <input
            name="title"
            type="text"
            placeholder="Enter Blog Title"
            className="input input-bordered border-primary bg-white w-full mb-5"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            required
          />
          <label className="text-3xl capitalize my-2 text-gray-500">
            Select Main Image
          </label>
          <input
            name="title"
            type="url"
            placeholder="Enter photo url"
            className="input input-bordered border-primary bg-white w-full mb-5"
            onChange={(e) => {
              setImage(e.target.value);
            }}
            required
          />
          <label className="text-3xl capitalize my-2 text-gray-500">
            Write your Post
          </label>
          <Editor
            apiKey="38i1zd4i57jnnyxixqbg7blu6xsq1mrqv644n6dgpdpo54th"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="Write Your Blog..."
            textareaName="description"
            init={{
              height: 400,
              selector: "textarea",

              menubar: "file insert edit format help",
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "codesample",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",

                "help",
                "wordcount",
                "autosave",
                "emoticons",
              ],
              codesample_languages: [
                { text: "HTML/XML", value: "markup" },
                { text: "JavaScript", value: "javascript" },
                { text: "CSS", value: "css" },
                { text: "PHP", value: "php" },
                { text: "Ruby", value: "ruby" },
                { text: "Python", value: "python" },
                { text: "Java", value: "java" },
                { text: "C", value: "c" },
                { text: "C#", value: "csharp" },
                { text: "C++", value: "cpp" },
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | link image media | bullist numlist outdent indent | " +
                "removeformat restoredraft preview code emoticons codesample",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
              autosave_ask_before_unload: false,
            }}
            onEditorChange={(newText) => setBody(newText)}
          />
          <div className=" w-full block text-center">
            <button
              className="btn bg-[#0B58E5] text-white hover:bg-[#0B58E5]  w-full"
              type="submit"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
