import * as React from 'react';
import "./TerminalLog.css"

export interface ITerminalLogProps {
  root: string,
  query: string,
  results: string[],
}

export default function TerminalLog (props: ITerminalLogProps) {
  return (
    <div id="terminal-log-div">
      <span id="root-command">{props.root}<span id="root-command-after">:<span id="root-command-squiggly">~</span>$</span></span>
      <span>&nbsp;{props.query}</span><br/>
      {Object.keys(props.results).map((keyName, i) => (
        <><span className='row-span' key={i} dangerouslySetInnerHTML={{__html: props.results[i]}}/><br/></>
      ))}
      |<br/>
    </div>
  );
}
