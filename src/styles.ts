/**
 * This module contains style properties for various components
 */

import { CSSProperties } from "react";

// Default primary message style for the UserMessage component
export const defaultPrimaryStyle: CSSProperties = {
  color: '#ffffff',
  backgroundColor: '#7070db',
  border: 'thin solid #7070db',
  borderRadius: '10px',
  padding: '6px',
  margin: '3px',
  display: 'inline-block',
  fontFamily: 'Helvetica, sans-serif',
  overflowWrap: 'break-word',
  maxWidth: '200px',
};

// Default secondary message style for the UserMessage component
export const defaultSecondaryStyle: CSSProperties = {
  color: '#000000',
  backgroundColor: '#DCDCDC',
  border: 'thin solid #DCDCDC',
  borderRadius: '10px',
  padding: '6px',
  margin: '3px',
  display: 'inline-block',
  fontFamily: 'Helvetica, sans-serif',
  overflowWrap: 'break-word',
  maxWidth: '200px',
};

// Default sender name field style for the UserMessage component
export const defaultSenderStyle: CSSProperties = {
  color: '#808080',
  fontFamily: 'Helvetica, sans-serif',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  margin: '5px 5px 3px',
  display: 'inline-block',
  maxWidth: '200px',
};

// Default textarea style for the InputArea component
export const defaultTextAreaStyle: CSSProperties = {
  height: '40px',
  fontFamily: 'Helvetica, sans-serif',
  padding: '10px',
  borderRadius: '10px',
  border: '1px solid #CCC',
  boxShadow: '1px 1px 1px #999',
  resize: 'none',
  outline: 'none',
};

// Default submit input style for the InputArea component
export const defaultSubmitButtonStyle: CSSProperties = {
  width: '60px',
  height: '30px',
  fontFamily: 'Helvetica, sans-serif',
  borderRadius: '10px',
  border: 'thin solid #DCDCDC',
  boxShadow: '1px 1px 1px #999',
  cursor: 'pointer',
};
