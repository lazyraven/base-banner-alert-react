// import ICONS from "../helpers/constant";
// import { useState } from "react";
// import BaseIcon from "./BaseIcon.jsx";

export default function BaseAlert({ variant, title, text }) {
  const alertTypes = {
    info: "INFO",
    success: "SUCCESS",
    danger: "DANGER",
    warning: "WARNING",
    bell: "BELL",
  };

  let classes = {
    bg: `bg-blue-50`,
    iconClass: `text-blue-400`,
    title: `text-blue-600`,
    text: `text-blue-800`,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 inline"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clip-rule="evenodd"
        />
      </svg>
    ),
  };

  // const variant = "bg-amber-50";
  switch (variant) {
    case alertTypes.success:
      classes = {
        bg: `bg-emerald-50`,
        iconClass: `text-emerald-400`,
        title: `text-emerald-700`,
        text: `text-emerald-800`,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 inline"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
        ),
      };
      break;
    case alertTypes.danger:
      classes = {
        bg: `bg-red-50`,
        iconClass: `text-red-400`,
        title: `text-red-900`,
        text: `text-red-800`,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 inline"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
              clip-rule="evenodd"
            />
          </svg>
        ),
      };
      break;
    case alertTypes.warning:
      classes = {
        bg: `bg-yellow-50`,
        iconClass: `text-yellow-400`,
        title: `text-yellow-900`,
        text: `text-yellow-800`,
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 inline"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        ),
      };
      break;
    default:
      "";
  }

  return (
    <>
      <div className="border-2 border-zinc-100 m-3 rounded-lg">
        <div className="flex gap-2 py-3 justify-center ">
          <div className={"p-3 rounded-lg w-2/3 " + classes.bg}>
            <div className={"text-md font-bold py-1 " + classes.text}>
              <span className={"px-1 " + classes.iconClass}>
                {classes.icon}
              </span>
              <span className={classes.text}>{title}</span>
            </div>
            <p className={"text-sm " + classes.text}>{text}</p>
          </div>
        </div>
      </div>

      {/* <div className="border-2 border-zinc-100 m-3 rounded-lg">
        <div className="flex p-3 justify-center ">
          <div className=" bg-blue-100 p-3 rounded-lg w-2/3">
            <div className="text-md font-bold text-blue-700 py-1">
              <BaseIcon
                className="flex h-4 w-4 text-zinc-200 hover:text-zinc-100"
                iconName={ICONS.Plus}
              ></BaseIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 inline"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Attention needed</span>
            </div>

            <p className="text-sm text-blue-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
              necessitatibus nisi distinctio obcaecati animi commodi eligendi
              vel consequuntur suscipit dignissimos consequuntur suscipit
              dignissimos?
            </p>
          </div>
          <p className={classes.bg}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio,
            necessitatibus nisi distinctio obcaecati animi commodi eligendi vel
            consequuntur suscipit dignissimos consequuntur suscipit dignissimos?
          </p>
        </div>
      </div> */}
    </>
  );
}
