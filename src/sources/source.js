/**
 * A documentation source.
 */
class Source {
	constructor(name) {
		this.name = name || "Unknown Source";

		this.nav = [];
		this.pages = {};
	}

	/**
	 * Fetches the documentation source's page list.
	 * @abstract
	 * @returns {string[]} The documentation pages provided by the source.
	 */
	fetchNavRaw() {
		return [];
	}

	/**
	 * Fetches and caches the documentation source's page list.
	 * @returns {string[]} The documentation pages provided by the source.
	 */
	async fetchNav() {
		if (!Array.isArray(this.nav) || this.nav.length === 0) {
			return this.nav = await this.fetchNavRaw();
		}
	}

	/**
	 * Fetches a page's contents.
	 * @abstract
	 * @param {string} id The slug/identifier of the page to fetch.
	 * @returns {string} The page contents.
	 */
	fetchPageRaw(id) {
		return `Page with ID ${id}`;
	}

	/**
	 * Fetches and caches a page's contents.
	 * @param {string} id The slug/identifier of the page to fetch.
	 * @returns {string} The page contents.
	 */
	async fetchPage(id) {
		if (!this.pages[id]) {
			return this.pages[id] = await this.fetchPageRaw(id);
		}
	}
}
module.exports = Source;