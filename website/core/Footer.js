/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
    docUrl(doc, language) {
        const baseUrl = this.props.config.baseUrl;
        const docsUrl = this.props.config.docsUrl;
        const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
        const langPart = `${language ? `${language}/` : ''}`;
        return `${baseUrl}${docsPart}${langPart}${doc}`;
    }

    pageUrl(doc, language) {
        const baseUrl = this.props.config.baseUrl;
        return baseUrl + (language ? `${language}/` : '') + doc;
    }

    render() {
        return (
            <footer className="nav-footer" id="footer">
                <section className="sitemap">
                    <a href={this.props.config.baseUrl} className="nav-home">
                        {this.props.config.footerIcon && (
                            <img
                                src={this.props.config.baseUrl + this.props.config.footerIcon}
                                alt={this.props.config.title}
                                width="66"
                                height="58"
                            />
                        )}
                    </a>
                    <div>
                        <h5>Docs</h5>
                        <a href={this.docUrl('introduction.html', this.props.language)}>
                            Go to docs
                        </a>
                    </div>
                    <div>
                        <h5>Community</h5>
                        <a
                            href="https://community.maicol07.it"
                            target="_blank">
                            Talk in the community
                        </a>
                    </div>
                    <div>
                        <h5>More</h5>
                        <a href="https://github.com/maicol07">GitHub</a>
                        <a
                            className="github-button"
                            href={this.props.config.repoUrl}
                            data-icon="octicon-star"
                            data-count-href="/maicol07/maicol07_docs/stargazers"
                            data-show-count="true"
                            data-count-aria-label="# stargazers on GitHub"
                            aria-label="Star this project on GitHub">
                            Star
                        </a>
                        {this.props.config.twitterUsername && (
                            <div className="social">
                                <a
                                    href={`https://twitter.com/${
                                        this.props.config.twitterUsername
                                    }`}
                                    className="twitter-follow-button">
                                    Follow @{this.props.config.twitterUsername}
                                </a>
                            </div>
                        )}
                        {this.props.config.facebookAppId && (
                            <div className="social">
                                <div
                                    className="fb-like"
                                    data-href={this.props.config.url}
                                    data-colorscheme="dark"
                                    data-layout="standard"
                                    data-share="true"
                                    data-width="225"
                                    data-show-faces="false"
                                />
                            </div>
                        )}
                    </div>
                </section>

                <a
                    href="https://maicol07.it/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="fbOpenSource"
                    style={{"width": 50}}>
                    <img
                        src={`${this.props.config.baseUrl}img/icon.png`}
                        alt="Maicol07"
                        width="170"
                        height="45"
                    />
                </a>
                <section className="copyright">{this.props.config.copyright}</section>
            </footer>
        );
    }
}

module.exports = Footer;
