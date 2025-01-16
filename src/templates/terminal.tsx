/** @jsx JSX.createElement */
/** @jsxFrag JSX.Fragment */
import { Builder, JSX } from 'canvacord';

interface TerminalProps {
  name: string;
  contents: string[];
}

function Terminal({ contents, name }: TerminalProps) {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="bg-[#2e2e2e] flex w-full pt-1 pl-2 items-center">
        <div className="bg-[#0c0c0c] h-11 w-75 rounded-t-lg flex flex-row items-center justify-between px-2">
          <p className="text-white flex items-center">
            <svg
              stroke="#d2d2d2"
              fill="none"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="16px"
              width="16px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
              ></path>
            </svg>
            <span className="ml-2">C:\Users\{name}\program</span>
          </p>
          <svg
            stroke="currentColor"
            fill="white"
            stroke-width="0"
            viewBox="0 0 16 16"
            height="16px"
            width="16px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"
            ></path>
          </svg>
        </div>
        <div className="flex ml-4">
          <svg
            stroke="currentColor"
            fill="white"
            stroke-width="0"
            viewBox="0 0 16 16"
            height="16px"
            width="16px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 7v1H8v6H7V8H1V7h6V1h1v6h6z"></path>
          </svg>
          <div className="border-l-[#373737] border-2 h-5 mx-2 flex"></div>
          <svg
            stroke="currentColor"
            fill="white"
            stroke-width="0"
            viewBox="0 0 16 16"
            height="16px"
            width="16px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="bg-[#0c0c0c] h-full flex flex-col w-full text-[#a1a1a1] px-2 pt-2 pb-6">
        {contents.map((content, index) => (
          <p
            key={index}
            tw={`m-0 ${index === contents.length - 1 ? 'mb-0' : 'mb-3'}`}
          >
            {content}
          </p>
        ))}
      </div>
    </div>
  );
}

export class TerminalBuilder extends Builder<TerminalProps> {
  public setName(name: string) {
    this.options.set('name', name);
    return this;
  }

  public setContents(contents: string[]) {
    this.options.set('contents', contents);
    return this;
  }

  public render() {
    return <Terminal {...this.options.getOptions()} />;
  }
}
