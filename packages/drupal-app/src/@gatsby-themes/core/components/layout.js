/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { withTheme } from 'emotion-theming';
import { Link } from 'gatsby';

const Layout = ({ children, theme }) => {
	return (
		<StaticQuery
			query={graphql`
				query SiteTitleQueryDrupal {
					site {
						siteMetadata {
							title
						}
					}
				}
			`}
			render={(data) => (
				<>
					<header>
						<div
							style={{
								margin: `0 auto`,
								maxWidth: 960,
								padding: `1.45rem 1.0875rem`
							}}
						>
							<h1 style={{ margin: 0 }}>
								<Link
									to="/"
									style={{
										color: theme.color.primaryAlt,
										textDecoration: `none`
									}}
								>
									{data.site.siteMetadata.title}
								</Link>
							</h1>
						</div>
					</header>
					<div
						style={{
							margin: `0 auto`,
							maxWidth: 960,
							padding: `0px 1.0875rem 1.45rem`,
							paddingTop: 0
						}}
					>
						<main>{children}</main>
						<footer>
							© {new Date().getFullYear()}, Built with
							{` `}
							<a href="https://www.gatsbyjs.org">Gatsby</a>
						</footer>
					</div>
				</>
			)}
		/>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	theme: PropTypes.object.isRequired
};

export default withTheme(Layout);
