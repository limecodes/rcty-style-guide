import { createGlobalStyle, css } from 'styled-components';

export const bodyStyles = css`
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif;
	background-color: #fafafa;
	margin: 0;
	-webkit-text-size-adjust: 100%;
	font-size: 1rem;
	font-weight: 400;
	line-height: 1.15;
`;

export const GlobalStyle = createGlobalStyle`
	html {
  		box-sizing: border-box;
	}
	*,
	*:before,
	*:after {
  		box-sizing: inherit;
	}

	body {
		${bodyStyles}
	}	
`;