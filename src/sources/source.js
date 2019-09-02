class Source {
	constructor(name) {
		this.name = name || "Unknown Source";

		this.nav = [];
		this.pages = {};
	}

	/**
	 * @abstract
	 */
	fetchNavRaw() {
		return null;
	}

	async fetchNav() {
		if (!Array.isArray(this.nav) || this.nav.length === 0) {
			return this.nav = await this.fetchNavRaw();
		}
	}

	/**
	 * @abstract
	 */
	fetchPageRaw(id) {
		return `Page with ID ${id}`;
	}

	/**
	 * Returns the content of a page by its ID.
	 */
	async fetchPage(id) {
		if (!this.pages[id]) {
			return this.pages[id] = await this.fetchPageRaw(id);
		}
	}
}
module.exports = Source;