import * as React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import ebcTheme from '../theme';

const GlobalStyles = createGlobalStyle`
    body {
	position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
* {
  box-sizing: border-box;
  list-style-type: none;
}
`;

const Container = styled.div`
	font-size: ${({ theme }) => theme.font.size.p};
	h1 {
		font-size: ${({ theme }) => theme.font.size.h1};
		text-align: center;
	}
	h2 {
		font-size: ${({ theme }) => theme.font.size.h2};
		text-align: center;
	}
	h3 {
		font-size: ${({ theme }) => theme.font.size.h3};
		margin: 0 auto 1em;
	}
	h4 {
		font-size: ${({ theme }) => theme.font.size.h4};
	}
	table {
		text-align: center;
		table-layout: fixed;

	}
	th {
		font-size: ${({ theme }) => theme.font.size.h3};
		font-weight: bold;
	}
	td {
		font-size: ${({ theme }) => theme.font.size.h3};
	}
	background-color: ${({ theme }) => theme.color.background};
`;

type PageProps = {
	children: React.ReactChild;
};

export default function Page({ children }: PageProps) {
	return (
		<ThemeProvider theme={ebcTheme}>
			<React.Fragment>
				<GlobalStyles />
				<Container>{children}</Container>
			</React.Fragment>
		</ThemeProvider>
	);
}
